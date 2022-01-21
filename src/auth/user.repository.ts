import { AuthCredentialsDto } from './dto/auth-crendentials.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import gravatar from 'gravatar';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //Authentication - Registration - User Creation
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { name, email, password } = authCredentialsDto;

    //Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      name,
      email,
      avatar: gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      }),
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      console.log(typeof error.code);
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
