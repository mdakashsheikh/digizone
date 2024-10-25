import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get('port'), () => {
    console.log(`Listening on PORT ${config.get('port')}`)
  });
}
bootstrap();
