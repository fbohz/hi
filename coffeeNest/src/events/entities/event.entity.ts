import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Index(['name', 'type']) // composite index with multiple indexes.
@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    type: string; 
    
    // setting up just one index
    // @Index()
    @Column()
    name: string; 
  
    @Column('json')
    payload: Record<string, any>;
  }
  