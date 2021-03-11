import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { Category } from "../entitys/Category.model";
import { CategoryRepository } from "../repository/CategoryRepository";
import { getCustomRepository } from "typeorm";

export class CategoryService implements ICategoryRepository {
  async findAll(): Promise<Category[]> {
    return await getCustomRepository(CategoryRepository).find();
  }
  async findByName(name: string): Promise<Category> {
    return await getCustomRepository(CategoryRepository).findByName(name);
  }
}

export const categoryService = new CategoryService();
