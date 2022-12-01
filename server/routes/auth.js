import { Router } from "express";
import { getCurrent, login, register } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current", checkAuth, getCurrent);

export default router;
