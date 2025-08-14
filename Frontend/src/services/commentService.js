/**
 * commentService.js
 * Módulo para gestionar los comentarios en la página de trading.
 */
import { auth, db } from '../firebase.js';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

let currentUser = null;

// Escucha el evento personalizado para saber quién es el usuario.
document.addEventListener('authStateChange', (event) => {
    currentUser = event.detail.user;
    const textarea = document.getElementById('comment-text');
    if (textarea) {
        textarea.disabled = !currentUser;
        textarea.placeholder = currentUser ? "Escribe tu comentario..." : "Inicia sesión para dejar un comentario.";
    }
});

/**
 * Inicializa el sistema de comentarios.
 * @param {string} formId - El ID del formulario de comentarios.
 * @param {string} listId - El ID de la lista donde se muestran los comentarios.
 */
export function initComments(formId, listId) {
    const form = document.getElementById(formId);
    const list = document.getElementById(listId);
    // Si no estamos en la página correcta, no hace nada.
    if (!form || !list) return;

    // --- Lógica para enviar un nuevo comentario ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert("Por favor, inicia sesión para comentar.");
            return;
        }

        const textarea = form.querySelector('#comment-text');
        const commentText = textarea.value.trim();
        if (commentText === "") return;

        try {
            await addDoc(collection(db, "comments"), {
                text: commentText,
                authorName: currentUser.displayName,
                authorPhotoURL: currentUser.photoURL,
                authorId: currentUser.uid,
                createdAt: serverTimestamp()
            });
            form.reset();
        } catch (error) {
            console.error("Error al publicar comentario:", error);
            alert("Hubo un error al enviar tu comentario.");
        }
    });

    // --- Lógica para cargar comentarios en tiempo real ---
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
        list.innerHTML = "";
        snapshot.forEach((doc) => {
            const comment = doc.data();
            const el = document.createElement('div');
            el.className = 'comment';
            el.innerHTML = `
                <div class="comment-header">
                    <img src="${comment.authorPhotoURL}" alt="${comment.authorName}">
                    <strong>${comment.authorName}</strong>
                </div>
                <p class="comment-text">${comment.text}</p>
                <span class="comment-date">${comment.createdAt ? comment.createdAt.toDate().toLocaleString('es-CO') : '...'}</span>
            `;
            list.appendChild(el);
        });
    }, (error) => {
        console.error("Error al cargar comentarios:", error);
        list.innerHTML = "<p>No se pudieron cargar los comentarios.</p>";
    });
}