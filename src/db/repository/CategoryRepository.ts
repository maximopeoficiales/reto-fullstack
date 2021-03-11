import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entitys/Category.model";
// const userRepository = getRepository(User);
@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  // aqui puedes crear tus metodos custom
  async findByName(name: string) {
    return await this.findOne({ where: { name } });
  }
}
