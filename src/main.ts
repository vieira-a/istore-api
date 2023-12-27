import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  );

  app.setGlobalPrefix('api/v1');

  const docConfig = new DocumentBuilder()
    .setTitle('istore-api-roducts')
    .setVersion('1.0.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('api/v1/doc', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
