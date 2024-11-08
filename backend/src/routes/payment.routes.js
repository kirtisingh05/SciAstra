import { Router } from "express";
import { createOrder, confirmPayment } from "../controllers/payment.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/create-order", createOrder);
router.post("/confirm", authenticateToken, confirmPayment);

export default router;