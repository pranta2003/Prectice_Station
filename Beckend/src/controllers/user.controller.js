import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
    const { username , password , email } = req.body;

    // validation part
    if (!username || !password || !email){
        return res.status(400).json({ message: "All fields are needed" });
    }
    //check if user exist or not 

    const existing = await User.findOne({ email: email.tolowerCase()});

    if (existing){
        return res.status(400).json({ message: "User already exist with this email" }); 


    }
    const user = await User.create({
        username,
        email: email.tolowerCase(),
        password,
        loggedIn:false,
    });

    res.status(201).json({ message : " USer registered " , user : { id : user._id  , email: user.email , username: ussername} });        }})

    }catch (error){
        res.status(500).json({ message: " Internal Server error", error :error.message });


    }

}

export {
    registerUser
}