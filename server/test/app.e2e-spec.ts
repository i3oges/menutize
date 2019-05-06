import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MenuModule } from '../src/menu/menu.module';
import { AppModule } from '../src/app.module';
import { RestaurantInfoModule } from '../src/restaurant-info/restaurant-info.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MenuModule, AppModule, RestaurantInfoModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/menu (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/menu')
      .expect(200);
  });

  it('/api/restaurant-info/location (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/restaurant-info/location')
      .expect(200);
  });

  it('/api/restaurant-info/hours (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/restaurant-info/hours')
      .expect(200);
  });

  afterEach(async () => {
    await app.close();
  });
});
