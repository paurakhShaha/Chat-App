import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoute from './routes/authroutes.js';
import messageRoute from './routes/messageroutes.js';
import { connectDB } from './database/connectdb.js';


dotenv.config();
const app = express();
const port = process.env.PORT|| 3000;


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/message", messageRoute);

 


const connection = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {  
      console.log(`Server is running on port ${port}`);
    } );
  } catch (error) {
    console.log('Error connecting to database:', error.message);
  }
}
connection();