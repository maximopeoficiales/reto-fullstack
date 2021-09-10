import { Request, Response } from "express";
import { clientService } from "../../modules/clients/services/client.service";

class ClientController {
  public async index(req: Request, res: Response) {
    res.json(await clientService.findAll());
  }
}

export const clientController = new ClientController();
