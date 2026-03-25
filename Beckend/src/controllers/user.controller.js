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

    } catch (error){
    console.log("LOGIN ERROR:", error); // 👈 VERY IMPORTANT
    res.status(500).json({
        message: "Internal Server Error",
        error: error.message
    })
}
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Request:", email, password);

        const user = await User.findOne({ email: email.toLowerCase() });

        console.log("User found:", user);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await user.comparePassword(password);

        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });

    } catch (error) {
        console.log("LOGIN ERROR:", error); 
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const logoutUser = async (req, res) => {
    try{
        const { email } = req.body;

        const user = await User.findOne({ email});
        if(!user){
            return res.status(404).json({
                message:"User not found . ki bal input den ?"
            });
        }

          return res.status(200).json({
            message: "Logout successful"
        });


    } catch(error){

        res.status(500).json({ message: "Internal Server Error",error});
    }
}

export {
    registerUser,
    loginUser,
    logoutUser
};