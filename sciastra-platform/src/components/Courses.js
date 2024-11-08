import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './courses.css';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await axios.get('http://localhost:8000/api/course');
                setCourses(response.data.courses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        }
        fetchCourses();
    }, []);

    return (
        <div className="courses">
            {courses.map(course => (
                <div key={course.id} className="course-card">
                    <img src={course.image} alt={course.coursename} className="course-image" />
                    <h3 className="course-title">{course.coursename}</h3>
                    <p className="course-description">{course.description}</p>
                    <p className="course-price">Price: ${course.price}</p>
                    <button className="enroll-button">Enroll Now</button>
                </div>
            ))}
        </div>
    );
}

export default Courses;