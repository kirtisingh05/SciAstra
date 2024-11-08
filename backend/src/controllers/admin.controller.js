import { createAdmin, findAdminByUsername, validatePassword } from "../models/admin.model.js";
import jwt from "jsonwebtoken";

export const adminSignup = async (req, res) => {
    const { username, password } = req.body;
    const admin = await createAdmin(username, password);
    res.status(201).json({ message: "Admin created successfully", admin });
};

export const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await findAdminByUsername(username);
    if (admin && await validatePassword(password, admin.password)) {
        const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Admin logged in successfully", token });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
};



