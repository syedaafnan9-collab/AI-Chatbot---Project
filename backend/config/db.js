import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("connected to mongoDB Successfully!");
    } catch (err) {
        console.log("mongoose connection Error:" , err);
    }
}
export default connectDB;

