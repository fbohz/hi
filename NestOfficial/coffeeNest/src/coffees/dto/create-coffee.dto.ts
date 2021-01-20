import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsString() // this makes name required
    readonly name: string;
    @IsString() 
    readonly brand: string;
    
    @IsString({each: true}) // expected value is an array of strings
    readonly flavors: string[];
}