import { Client } from "../entitys/client.entity";
import { AverageAge } from "../responses/averageAge";

export interface IClientRepository {
  findAll(): Promise<Client[]>;
  save(client: Client): Promise<Client>;
  getAverageAge(): Promise<AverageAge>;
}
