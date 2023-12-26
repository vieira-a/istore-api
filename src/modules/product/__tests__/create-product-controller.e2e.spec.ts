import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { productDataMock } from '../__mocks__';

describe('CreateProductController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  it('/ (POST) should returns 201 on success', async () => {
    return await request(app.getHttpServer())
      .post('/product/register')
      .send(productDataMock)
      .expect(201);
  });

  it('/ (POST) should returns 400 if product name is not provided', async () => {
    return await request(app.getHttpServer())
      .post('/product/register')
      .send({
        ...productDataMock,
        name: '',
      })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
