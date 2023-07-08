import express from 'express';
import { Product } from '../../db/models';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
	const products = await Product.findAll();
	return res.json(products);
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const product = await Product.findByPk(id);
	if (!product) {
		return res.status(404).json({ error: 'Product not found' });
	}
	return res.json(product);
});

export default router;
