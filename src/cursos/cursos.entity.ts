import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CURSOS {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 100 })
  description: string;

}
