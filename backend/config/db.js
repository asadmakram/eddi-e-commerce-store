import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    });

    console.log(`MongoDB Connected ${dbConnection.connection.host}`);
  } catch (error) {
    console.error(
      `Error occurred while connecting with MongoDb. Error: ${error.message}`
    );

    //process.exit(1); // exit with failure
  }
};


export default connectDB