import { Request, Response } from "express";
import { clientService } from "../../modules/clients/services/client.service";

class ClientController {
  public async index(req: Request, res: Response) {
    res.json(await clientService.findAll());
  }


  public async save(req: Request, res: Response) {
    try {
      const clientSaved = await clientService.save(req.body);
      res.json(clientSaved);
    } catch (error) {
      res.status(500).json({ status: 500, error });
    }
  }
}

export const clientController = new ClientController();
