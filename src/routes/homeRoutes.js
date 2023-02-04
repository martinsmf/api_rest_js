import { Router } from 'express';
// import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

export default router;
