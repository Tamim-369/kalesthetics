import mongoose from "mongoose";
let isConnected = false;
const mongoDB: string = process.env.MONGODB_URI as string;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(mongoDB, {
      dbName: "kalesthetics",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
