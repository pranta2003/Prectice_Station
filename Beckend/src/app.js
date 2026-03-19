import express from "express";

const app = express(); // creating 
// import routes 
import userRouter from "./routes/user.routes.js";

// declare routes
app.use("api/v1/users", userRouter);




export default app;