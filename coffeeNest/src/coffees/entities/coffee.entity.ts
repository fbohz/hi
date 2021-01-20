import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// each entity is a sql table === coffee
@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    brand: string;
    
    @Column('json', {nullable: true})
    flavors?: string[];
}