import mongoose from "mongoose";

// Configure dotenv to load environment variables from a .env file
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Online");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default dbConnection;
