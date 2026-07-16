import createError from '../utils/app-error.js';
import hashPassword, { compareHashedPassword } from '../utils/hash-password.js';
import repo from '../repositories/user.repository.js';
import { createToken } from '../middlewares/auth-middleware.js';

export default {
    async registerUser({ name, email, password, role }) {

    if (!name?.trim()) {
        throw createError("Nome é obrigatório.", 400);
    }

    if (!email?.trim()) {
        throw createError("E-mail é obrigatório.", 400);
    }

    if (!password) {
        throw createError("Senha é obrigatória.", 400);
    }

    const userExists = await repo.findByEmail(
        email.trim().toLowerCase()
    );

    if (userExists) {
        throw createError("E-mail já cadastrado.", 400);
    }

    const user = await repo.create({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: hashPassword(password),
    role: role || "READER"
});

// transforma o documento do Mongoose em um objeto comum
const userResponse = user.toObject();

// remove a senha
delete userResponse.password;

// retorna sem a senha
return userResponse;
},
    async loginUser({ email, password })
    {
        if (!email?.trim()) throw createError('E-mail é obrigatório.', 400);
        if (!password) throw createError('Senha é obrigatória.', 400);

        const user = await repo.findByEmail( email.trim().toLowerCase());

        if (!user) {
            throw createError('E-mail ou senha inválidos.', 401);
        }

        const passwordIsValid = compareHashedPassword(
            password,
            user.password
        );

        if (!passwordIsValid) {
            throw createError('E-mail ou senha inválidos.', 401);
        }

        const token = createToken({
    id: user.id,
    email: user.email,
    roles: [
        user.role
    ]
});

// transforma em objeto
const userResponse = user.toObject();

// remove a senha
delete userResponse.password;

// retorna o usuário sem a senha
return {
    user: userResponse,
    token
};
    }
};
