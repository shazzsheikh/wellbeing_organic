// Database configuration file (MongoDB + Mongoose)
// 👉 Isko use karne ke liye .env me MONGODB_URI set karo:
// MONGODB_URI=mongodb://localhost:27017/wellbeingorganic

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.warn(
        'MONGODB_URI env variable set nahi hai. Database connect nahi hoga.'
      );
      return;
    }

    const conn = await mongoose.connect(uri, {
      // latest mongoose versions me options optional hain,
      // isliye yaha basic call rakha hai
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    // Production me aap chahe to process.exit(1) bhi kar sakte ho
    // abhi ke liye sirf log kar rahe hain
  }
};

export default {
  connectDB
};

 