import { AuthModule } from './../auth/auth.module';
import { ProfileRepository } from './profile.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepository]), AuthModule],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
