import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    if (!ENV.DB_URL) {
        console.error("Error: DB_URL environment variable is not defined");
        process.exit(1);
    }
    
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("connected to mongodb:",conn.connection.host);
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}