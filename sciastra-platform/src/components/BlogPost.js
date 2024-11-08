import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './blogpost.css';

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const response = await axios.get(`/api/blog/${id}`);
            setPost(response.data);
        }
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-content">{post.content}</p>
        </div>
    );
}

export default BlogPost;