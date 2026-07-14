import productService from '../services/product.service.js';

export default {
  async create(req, res, next) {
    console.log("BODY:", req.body);

    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const products = await productService.listProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const product = await productService.getProduct(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  // async update(req, res, next) {
  //   ...
  // },

  // async remove(req, res, next) {
  //   ...
  // }
};