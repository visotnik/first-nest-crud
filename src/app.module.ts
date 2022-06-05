import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// add import CatsController
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  // прописываем контройлер CatsController
  controllers: [AppController, CatsController],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
