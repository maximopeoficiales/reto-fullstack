import { getCustomRepository } from "typeorm";
import { Client } from "../entitys/client.entity";
import { IClientRepository } from "../interfaces/IClientRepository";
import { ClientRepository } from "../repositorys/client.repository";
import { AverageAge } from "../responses/averageAge";

export class ClientService implements IClientRepository {

  private getRepository() {
    return getCustomRepository(ClientRepository);
  }

  async save(client: Client): Promise<Client> {
    const savedUser = await this.getRepository().save(client);
    return savedUser;
  }

  async getAverageAge(): Promise<AverageAge> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Client[]> {
    return await this.getRepository().find();
  }
}

export const clientService = new ClientService();
