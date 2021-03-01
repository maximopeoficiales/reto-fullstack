import { router } from "./Router";
import { indexController } from "../controllers/index.controller";

router.get("/", indexController.index);

export default router;
