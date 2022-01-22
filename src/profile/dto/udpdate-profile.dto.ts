import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsDate,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { Education, Experience, Socials } from '../profile.entity';

export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  company: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  website: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  location: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  status: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  skills: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  bio: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  githubusername: string;

  experience: Experience[];

  education: Education[];

  social: Socials;
}

export class UpdateExperienceDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  company: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  location: string;

  @IsDate()
  from: Date;

  @IsDate()
  to: Date;

  @IsBoolean()
  current: boolean;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @MinLength(2)
  description: string;
}

export class UpdateEducationDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  school: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  degree: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(2)
  fieldofstudy: string;

  @IsDate()
  from: Date;

  @IsDate()
  to: Date;

  @IsBoolean()
  current: boolean;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @MinLength(2)
  description: string;
}

export class UpdateSocialsDto {
  @IsOptional()
  youtube: string;

  @IsOptional()
  twitter: string;

  @IsOptional()
  facebook: string;

  @IsOptional()
  linkedin: string;

  @IsOptional()
  instagram: string;
}
