import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { Category } from "../entitys/Category.model";
import { CategoryRepository } from "../repository/CategoryRepository";
import { getCustomRepository } from "typeorm";

export class CategoryService implements ICategoryRepository {
  private getRepository() {
    return getCustomRepository(CategoryRepository);
  }
  async findAll(): Promise<Category[]> {
    return await this.getRepository().find();
  }
  async findByName(name: string): Promise<Category> {
    return await this.getRepository().findByName(name);
  }
}

export const categoryService = new CategoryService();
