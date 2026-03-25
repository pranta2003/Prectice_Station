import { Post } from "../models/post.model.js";

const createPost = async (req , res ) => {
    try {
        const { name , description , age } =  req.body;
         if(!name || !description || !age){

            return res.status(400).json({
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


const getPosts = async (req, res ) => {
    try{

        const getPosts = await Post.find();
        res.status(200).json({
            message:"All posts",
            getPosts
        }) 

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",   error
    });
}
}

const updatePost = async (req, res) => {
    
    try {

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "All fields are needed"
            });
        }

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json({
            message: "Post updated",
            post
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}          

const deletePost = async (res, req) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id);   
        if(!deleted){
            return res.status(404).json({
                message:"Post not found"
            });
        }
        res.status(200).json({
            message:"Post deleted"
        });
    } catch(error){

        res.status(500).json({
            message:"Internal Server Error",
            error: error.message
        });
    }
}
    
export{
    createPost,
    getPosts,
    updatePost,
    deletePost
};