export interface RoomAuthenticate {
  room_id: string;
  user_id: string;
  role: string;
}

export interface AuthJwtToken {
  access_token: string;
}
