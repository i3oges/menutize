import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantInfoController } from './restaurant-info.controller';

describe('RestaurantInfo Controller', () => {
  let controller: RestaurantInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantInfoController],
    }).compile();

    controller = module.get<RestaurantInfoController>(RestaurantInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
