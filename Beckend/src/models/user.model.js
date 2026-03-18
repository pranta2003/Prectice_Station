import mongoose , { schema} from "mongoose ";


const userSchema =  new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlenght: 3,
        maxlenght: 30
    },
    password:{
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 128

    },
    email: {
           type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    // minlenght: 3,
     //   maxlenght: 30     
    },
});


