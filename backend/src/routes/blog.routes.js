import { Router } from "express";
import { addBlogPost, listBlogPosts } from "../controllers/blog.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/add", authenticateToken, addBlogPost);
router.get("/list", listBlogPosts);

export default router;  