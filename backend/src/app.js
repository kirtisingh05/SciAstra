import express from "express";
import cors from "cors";
import adminRoutes from "./routes/admin.routes.js";
import courseRoutes from "./routes/course.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();      

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/blog', blogRoutes);

export { app };

