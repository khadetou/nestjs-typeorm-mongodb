import { ObjectID } from 'typeorm';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsObject,
  IsArray,
} from 'class-validator';
import { Education, Experience, Socials } from '../profile.entity';

export class CreateProfileDto {
  @IsNotEmpty()
  user: ObjectID;

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
  githubusername: string;

  experience: Experience[];

  education: Education[];

  social: Socials;
}
