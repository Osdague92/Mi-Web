/**
 * priceService.js (Versión Final Robusta y Validada)
 */

const BACKEND_API_URL = "http://127.0.0.1:3000/api/prices"; // Mantenemos la IP directa que funciona.
let retryCount = 0;
const MAX_RETRIES = 3;

function formatPrice(price, decimals = 2) {
    if (typeof price !== 'number' || price === null) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(price);
}

function updateTicker(elementId, priceText) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = priceText;
        el.classList.remove('loading', 'error'); // Limpia cualquier estado anterior
        el.classList.add('price-update');
        setTimeout(() => el.classList.remove('price-update'), 500);
    }
}

function setTickerError(elementId) {
    const el = document.getElementById(elementId);
    if(el) {
        el.textContent = 'Error';
        el.classList.remove('loading');
        el.classList.add('error');
    }
}

export async function initPriceTickers() {
    const tickerContainer = document.getElementById('price-tickers');
    if (!tickerContainer) return;

    try {
        const response = await fetch(BACKEND_API_URL);
        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }

        const data = await response.json();
        
        // --- VALIDACIÓN DE ESTRUCTURA (Mejora añadida) ---
        // Verificamos que la respuesta del backend tenga la forma que esperamos.
        if (!data || !data.crypto || !data.forex || !data.forex.rates) {
            throw new Error('La estructura de datos recibida del backend es inesperada.');
        }

        // Si la validación es exitosa, reseteamos el contador de reintentos.
        retryCount = 0;

        // --- RENDERIZADO SEGURO ---
        // Usamos optional chaining (?.) como doble seguro al acceder a los datos.
        updateTicker('btc-price', formatPrice(data.crypto.bitcoin?.usd, 2));
        updateTicker('eth-price', formatPrice(data.crypto.ethereum?.usd, 2));
        updateTicker('ada-price', formatPrice(data.crypto.cardano?.usd, 4));
        updateTicker('eurusd-price', formatPrice(data.forex.rates?.USD, 4));

    } catch (error) {
        // --- LÓGICA DE REINTENTOS (La que ya funcionaba) ---
        console.error(`[Intento ${retryCount + 1}] Error en priceService:`, error);
        retryCount++;
        
        if (retryCount < MAX_RETRIES) {
            console.log(`Reintentando en 3 segundos...`);
            setTimeout(initPriceTickers, 3000);
        } else {
            console.error("Se alcanzó el número máximo de reintentos. Mostrando error final.");
            
            // Ponemos cada ticker en estado de error.
            setTickerError('btc-price');
            setTickerError('eth-price');
            setTickerError('ada-price');
            setTickerError('eurusd-price');

            // --- MENSAJE DE ERROR GLOBAL (Mejora añadida) ---
            // Añadimos un mensaje claro para el usuario en el contenedor principal.
            if (tickerContainer) {
                // Primero, removemos cualquier mensaje de error anterior para no duplicarlos.
                const existingErrorMsg = tickerContainer.querySelector('.error-message');
                if (existingErrorMsg) {
                    existingErrorMsg.remove();
                }
                
                const errorMsg = document.createElement('div');
                errorMsg.textContent = 'No se pudieron cargar los precios. Por favor, intenta de nuevo más tarde.';
                errorMsg.className = 'error-message'; // Asignamos una clase para darle estilo
                tickerContainer.appendChild(errorMsg);
            }
        }
    }
}