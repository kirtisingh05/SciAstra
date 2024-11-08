import { Router } from "express";
import { addCourse, listCourses, getCourseDetails } from "../controllers/course.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";


const router = Router();

router.post("/add", authenticateToken , addCourse);
router.get("/", listCourses);
router.get("/:id", getCourseDetails);

export default router;


