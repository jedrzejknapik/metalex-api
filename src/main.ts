import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppService } from './app.service';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // swagger setup
  const config = new DocumentBuilder()
    .setTitle('Metalex API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  const appService = app.get(AppService); // Get the instance of AppService
  await appService.seedAll(); // Call the seedAll method

  await app.listen(3000);
}
bootstrap();
