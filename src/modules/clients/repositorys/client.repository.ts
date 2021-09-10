import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entitys/client.entity";
// const userRepository = getRepository(User);
@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  // aqui puedes crear tus metodos custom
  // async findByName(name: string) {
  //   return await this.findOne({ where: { name } });
  // }
}
