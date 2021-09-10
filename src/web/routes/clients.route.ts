import { router } from ".";
import { clientController } from "../controllers/client.controller";

router.get("/clients", clientController.index);

export default router;
