import { DynamicModule, Module } from '@nestjs/common';
import { createConnection, ConnectionOptions } from 'typeorm';

// Initial attempt at creating "CONNECTION" provider, and utilizing useValue for values BUT static */
// @Module({
//     providers: [
//         {
//           provide: 'CONNECTION',
//           useValue: createConnection({
//             type: 'postgres',
//             host: 'localhost',
//             port: 5432
//           }),
//         }
//     ]
// })

// Creating static register() method on DynamicExampleModule
// it can be customized
// export class DynamicExampleModule {
//   static register(options: ConnectionOptions): DynamicModule {  }
// }

// Improved Dynamic Module way of creating CONNECTION provider
@Module({})
export class DynamicExampleModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DynamicExampleModule,
      providers: [
        {
          provide: 'CONNECTION', // 👈
          useValue: createConnection(options), 
        }
      ]
    }
  }
}
