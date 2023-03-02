import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequire from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista um usuário

router.post('/', loginRequire, userController.store);
router.put('/', loginRequire, userController.update);
router.delete('/', loginRequire, userController.delete);

export default router;

/*
  index -> lista todos os usuários -> GET
  store/create -> cria um usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT
*/
