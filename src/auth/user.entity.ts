import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

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
  @Column({ default: Date.now() })
  date: Date;
}
