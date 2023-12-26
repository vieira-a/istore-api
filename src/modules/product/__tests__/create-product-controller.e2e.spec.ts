import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { productDataMock } from '../__mocks__';
import { CreateProductController } from '../controllers';
import { CreateProductService } from '../services';

describe('CreateProductController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const createProductServiceMock = {
      create: jest.fn().mockResolvedValue(productDataMock),
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [CreateProductController],
      providers: [
        {
          provide: CreateProductService,
          useValue: createProductServiceMock,
        },
      ],
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

  it('/ (POST) should returns 400 if product category is not provided', async () => {
    return await request(app.getHttpServer())
      .post('/product/register')
      .send({
        ...productDataMock,
        category: '',
      })
      .expect(400);
  });

  it('/ (POST) should returns 400 if product quantity is not provided', async () => {
    return await request(app.getHttpServer())
      .post('/product/register')
      .send({
        ...productDataMock,
        quantity: '',
      })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
