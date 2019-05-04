import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MenuModule } from './../src/menu/menu.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MenuModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/menu (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/menu')
      .expect(200);
  });
});
