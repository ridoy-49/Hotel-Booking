import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/hotel-booking`).then(()=>{
            console.log("Mongoose is connected")
        });

    } catch (error) {
        console.log(error.message)

    }
} 

export default connectDB;