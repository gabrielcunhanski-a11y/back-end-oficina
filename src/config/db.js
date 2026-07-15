import mongoose from "mongoose";

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect in MongoDB!");
    }
    catch(error) {
        console.log(error.message)
    }
};  


export default connectDB;