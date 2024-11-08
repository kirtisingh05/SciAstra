import db from "../database/db.js";

export const createCourse = async (coursename, description, price) => {
    const [result] = await db.execute("INSERT INTO courses (coursename, description, price) VALUES (?, ?, ?)", [coursename, description, price]);
    return result;
};

export const getCourses = async () => {
    const [rows] = await db.execute("SELECT * FROM courses");
    return rows;
};

export const getCourseById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM courses WHERE id = ?", [id]);
    return rows[0];
};


