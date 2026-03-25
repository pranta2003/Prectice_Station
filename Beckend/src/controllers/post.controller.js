import { Post } from "../models/post.model.js";

const createPost = async (req , res ) => {
    try {
        const { name , description , age } =  req.body;
         if(!name || !description || !age){

            res.status(400).json({
                message:"All fields are needed . shob gula lekhen bhai . mathamuda naki ajob"
            });
         }
         const post = await Post.create({
            name,
            description,
            age     
         })
         res.status(201).json({ 
            message:"post Created",post
    });  } catch (error){
        res.status(500).json({
            message:"Internal Server Error",   error
        })
     }
}

export{
    createPost
};