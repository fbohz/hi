import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    constructor(
        private readonly coffeesService: CoffeesService
    ){}
    
    // nested in coffee/flavors 
    @Get('all')
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.coffeesService.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeesService.findOne(id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        
        return this.coffeesService.create(createCoffeeDto)
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id)
    }
}
