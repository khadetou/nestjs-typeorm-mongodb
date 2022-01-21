import { AuthCredentialsDto } from './dto/auth-crendentials.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Register - Create - Authenticate user
  @Post('/signup')
  signup(
    @Body() authCredentialsDto: AuthCredentialsDto,
    @Body() name: string,
  ): Promise<void> {
    return this.authService.createUser(name, authCredentialsDto);
  }

  //Login - Signin - Authenticate user
  @Post('/signin')
  signin(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
