import { User } from './../auth/user.entity';
import { CreateProfileDto, SocialsDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { GetUser } from 'src/auth/get-user.decorator';
import { Profile } from './profile.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
@UseGuards(AuthGuard())
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  //CREATE PROFILE
  @Post()
  createProfile(
    @Body() createProfileDto: CreateProfileDto,
    @Body() socialsDto: SocialsDto,
    @GetUser() user: User,
  ): Promise<Profile> {
    return this.profileService.createProfile(
      createProfileDto,
      socialsDto,
      user,
    );
  }
}
