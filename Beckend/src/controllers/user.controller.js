import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // validation
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are needed" });
        }

        // check if user exists
        const existing = await User.findOne({ email: email.toLowerCase() });

        if (existing) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false,
        });

        res.status(201).json({
            message: "User registered",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        });
    }
};


const loginUser = async (req , res )=> {
    try {
        const { email , password } = req.body;

        const user = await User.findOne({ email:email.toLowerCase() });

        if( !User) return res.status(400).json({ message: "Invalid re bhai" });

        //compare password

        const isMatch = await user.comaparePassword(password);
        if(! isMatch) return res.status(400).json(
            {message: "Invalid credentials boy"}

        )
        res.status(200).jspm({
            message: "Login successful , ja ghuira ay",
            user: { id: user._id, 
                email: user.email,
                username:user.username
            }

        })
        

    } catch ( error){

        res.status(500).json({
            message:"Internal Server Error",


        })
    }
}

export {
    registerUser ,
    loginUser
};