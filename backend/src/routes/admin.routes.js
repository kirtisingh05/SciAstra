import { Router } from "express";
import { adminSignup, adminLogin } from "../controllers/admin.controller.js";

const router = Router();

router.post("/signup", adminSignup);
router.post("/login", adminLogin);

export default router;

