process.loadEnvFile();
import express from "express";

const app = express();

//Middleware
//app.use(express.urlencoded({ extended: false }));

// app.use(express.json());

export default app;
