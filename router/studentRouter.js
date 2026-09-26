import express from "express";
import studentController from "../controller/StudentController.js";

const router = express.Router();

router.get("/add", (req, res) => {
    res.render("add");
});

router.post("/add", studentController.add);

router.get("/getStudent", studentController.getStudent);

router.get(
    "/getStudentById/:id",
    studentController.getStudentById
);

export default router;