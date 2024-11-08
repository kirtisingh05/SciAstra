import db from "../database/db.js";

export const createBlogPost = async (title, content, publish_date) => {
    const [result] = await db.execute("INSERT INTO blogs (title, content, publish_date) VALUES (?, ?, ?)", [title, content, image]);
    return result;
};

export const getBlogPosts = async () => {
    const [rows] = await db.execute("SELECT * FROM blogs");
    return rows;
};


