import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'config'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mern123:mern123@mernapp.atv7idg.mongodb.net/digizone'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
