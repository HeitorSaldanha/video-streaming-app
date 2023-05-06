import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.APP_SECRET,
      signOptions: { expiresIn: '24h', algorithm: 'HS256', jwtid: uuidv4() },
    }),
  ],
  controllers: [UserController, RoomController, AuthController],
  providers: [UserService, RoomService, AuthService],
})
export class AppModule {}
