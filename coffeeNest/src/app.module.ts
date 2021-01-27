import * as Joi from '@hapi/joi';
import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DynamicExampleModule } from './dynamic-example/dynamic-example.module';
import { ConfigModule } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: '.environment',
      // ignoreEnvFile: true,
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(5433),
      }),
    }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5433, // database host
      username: 'postgres', // username
      password: 'pass123', // user password
      database: 'postgres', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
      synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
    }),
    CoffeeRatingModule,
    DynamicExampleModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [
    // registers ValidationPipe from main.ts. Here global
    AppService,
  ],
})
export class AppModule {}

/* forRootAsync() */
// TypeOrmModule.forRootAsync({ // 👈
//   useFactory: () => ({
//     type: 'postgres',
//     host: process.env.DATABASE_HOST,
//     port: +process.env.DATABASE_PORT,
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//     autoLoadEntities: true,
//     synchronize: true,
//   }),
// }),


// using .env file - CAUTION: buggy
// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       // envFilePath: '.environment',
//       ignoreEnvFile: true,
//       validationSchema: Joi.object({
//         DATABASE_HOST: Joi.required(),
//         DATABASE_PORT: Joi.number().default(5432),
//       }),
//     }),
//     CoffeesModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.DATABASE_HOST,
//       port: +process.env.DATABASE_PORT,
//       username: process.env.DATABASE_USER,
//       password: process.env.DATABASE_PASSWORD,
//       database: process.env.DATABASE_NAME,
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     CoffeeRatingModule,
//     DynamicExampleModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


// global pipes
// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       // envFilePath: '.environment',
//       // ignoreEnvFile: true,
//       validationSchema: Joi.object({
//         DATABASE_HOST: Joi.required(),
//         DATABASE_PORT: Joi.number().default(5432),
//       }),
//     }),
//     CoffeesModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres', // type of our database
//       host: 'localhost', // database host
//       port: 5433, // database host
//       username: 'postgres', // username
//       password: 'pass123', // user password
//       database: 'postgres', // name of our database,
//       autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
//       synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
//     }),
//     CoffeeRatingModule,
//     DynamicExampleModule,
//   ],
//   controllers: [AppController],
//   providers: [
//     // registers ValidationPipe from main.ts. Here global
//     AppService,
//     { 
//       provide: APP_PIPE,
//       useClass: ValidationPipe
//     }
//   ],
// })
// export class AppModule {}

// barebones


// @Module({
//   imports: [
//     CoffeesModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}