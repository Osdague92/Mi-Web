/**
 * authService.js
 * Módulo para gestionar la autenticación de usuarios con Firebase.
 */
import { auth } from '../firebase.js';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

/**
 * Inicializa el sistema de autenticación y actualiza la UI.
 * @param {string} containerId - El ID del contenedor para los botones de login/logout.
 */
export function initAuth(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (user) => {
        // Dispara un evento personalizado para que otros módulos sepan del cambio.
        document.dispatchEvent(new CustomEvent('authStateChange', { detail: { user } }));
        
        if (user) {
            container.innerHTML = `
                <span style="color: white; margin-right: 1rem;">Hola, ${user.displayName.split(' ')[0]}!</span>
                <img src="${user.photoURL}" alt="Avatar" style="width: 40px; border-radius: 50%; vertical-align: middle; margin-right: 1rem;">
                <button id="logout-btn" class="cta-button" style="padding: 0.5rem 1rem; background-color: #c0392b;">Cerrar Sesión</button>
            `;
        } else {
            container.innerHTML = `<button id="login-btn" class="cta-button" style="padding: 0.5rem 1rem;">Iniciar Sesión</button>`;
        }
    });

    container.addEventListener('click', (e) => {
        if (e.target.id === 'login-btn') {
            signInWithPopup(auth, provider).catch(error => console.error("Error de login:", error));
        }
        if (e.target.id === 'logout-btn') {
            signOut(auth).catch(error => console.error("Error de logout:", error));
        }
    });
}