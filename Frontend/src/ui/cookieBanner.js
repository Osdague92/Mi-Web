/**
 * cookieBanner.js
 * Módulo para inicializar el banner de consentimiento de cookies.
 */

// El código del banner no necesita exportar nada, solo ejecutarse.
export function initCookieBanner() {
    window.addEventListener("load", function() {
        if (window.cookieconsent) {
            window.cookieconsent.initialise({
                "palette": {
                    "popup": { "background": "#2c3e50" },
                    "button": { "background": "#2A9D8F" }
                },
                "theme": "edgeless",
                "content": {
                    "message": "Este sitio web utiliza cookies para garantizar que obtengas la mejor experiencia de navegación.",
                    "dismiss": "¡Entendido!",
                    "link": "Aprender más"
                }
            });
        }
    });
}