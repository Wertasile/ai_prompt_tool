import mongoose from "mongoose";

let isConnection = false;  // trrack conncecibility

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnection) {
        console.log('MongoDB is already connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",});
        isConnection = true;
        console.log("MongoDB connected successfully")
    }catch (error){
        console.log(error)
    }


}