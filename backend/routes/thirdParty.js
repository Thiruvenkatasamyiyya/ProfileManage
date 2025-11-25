import express from 'express'
import { accessToken, codeGenerate, createClientUrl } from '../controllers/thirdPartyController.js';

const router = express.Router();

router.post('/oauth/clientConsole',createClientUrl);
router.get('/oauth/codeGenerate', codeGenerate);
router.post('/oauth/token', accessToken);


export default router