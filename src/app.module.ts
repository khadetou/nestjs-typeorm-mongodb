import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { configValidationSchema } from './config.schema';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`, '.env'],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mongodb',
          url: configService.get('MONGO_URI'),
          writeConcern: { w: 'majority', wtimeout: 2500 },
          useNewUrlParser: true,
          synchronize: true,
          useUnifiedTopology: true,
          autoLoadEntities: true,
        };
      },
    }),
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}

// Top-level use of w, wtimeout, j, and fsync is deprecated. Use writeConcern instead
// writeConcern: { w: 'majority', wtimeout: 2500 },
