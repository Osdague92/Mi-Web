// middleware/errorMiddleware.js

/**
 * Middleware centralizado para el manejo de errores.
 */
export const errorHandler = (err, req, res, next) => {
    console.error("🛑 Ocurrió un error:", err.message);

    // Puedes añadir lógica para diferentes tipos de errores aquí
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        message: "Hubo un error en el servidor. Por favor, intenta de nuevo más tarde.",
        // En desarrollo, podrías enviar más detalles del error:
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};