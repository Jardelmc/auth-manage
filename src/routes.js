import { Router } from 'express';
// import multer from 'multer';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import AuthReceiverController from './app/controllers/AuthReceiverController';

const routes = new Router();

routes.post('/user/create', UserController.create);

routes.post('/sessions', SessionController.create);

routes.get('/', async (req, res) => res.status(200).json());

routes.post('/auth', AuthReceiverController.storeAuthCode);
routes.get('/auth', AuthReceiverController.getAuthCode);
routes.get('/auth/lastPing', AuthReceiverController.getLastPing);
// Rotas autenticadas
routes.use(authMiddleware);

export default routes;
