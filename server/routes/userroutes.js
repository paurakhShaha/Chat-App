import express from 'express';
import { getUserSidebar } from '../controllers/user.controllers.js';
import protectRoute from '../middleware/protectRoute.js';
const Router = express.Router();

Router.get('/',protectRoute, getUserSidebar); //get user sidebar 

export default Router;