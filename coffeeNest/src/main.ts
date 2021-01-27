import { ApiKeyGuard } from './common/guards/api-key.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
    transform: true,
    forbidNonWhitelisted: true,
    // no longer needs to specify @Type decorator
    transformOptions: {
      enableImplicitConversion: true,
    }
  }))
  

  // Setting up Swagger document 
  const options = new DocumentBuilder()
    .setTitle('coffeeNest')
    .setDescription('Coffee application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  /** 
   * With the App running (npm run start:dev if not)
   * To view the Swagger UI go to:
   * http://localhost:3000/api
   */

  app.useGlobalInterceptors(
    new WrapResponseInterceptor(), 
    new TimeoutInterceptor(), // 👈
  );
  
  app.useGlobalFilters(new HttpExceptionFilter)
  await app.listen(3000);
}
bootstrap();
