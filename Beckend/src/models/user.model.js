import mongoose from "mongoose";
import bycrpt from "bcrypts";
const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }
},
{
    timestamps: true
}
);

// before save any passwprd , we have to hash it bhaiya , 
userSchema.pre("save", async function(next){
    if ( !this.isModified("password") ) return.next();
    this.password = await bycrpt.hash(this.password, 10);

});



export const User = mongoose.model("User", userSchema);