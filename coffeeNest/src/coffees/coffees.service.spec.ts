import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { MOCK_BRANDS } from './coffees.constants';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

//  Run a unit test for a -specific- file pattern
//  npm run test:watch -- coffees.service

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeesService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(Coffee), useValue: {} },
        { provide: getRepositoryToken(Flavor), useValue: {} },
        { provide: MOCK_BRANDS, useValue: ['pote', 'mocoLoco'] },
      ]
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
    // transient providers use this:
    // service = await module.get<CoffeesService>(CoffeesService);
  });

  // WITH ADDITIONAL PROVIDERS IT FAILS, SO NEED TO FIX IF ADDING THEM
  it('should be defined', () => {
    expect(service).toBeDefined(); 
  });

  
});
