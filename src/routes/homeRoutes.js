import { Router } from "express";
import homeController from "../controllers/Homecontrollers";

const router = new Router();

router.get("/", homeController.index);

export default router;
