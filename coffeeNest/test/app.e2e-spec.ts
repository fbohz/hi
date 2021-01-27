import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// this FAILS because added complexities like decorators

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()) // 👈 
      .get('/')
      .set('Authorization', process.env.API_KEY) // 👈 
      .expect(200)
      .expect('Hello CoffeeNest!');
  });

  afterAll(async () => {
    await app.close();
  });
});