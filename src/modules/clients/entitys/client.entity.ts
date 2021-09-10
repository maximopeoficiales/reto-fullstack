import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "clients" })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, name: "name" })
  name: string;

  @Column({ nullable: false, name: "lastname" })
  lastname: string;

  @Column({ type: "date", name: "date_birthday", nullable: false })
  dateBirthday: Date;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;
}
