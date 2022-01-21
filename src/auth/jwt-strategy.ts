import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserRepository } from './user.repository';
import { JwtPayload } from './jwt-payload.interface';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  //Validate user by email
  async validate(payload: JwtPayload): Promise<User> {
    const { email } = payload;
    const user: User = await this.userRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
