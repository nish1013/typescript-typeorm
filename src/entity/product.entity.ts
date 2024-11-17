import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryColumn()
  code: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}
