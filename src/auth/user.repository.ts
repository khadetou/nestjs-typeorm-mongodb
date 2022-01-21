import { AuthCredentialsDto } from './dto/auth-crendentials.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { url } from 'gravatar';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //Authentication - Registration - User Creation
  async createUser(
    name: string,
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    const { email, password } = authCredentialsDto;
    //Check if user already exists
    let user = await this.findOne({ email });
    if (!user) {
      //Hash the password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      user = this.create({
        name,
        email,
        avatar: url && url(email, { s: '200', r: 'pg', d: 'mm' }),
        password: hashedPassword,
      });
    } else {
      throw new ConflictException('User already exists');
    }

    try {
      await this.save(user);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
