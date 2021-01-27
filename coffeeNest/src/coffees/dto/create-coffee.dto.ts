import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

/**
 * @ApiProperty() decorator useful to *override* 
 * information automatically inferred from the @nestjs/swagger plugin
 */
export class CreateCoffeeDto {
    @ApiProperty({ description: 'The name of a coffee.' })
    @IsString() // this makes name required
    readonly name: string;
    @ApiProperty({ description: 'The brand of a coffee.' })
    @IsString() 
    readonly brand: string;
    
    @ApiProperty({ description: 'coffe properties.' })
    @IsString({each: true}) // expected value is an array of strings
    readonly flavors: string[];
}