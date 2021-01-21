import { CoffeesModule } from './../coffees/coffees.module';
import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { DynamicExampleModule } from 'src/dynamic-example/dynamic-example.module';

@Module({
  imports: [CoffeesModule, 
    // Utilizing the dynamic DynamicExampleModule in another Modules imports: []
      DynamicExampleModule.register({ // 👈 passing in dynamic values
        type: 'postgres',
        host: 'localhost',
        password: 'password',
      })
    ],  
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
