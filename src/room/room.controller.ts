import { Controller, Post, Req } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomAuthenticate, AuthJwtToken } from '@types';
import { Request } from 'express';

@Controller('room/auth')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async authenticate(@Req() request: Request): Promise<AuthJwtToken> {
    const { room_id, user_id, role }: RoomAuthenticate = request.body;
    return await this.roomService.authenticate({
      room_id,
      user_id,
      role,
    });
  }
}
