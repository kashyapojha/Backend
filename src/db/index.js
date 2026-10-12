import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
        `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );

    return connectionInstance;
};

export default connectDB;