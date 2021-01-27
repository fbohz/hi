import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';

@Module({ 
  imports: [
    MongooseModule.forFeature([{ 
      name: Coffee.name, // name of model
      schema: CoffeeSchema  // schema to compile model
    }])
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService] 
})
export class CoffeesModule {}