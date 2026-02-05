// Database configuration file
// Update this when you add a database

// Example for MongoDB with Mongoose (ESM):
// import mongoose from 'mongoose';
// 
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };
// 
// module.exports = connectDB;

// Example for PostgreSQL with pg (ESM):
// import pkg from 'pg';
// const { Pool } = pkg;
// 
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });
// 
// export default pool;

const database = {};

export default database;

 