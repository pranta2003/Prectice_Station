import { log } from "console";
import mongoose from "mongoose";


const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect
        ('${ process.env.MONGODB_URI}')
        console.log('\n  MongoDB Connected  . LOLLLLL. $conerionInstance.connection.host'  )
    } catch (error) {
        console.error("Error connecting to MongoDB . Fuck of :", error);
        process.exit(1);
    }
}

export default connectDB;