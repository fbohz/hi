import { ParseIntPipe } from './../common/pipes/parse-int.pipe';
import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, SetMetadata, UsePipes, ValidationPipe } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';

// ValidationPipe only within this controller. And you can add specific configurations.
@UsePipes(ValidationPipe)
@Controller('coffees')
export class CoffeesController {

    constructor(
        private readonly coffeesService: CoffeesService
    ){}
    
    // @SetMetadata('isPublic', true) // custom decorator is recommended see created decorator:
    @Public()
    // nested in coffee/all
    @Get('all')
    async findAll(@Query() paginationQuery: PaginationQueryDto) {
        // timeout interceptor change to 5000 to test
        await new Promise(resolve => setTimeout(resolve, 0));
        return this.coffeesService.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string){
        return this.coffeesService.findOne(id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        
        return this.coffeesService.create(createCoffeeDto)
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id)
    }
}
