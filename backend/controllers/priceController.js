// controllers/priceController.js
import axios from 'axios';

// --- Implementación de Caché en Memoria ---
let cachedData = null;
let cacheTime = null;
const CACHE_DURATION_MS = 60000; // 1 minuto

/**
 * Controlador para obtener los precios de las APIs externas.
 * Incluye lógica de caché.
 */
export const getPrices = async (req, res, next) => {
    if (cachedData && (Date.now() - cacheTime < CACHE_DURATION_MS)) {
        console.log('✅ Sirviendo precios desde la caché.');
        return res.status(200).json(cachedData);
    }

    try {
        console.log('🔄 Actualizando precios desde las APIs externas...');
        const [cryptoResponse, forexResponse] = await Promise.all([
            axios.get(process.env.CRYPTO_API_URL),
            axios.get(process.env.FOREX_API_URL)
        ]);

        // Validación simple para asegurar que las respuestas son correctas
        if (!cryptoResponse.data || !forexResponse.data) {
            throw new Error('La respuesta de una de las APIs externas está vacía.');
        }

        const responseData = {
            crypto: cryptoResponse.data,
            forex: forexResponse.data
        };

        cachedData = responseData;
        cacheTime = Date.now();
        res.status(200).json(responseData);
    } catch (error) {
        // En lugar de manejar el error aquí, lo pasamos al siguiente middleware
        next(error);
    }
};