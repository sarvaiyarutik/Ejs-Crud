import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true
        },

        phone: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            default: ""
        },

        status: {
            type: Boolean,
            default: true
        },

        created_date: {
            type: String
        },

        updated_date: {
            type: String
        }
    }
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;