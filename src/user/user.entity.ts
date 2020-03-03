import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column( { nullable: true })
  first_name: string;

  @Column( { nullable: true })
  last_name: string;
  
}
