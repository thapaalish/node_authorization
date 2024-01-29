import mongoose from "mongoose";

 export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thapaalish44:alish123@cluster0.t5tfvtz.mongodb.net/auth?retryWrites=true&w=majority"
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

//export { connectDB };
