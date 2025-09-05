/**
 * app.js
 * Archivo principal (orquestador).
 * Importa los módulos especializados y los inicializa.
 */

import { initGithubProjects } from './services/githubService.js';
import { initAuth } from './services/authService.js';
import { initComments } from './services/commentService.js';
import { initCookieBanner } from './ui/cookieBanner.js';
import { initPriceTickers } from './services/priceService.js';

// Se ejecuta cuando todo el HTML está listo.
document.addEventListener("DOMContentLoaded", () => {
    
    // Inicializa cada módulo, pasándole los IDs de los elementos que necesita.
    // Cada módulo es inteligente y solo se ejecutará si encuentra su elemento en la página actual.
    
    initAuth('auth-container');
    initGithubProjects('github-projects');
    initComments('comment-form', 'comments-list');
    initCookieBanner();
    initPriceTickers();

    console.log("Aplicación inicializada.");
});