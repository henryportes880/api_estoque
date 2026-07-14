import stockMovementService from '../services/stock-movement.service.js';

export default {
  async create(req, res, next) {
    try {
      console.log('BODY:', req.body);
      console.log('USER:', req.user);

      const stockMovement = await stockMovementService.createStockMovement(
        req.body,
        req.user.id
      );

      res.status(201).json(stockMovement);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const stockMovements = await stockMovementService.listStockMovements();
      res.json(stockMovements);
    } catch (error) {
      next(error);
    }
  }
};