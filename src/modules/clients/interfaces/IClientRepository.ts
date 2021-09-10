import { Client } from "../entitys/client.entity";

export interface IClientRepository {
  findAll(): Promise<Client[]>;
  // findByName(name: string): Promise<Client>;
}
