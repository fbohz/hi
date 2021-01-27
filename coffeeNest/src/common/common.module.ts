import { ApiKeyGuard } from './guards/api-key.guard';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    // if you use this need to include in headers: Authorization = 12345 in certain routes not public
    providers: [
        {provide: APP_GUARD, useClass: ApiKeyGuard},
    ]
})
export class CommonModule {}
