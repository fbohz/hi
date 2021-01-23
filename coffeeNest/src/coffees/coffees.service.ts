import { MOCK_BRANDS, COFFEE_FACTORY_LOCATIONS } from './coffees.constants';
import { Event } from './../events/entities/event.entity';
import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { Inject, Injectable, NotFoundException, Query, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// default is singleton, here done for demo
// @Injectable({scope: Scope.REQUEST})
@Injectable()
export class CoffeesService {
  // private coffees: Coffee[] = [
  //   {
  //     id: 1,
  //     name: 'Shipwreck Roast',
  //     brand: 'Buddy Brew',
  //     flavors: ['chocolate', 'vanilla'],
  //   },
  // ];

  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
    private readonly connection: Connection,
    @Inject(MOCK_BRANDS) mockBrands: string,
    private readonly configService: ConfigService,
    // each namespace config exposes KEY prop 
    @Inject(coffeesConfig.KEY)
    private coffeesConfiguration: ConfigType<typeof coffeesConfig>, 

  ){
    console.log('Mock brands test: ', mockBrands)
    // typing is optional and only to satisfy Ts compiler
    // the second arg is the default one
    const dbHost = this.configService.get<string>('DATABASE_HOST', 'localhost')
    console.log('Config DB Host defined: ', dbHost ? `YES DEFINED is ${dbHost}` : "Not defined, fallback to 'localhost'")
    
    // const coffeesConfig = this.configService.get('coffees')
    console.log('coffeesConfig: ', coffeesConfiguration.foo)
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;

    // object pass makes sure flavors is shown
    return this.coffeeRepository.find({
      relations: ['flavors'], 
      skip: offset,
      take: limit
    });
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne(id, {
      relations: ['flavors'],
    });

    if (!coffee) {
        // throw new HttpException(`Coffee with id: ${id} not found`, HttpStatus.NOT_FOUND)

        // simpler
        throw new NotFoundException(`Coffee with id: ${id} not found`)
    }

    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const flavors = await Promise.all(
      createCoffeeDto.flavors.map(name => this.preloadFlavorByName(name)),
    );

    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const flavors =
      updateCoffeeDto.flavors &&
      (await Promise.all(
        updateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name)),
      ));

    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
      flavors,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorRepository.findOne({ name });
    if (existingFlavor) {
      return existingFlavor;
    }
    return this.flavorRepository.create({ name });
  }

  // transaction example
  async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.connection.createQueryRunner();
    
    await queryRunner.connect();
    await queryRunner.startTransaction(); 
    try {
      coffee.recommendations++;
      
      const recommendEvent = new Event();
      recommendEvent.name = "recommend_coffee";
      recommendEvent.type = "coffee";
      recommendEvent.payload = { coffeeId: coffee.id };
    
      await queryRunner.manager.save(coffee); 
      await queryRunner.manager.save(recommendEvent);
      
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

}
