import { MOCK_BRANDS, COFFEE_FACTORY_LOCATIONS } from './coffees.constants';
import { Event } from './../events/entities/event.entity';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// mock implementation for value based providers
// class MockCoffeeService {}

// using useClass syntax
class MockClassService {}

// factory example

export class CoffeeLocationsFactory {
  create(){
    return ['Miami', 'New York']
  }
}
@Module({ 
  controllers: [CoffeesController],
  // providers: [CoffeesService],
  // non class based providers
  providers: [CoffeesService, 
    { provide: MockClassService, useClass: MockClassService},
    {provide: MOCK_BRANDS, useValue: ['pote', 'mocoLoco'], scope: Scope.TRANSIENT},
    // async example suppose needs to query somehwere else to get data
    {
      provide: COFFEE_FACTORY_LOCATIONS,
      // Note "async" here, and Promise/Async event inside the Factory function 
      // Could be a database connection / API call / etc
      // In our case we're just "mocking" this type of event with a Promise
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        console.log('ASYNC factory')
        const coffeeBrands = await Promise.resolve(['Miami', 'New York'])
        return coffeeBrands;
      },
      inject: [Connection],
    },
    // factory provider example
    // {provide: COFFEE_FACTORY_LOCATIONS, 
    //   useFactory: (locationsFactory: CoffeeLocationsFactory) => locationsFactory.create(),
    //   inject: [CoffeeLocationsFactory]
    // }
  ],
  // providers: [{provide: CoffeesService, useValue: new MockCoffeeService()}],
  // registering Coffee entity
  imports: [ 
      TypeOrmModule.forFeature([Coffee, Flavor, Event]), 
      CoffeeLocationsFactory, 
      // config namespace
      ConfigModule.forFeature(coffeesConfig)
  ], 
  exports: [CoffeesService, CoffeeLocationsFactory]
})
export class CoffeesModule {}