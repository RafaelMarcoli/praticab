import { Router } from "express";
import userController from "../controllers/Usercontrollers";

const router = new Router();

router.post("/", userController.store);

export default router;
