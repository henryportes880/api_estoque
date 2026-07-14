import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';

const router = Router();

// Cadastro
router.post('/auth/register', authController.register);

// Login
router.post('/auth/login', authController.login);

// Validação do token
router.post('/auth/validate', authMiddleware, (req, res) => {
    return res.json({ msg: "OK" });
});

export default router;