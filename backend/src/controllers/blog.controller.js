import { createBlogPost, getBlogPosts } from "../models/blog.model.js";

export const addBlogPost = async (req, res) => {
    const { title, content, publishDate } = req.body;
    const post = await createBlogPost(title, content, publishDate);
    res.status(201).json({ message: "Blog post created successfully", post });
};

export const listBlogPosts = async (req, res) => {
    const posts = await getBlogPosts();
    res.status(200).json({ posts });
};
