import { User } from './../auth/user.entity';
import { CreateProfileDto, SocialsDto } from './dto/create-profile.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Profile } from './profile.entity';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
  //CREATE PROFILE
  async createProfile(
    createProfileDto: CreateProfileDto,
    socialsDto: SocialsDto,
    user: User,
  ) {
    const {
      company,
      website,
      location,
      status,
      skillsString,
      bio,
      githubusername,
    } = createProfileDto;
    const { youtube, twitter, facebook, linkedin, instagram } = socialsDto;
    const profile = this.create({
      user: user.id,
      company,
      website,
      location,
      status,
      skills: skillsString.split(',').map((skill) => skill.trim()),
      bio,
      githubusername,
      experience: [],
      education: [],
      socials: {
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram,
      },
    });

    await this.save(profile);
    return profile;
  }
}
