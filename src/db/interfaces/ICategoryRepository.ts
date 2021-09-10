import { Category } from "../entitys/category.entity";

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}
