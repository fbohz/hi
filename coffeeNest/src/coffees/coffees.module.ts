import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({ 
  controllers: [CoffeesController],
  providers: [CoffeesService] ,
  imports: [TypeOrmModule.forFeature([Coffee])] // registering Coffee entity
})
export class CoffeesModule {}