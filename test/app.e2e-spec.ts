import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { BookingsService } from '../src/resources/bookings/bookings.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let bookingsService: BookingsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [BookingsService],
    }).compile();

    app = moduleFixture.createNestApplication();
    bookingsService = moduleFixture.get<BookingsService>(BookingsService);
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('findAll should return all room', () => {
    it('should return all rooms', () => {
      return;
    });
  });
});
