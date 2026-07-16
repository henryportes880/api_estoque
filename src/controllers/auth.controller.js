import authService from "../services/auth.service.js";

export default {

    async register(req, res, next) {
        try {
            const { name, email, password, role } = req.body;

            const user = await authService.registerUser({
                name,
                email,
                password,
                role
            });

            res.status(201).json(user);

        } catch (error) {
            next(error);
        }
    },

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const result = await authService.loginUser({
                email,
                password
            });

            res.json(result);

        } catch (error) {
            next(error);
        }
    }
};