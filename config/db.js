import mongoose from "mongoose";

async function ConnectDB() {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URL);

    

        console.log("DB connected");

        return connect;

    } catch (error) {

        console.log(error.message);

    }
}

export default ConnectDB;