import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogList.css';

function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await axios.get('http://localhost:8000/api/blog/list');
                setBlogs(response.data.posts);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div key={blog.id} className="blog-card">
                    <h3>{blog.title}</h3>
                    <p>{blog.content.substring(0, 100)}...</p>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;