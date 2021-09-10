import { count } from "console";
import { getCustomRepository, getManager } from "typeorm";
import { Client } from "../entitys/client.entity";
import { IClientRepository } from "../interfaces/IClientRepository";
import { ClientRepository } from "../repositorys/client.repository";

export class ClientService implements IClientRepository {

  private getRepository() {
    return getCustomRepository(ClientRepository);
  }

  async save(client: Client): Promise<Client> {
    const savedUser = await this.getRepository().save(client);
    return savedUser;
  }

  async getAverageAge(): Promise<number> {
    // forma mas simple de implementar este proceso
    const entityManager = getManager();
    const someQuery = await entityManager.query("SELECT ROUND(AVG(YEAR(now()) - YEAR(t1.date_birthday))) as promedio FROM `clients` as t1");
    return parseInt(someQuery ? someQuery[0]["promedio"] : 0);
  }

  async getClientRegistereds(): Promise<number> {
    const entityManager = getManager();
    const someQuery = await entityManager.query("SELECT COUNT(*) as clientRegistereds FROM `clients` as t1 WHERE DATE_FORMAT(t1.created_at,'%Y-%m-%d') = DATE_FORMAT(NOW(),'%Y-%m-%d') ");
    return parseInt(someQuery ? someQuery[0]["clientRegistereds"] : 0);
  }
  async getClientsOver(age: number): Promise<number> {
    const entityManager = getManager();
    const someQuery = await entityManager.query("SELECT COUNT(*) as mayores FROM `clients` as t1 WHERE ROUND(YEAR(now()) - YEAR(t1.date_birthday)) > ?", [age]);
    return parseInt(someQuery ? someQuery[0]["mayores"] : 0)
  }

  async findAll(): Promise<Client[]> {
    return await this.getRepository().find({ order: { id: "DESC" } });
  }
}

export const clientService = new ClientService();
