import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { AuthPayloadDto } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() userPayload: AuthPayloadDto) {
    return await this.authService.signup(userPayload);
  }

  @Post('signin')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  user(@Req() req: Request) {
    console.log('user: ', req.user);

    if (req.user) {
      const { id, name, role } = req.user as any;
      return { id, username: name, role: role };
    }
  }
}
