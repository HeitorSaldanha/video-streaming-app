import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { initializeFirebase } from './firebase.config';

dotenv.config();
initializeFirebase();

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
};
bootstrap();
