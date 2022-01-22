import { User } from './../auth/user.entity';
import { CreateProfileDto, SocialsDto } from './dto/create-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  //CREATE PROFILE
  createProfile(
    createProfileDto: CreateProfileDto,
    socialsDto: SocialsDto,
    user: User,
  ): Promise<Profile> {
    return this.createProfile(createProfileDto, socialsDto, user);
  }
}
