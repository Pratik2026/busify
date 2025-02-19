import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  });
  const port = process.env.PORT || 3333;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
