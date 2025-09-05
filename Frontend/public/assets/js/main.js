/**
 * main.js
 * Archivo principal para la página web estática
 * Maneja la funcionalidad de precios en tiempo real y autenticación
 */

// Configuración de la API de precios
const PRICE_API_URL = 'https://api.coingecko.com/api/v3/simple/price';
const CURRENCY_API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

// Elementos del DOM
let priceElements = {};

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializePriceTickers();
    initializeAuth();
    console.log('Aplicación inicializada correctamente');
});

/**
 * Inicializa los tickers de precios
 */
function initializePriceTickers() {
    // Obtener elementos del DOM
    priceElements = {
        btc: document.getElementById('btc-price'),
        eth: document.getElementById('eth-price'),
        ada: document.getElementById('ada-price'),
        eurusd: document.getElementById('eurusd-price')
    };

    // Verificar que los elementos existen
    if (Object.values(priceElements).some(el => el === null)) {
        console.warn('Algunos elementos de precio no se encontraron');
        return;
    }

    // Cargar precios iniciales
    loadPrices();
    
    // Actualizar precios cada 30 segundos
    setInterval(loadPrices, 30000);
}

/**
 * Carga los precios desde las APIs
 */
async function loadPrices() {
    try {
        // Cargar precios de criptomonedas
        await loadCryptoPrices();
        
        // Cargar precio de EUR/USD
        await loadCurrencyPrice();
        
    } catch (error) {
        console.error('Error cargando precios:', error);
        showPriceError();
    }
}

/**
 * Carga precios de criptomonedas
 */
async function loadCryptoPrices() {
    const response = await fetch(`${PRICE_API_URL}?ids=bitcoin,ethereum,cardano&vs_currencies=usd`);
    
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Actualizar precios
    if (priceElements.btc && data.bitcoin) {
        updatePrice(priceElements.btc, data.bitcoin.usd, 'USD');
    }
    
    if (priceElements.eth && data.ethereum) {
        updatePrice(priceElements.eth, data.ethereum.usd, 'USD');
    }
    
    if (priceElements.ada && data.cardano) {
        updatePrice(priceElements.ada, data.cardano.usd, 'USD');
    }
}

/**
 * Carga precio de EUR/USD
 */
async function loadCurrencyPrice() {
    const response = await fetch(CURRENCY_API_URL);
    
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (priceElements.eurusd && data.rates && data.rates.EUR) {
        const eurUsdRate = (1 / data.rates.EUR).toFixed(4);
        updatePrice(priceElements.eurusd, eurUsdRate, 'USD');
    }
}

/**
 * Actualiza el precio en el elemento del DOM
 */
function updatePrice(element, price, currency) {
    if (!element) return;
    
    // Formatear precio
    const formattedPrice = typeof price === 'number' 
        ? price.toLocaleString('en-US', { 
            style: 'currency', 
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        : `$${price}`;
    
    // Remover clases de estado
    element.classList.remove('loading', 'error');
    element.classList.add('price-update');
    
    // Actualizar texto
    element.textContent = formattedPrice;
    
    // Remover clase de animación después de un tiempo
    setTimeout(() => {
        element.classList.remove('price-update');
    }, 500);
}

/**
 * Muestra error en los precios
 */
function showPriceError() {
    Object.values(priceElements).forEach(element => {
        if (element) {
            element.classList.remove('loading');
            element.classList.add('error');
            element.textContent = 'Error';
        }
    });
}

/**
 * Inicializa la funcionalidad de autenticación
 */
function initializeAuth() {
    const loginBtn = document.getElementById('login-btn');
    const authContainer = document.getElementById('auth-container');
    
    if (!loginBtn || !authContainer) {
        console.warn('Elementos de autenticación no encontrados');
        return;
    }
    
    // Verificar si hay sesión guardada
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        showLoggedInState();
    } else {
        showLoggedOutState();
    }
    
    // Event listener para el botón de login
    loginBtn.addEventListener('click', handleAuthClick);
}

/**
 * Maneja el click en el botón de autenticación
 */
function handleAuthClick() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // Logout
        localStorage.removeItem('isLoggedIn');
        showLoggedOutState();
    } else {
        // Login simulado
        const username = prompt('Ingresa tu nombre de usuario:');
        if (username) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            showLoggedInState();
        }
    }
}

/**
 * Muestra el estado de usuario logueado
 */
function showLoggedInState() {
    const username = localStorage.getItem('username') || 'Usuario';
    const authContainer = document.getElementById('auth-container');
    
    authContainer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="color: white;">Hola, ${username}</span>
            <button id="login-btn" class="cta-button" style="padding: 0.5rem 1rem;">Cerrar Sesión</button>
        </div>
    `;
    
    // Re-asignar event listener
    document.getElementById('login-btn').addEventListener('click', handleAuthClick);
}

/**
 * Muestra el estado de usuario no logueado
 */
function showLoggedOutState() {
    const authContainer = document.getElementById('auth-container');
    
    authContainer.innerHTML = `
        <button id="login-btn" class="cta-button" style="padding: 0.5rem 1rem;">Iniciar Sesión</button>
    `;
    
    // Re-asignar event listener
    document.getElementById('login-btn').addEventListener('click', handleAuthClick);
}