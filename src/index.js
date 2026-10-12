import "dotenv/config";
import express from "express";
import connectDB from "./db/index.js";

const app = express();
const port = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(port, () => {
            console.log(`App is listening on port ${port}`);
        });

        server.on("error", (error) => {
            console.error("Server startup error:", error);
            process.exitCode = 1;
        });
    } catch (error) {
        console.error("Server startup error:", error);
        process.exitCode = 1;
    }
};

await startServer();
