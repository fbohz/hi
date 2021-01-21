import { Flavor } from './flavor.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

// each entity is a sql table === coffee
@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    // Migration example: assume name was changed to title.
    // title: string;
    name: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    score: number;
    
    @Column()
    brand: string;

    @Column({default: 0})
    recommendations: number;
    
    @JoinTable()
    @ManyToMany( // owner of M:M is coffee
        type => Flavor, 
        flavor => flavor.coffees,
        {
            cascade: true,
        }
    ) 
    flavors?: Flavor[];
}