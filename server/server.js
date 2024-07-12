import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import authRoute from './routes/authroutes.js';
import messageRoute from './routes/messageroutes.js';
import userRoute from './routes/userroutes.js';
import { app ,server} from './Socket/socket.js';
import { connectDB } from './database/connectdb.js';


dotenv.config();

const port = process.env.PORT|| 3000;
const __dirname = path.resolve();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/user", userRoute);

 app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


const connection = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, () => {  
      console.log(`Server is running on port ${port}`);
    } );
  } catch (error) {
    console.log('Error connecting to database:', error.message);
  }
}
connection();