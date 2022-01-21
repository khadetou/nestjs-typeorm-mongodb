import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Experience {
  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column()
  from: Date;

  @Column({
    default: null,
  })
  to: Date;

  @Column({
    default: null,
  })
  current: boolean;

  @Column()
  description: string;
}

@Entity()
export class Education {
  @Column()
  school: string;

  @Column()
  degree: string;

  @Column()
  fieldofstudy: string;

  @Column()
  from: Date;

  @Column({
    default: null,
  })
  to: Date;

  @Column({
    default: null,
  })
  current: boolean;

  @Column()
  description: string;
}

@Entity()
export class Socials {
  @Column()
  youtube: string;
  @Column()
  twitter: string;
  @Column()
  facebook: string;
  @Column()
  linkedin: string;
  @Column()
  instagram: string;
}

@Entity()
export class Profile {
  @ObjectIdColumn()
  id: ObjectID;
  @ObjectIdColumn()
  user: ObjectID;
  @Column()
  company: string;
  @Column()
  website: string;
  @Column()
  location: string;
  @Column()
  status: string;
  @Column()
  skills: string[];
  @Column()
  bio: string;
  @Column()
  githubusername: string;
  @Column((type) => Experience)
  experience: Experience[];
  @Column((type) => Education)
  education: Education[];
  @Column((type) => Socials)
  socials: Socials;
}
