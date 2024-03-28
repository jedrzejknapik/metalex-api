import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/services/users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async signup({ username, password }: AuthPayloadDto) {
    // See if email is in use
    const user = await this.usersService.findByUsername(username);

    if (user) {
      throw new BadRequestException('Username already in use.');
    }

    // Hash password
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    // Create new user and save it
    const newUser = await this.usersService.createUser({
      username,
      password: result,
    });
    // return the user
    return newUser;
  }

  async signin({ username, password }: AuthPayloadDto) {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      return null;
    }

    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      return null;
    }

    const { id, username: name } = user;
    return this.jwtService.sign({ id, name });
  }
}
