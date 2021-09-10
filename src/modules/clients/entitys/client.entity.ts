import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: "clients" })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ type: "datetime", name: "date_birthday" })
  dateBirthday: Date;
}
