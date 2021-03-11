import { Request, Response } from "express";
import { userUtils } from "../../utilities/UserUtils";
class IndexController {
  public async index(req: Request, res: Response) {
    // UserModel.create({
    //   name: "maximo2",
    //   lastName: "Apza2",
    //   email: "maximopeoficiales3@gmail.com",
    //   user: "maximo2",
    //   password: await userUtils.hashPassword("nuevopassword"),
    // }).then((user: any) => {
    //   res.json(user);
    // });
    // res.json(await UserModel.findAll());
  }
}

export const indexController = new IndexController();
