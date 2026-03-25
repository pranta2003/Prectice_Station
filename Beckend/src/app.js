import express from "express";

const app = express(); // creating 

app.use(express.json()); //to parse json data from request body . ok nigga ?



// import routes 
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
// declare routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// example route : https://localhost:4000/api/v1/users/register


 
export default app;