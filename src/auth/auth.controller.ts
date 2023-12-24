import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginRequest } from './auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @ApiBody({
    description: 'credential',
    type: LoginRequest,
  })
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
