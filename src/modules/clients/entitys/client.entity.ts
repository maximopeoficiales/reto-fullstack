import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: "clients" })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ type: "date", name: "date_birthday", nullable: false })
  dateBirthday: Date;
}
