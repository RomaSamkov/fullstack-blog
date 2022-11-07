import { Router } from "express";
import { getCurrent, login, register } from "../controllers/auth.js";

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current", getCurrent);

export default router;
