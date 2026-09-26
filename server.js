

import express from "express";
import httpError from "./middleware/httpError.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import StudentRouter from "./router/studentRouter.js"

dotenv.config("./.env");

console.log("MONGO_URL:", !!process.env.MONGO_URL);
const app = express();


app.use(express.urlencoded ({extended : true}));
app.set("view engine","ejs");

app.use(express.json());

app.use("/student", StudentRouter);
app.get("/", (req, res) => {
    res.redirect("/student/getStudent");
});
app.use((req, res, next) => {
    return next(new httpError(404, "request routes not found"));
});

app.use((error, req, res, next) => {

    if (res.headersSent) {
        return next(error);
    }

    return res.status(error.statusCode || 500).json({
        message: error.message || "internal server error"
    });
});


const port = 1000;


async function startServer() {

    try{

        const connect =await connectDB();

        if(!connect){
            throw new Error("failed to connectDB")
        }

        app.listen(port,()=>{
            console.log(`server running on port ${port}`)
        })
    }catch(error){
        console.log(error.message)
    }
    
}

startServer();