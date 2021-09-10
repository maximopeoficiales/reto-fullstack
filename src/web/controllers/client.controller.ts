import { log } from "console";
import { Request, Response } from "express";
import { getManager } from "typeorm";
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

  public async getDataDashboard(req: Request, res: Response) {
    res.json({
      averageAge: await clientService.getAverageAge(),
      clientsRegistereds: await clientService.getClientRegistereds(),
      clientsAdults: await clientService.getClientsOver(20),
    });
  }
}

export const clientController = new ClientController();
