import express from 'express'
import { accessToken, codeGenerate, createClientUrl, findClientID } from '../controllers/thirdPartyController.js';
import {isAuthenticated} from "../middlewares/auth.js"
const router = express.Router();

router.get('/oauth/clientList', isAuthenticated, findClientID);
router.post('/oauth/clientConsole', isAuthenticated, createClientUrl);
router.get('/oauth/codeGenerate', codeGenerate);
router.post('/oauth/token', accessToken);


export default router