import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RoomAuthenticate, AuthJwtToken } from '@types';

@Injectable()
export class RoomService {
  constructor(private jwtService: JwtService) {}

  async authenticate({
    room_id,
    user_id,
    role,
  }: RoomAuthenticate): Promise<AuthJwtToken> {
    const app_access_key = process.env.APP_ACCESS_KEY;
    const app_secret = process.env.APP_SECRET;

    const payload = {
      access_key: app_access_key,
      room_id,
      user_id,
      role,
      type: 'app',
      version: 2,
      iat: Math.floor(Date.now() / 1000),
      nbf: Math.floor(Date.now() / 1000),
    };

    return {
      access_token: await this.jwtService.sign(payload, { secret: app_secret }),
    };
  }
}
