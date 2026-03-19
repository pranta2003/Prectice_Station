import express from "express";

const app = express(); // creating 

app.use(express.json()); //to parse json data from request body . ok nigga ?



// import routes 
import userRouter from "./routes/user.routes.js";

// declare routes
app.use("api/v1/users", userRouter);

// example route : https://localhost:4000/api/v1/users/registers


 
export default app;