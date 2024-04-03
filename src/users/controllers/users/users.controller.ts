import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from '../../dtos/CreateRoleDto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Get('roles')
  getRoles() {
    return this.userService.findRoles();
  }

  @Post('roles')
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.userService.createRole(createRoleDto);
  }
}
