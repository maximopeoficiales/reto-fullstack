import { Request, Response } from "express";
import { Category } from "../../db/entitys/Category.model";
import { getConnection, getRepository } from "typeorm";
import { categoryService } from "../../db/services/CategoryService";
class IndexController {
  public async index(req: Request, res: Response) {
    res.json(await categoryService.findByName("maximo"));
  }
}

export const indexController = new IndexController();
