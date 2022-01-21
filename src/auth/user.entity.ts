import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
  @Column()
  avatar: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @CreateDateColumn({ default: Date.now() })
  date: Date;
  @Column({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
