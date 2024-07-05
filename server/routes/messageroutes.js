import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { sendMessage, getMessages } from '../controllers/message.controllers.js';

const Router = express.Router();

Router.post('/send/:id',protectRoute,sendMessage); //send message to a user
Router.get('/get/:id',protectRoute,getMessages); //get messages between two users



export default Router;