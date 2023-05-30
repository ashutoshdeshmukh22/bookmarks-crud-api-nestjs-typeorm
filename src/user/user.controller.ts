import { User } from './user.entity';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorater';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
