import httpError from "../middleware/httpError.js";
import Student from "../model/studentData.js";

const add = async (req, res, next) => {

    try {

        const {
            name,
            email,
            phone,
            image,
            status,
            created_date,
            updated_date
        } = req.body;

        const newStudent = new Student({
            name,
            email,
            phone,
            image,
            status,
            created_date,
            updated_date
        });

        await newStudent.save();

        res.redirect("/student/getStudent");

    } catch (error) {

        return next(new httpError(500, error.message));
    }
};


const getStudent = async (req, res, next) => {

    try {

        const students = await Student.find();

        res.render("index", {
            Student: students
        });

    } catch (error) {

        next(new httpError(500, error.message));
    }
};


const getStudentById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const student = await Student.findById(id);

        if (!student) {
            return next(new httpError(404, "Student not found"));
        }

        res.render("edit", {
            Student: student
        });

    } catch (error) {

        return next(new httpError(500, error.message));
    }
};


export default {
    add,
    getStudent,
    getStudentById
};