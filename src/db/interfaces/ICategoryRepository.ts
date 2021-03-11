import { Category } from "../entitys/Category.model";

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}
