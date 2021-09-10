import { getCustomRepository } from "typeorm";
import { Client } from "../entitys/client.entity";
import { IClientRepository } from "../interfaces/IClientRepository";
import { ClientRepository } from "../repositorys/client.repository";

export class ClientService implements IClientRepository {
  private getRepository() {
    return getCustomRepository(ClientRepository);
  }
  async findAll(): Promise<Client[]> {
    return await this.getRepository().find();
  }
  // async findByName(name: string): Promise<Client> {
  //   return await this.getRepository().findByName(name);
  // }
}

export const clientService = new ClientService();
