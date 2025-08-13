// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import priceRoutes from './routes/priceRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// --- Middlewares de Seguridad (se aplican primero) ---
app.use(helmet()); // Añade headers de seguridad básicos

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limita cada IP a 100 peticiones por ventana de tiempo
    standardHeaders: true,
    legacyHeaders: false,
    message: "Demasiadas peticiones desde esta IP, por favor intenta de nuevo en 15 minutos.",
});
app.use(limiter); // Aplica el rate limiting a todas las peticiones

// --- Middlewares Generales ---
app.use(cors());
app.use(express.json());

// --- Rutas de la API ---
app.use('/api/prices', priceRoutes);

// --- Manejador de Errores (se aplica al final) ---
// Este middleware especial solo se ejecuta si ocurre un error en las rutas.
app.use(errorHandler);

// --- Iniciar el Servidor ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend escuchando en el puerto ${PORT}`);
});