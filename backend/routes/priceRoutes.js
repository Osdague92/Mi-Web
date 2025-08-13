// routes/priceRoutes.js
import express from 'express';
import { getPrices } from '../controllers/priceController.js';

const router = express.Router();

// Define la ruta GET en la raíz (/) y la asocia con el controlador getPrices.
router.get('/', getPrices);

export default router;