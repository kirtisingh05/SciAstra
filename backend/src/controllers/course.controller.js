import { createCourse, getCourses, getCourseById } from "../models/course.model.js";

export const addCourse = async (req, res) => {
    const { coursename, description, price } = req.body;
    const course = await createCourse(coursename, description, price);
    res.status(201).json({ message: "Course created successfully", course });
};

export const listCourses = async (req, res) => {
    const courses = await getCourses();
    res.status(200).json({ courses });
};

export const getCourseDetails = async (req, res) => {
    const { id } = req.params;
    const course = await getCourseById(id);
    if(course) {
        res.status(200).json({ course });
    } else {
        res.status(404).json({ message: "Course not found" });
    }   
};


