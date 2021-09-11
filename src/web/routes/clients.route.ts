import { router } from ".";
import { clientController } from "../controllers/client.controller";
import { validation } from "../middlewares/validation.middleware";
import { clientSchema } from "../middlewares/validations/client.schema";

router.get("/clients", clientController.index);
router.post("/clients", validation(clientSchema), clientController.save);
router.get("/clients/dashboard", clientController.getDataDashboard);

export default router;
