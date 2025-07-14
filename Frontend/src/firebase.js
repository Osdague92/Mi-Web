import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// IMPORTANTE: Reemplaza estos valores con tu configuración real de Firebase
// Puedes obtener estos valores desde la consola de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Verificar si la configuración está completa
const isConfigComplete = Object.values(firebaseConfig).every(value => 
  value && value !== "TU_API_KEY" && value !== "TU_AUTH_DOMAIN" && 
  value !== "TU_PROJECT_ID" && value !== "TU_STORAGE_BUCKET" && 
  value !== "TU_MESSAGING_SENDER_ID" && value !== "TU_APP_ID"
);

if (!isConfigComplete) {
  console.warn("⚠️ Firebase no está configurado. Por favor, actualiza la configuración en firebase.js");
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    if (!isConfigComplete) {
      throw new Error("Firebase no está configurado");
    }
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    if (!isConfigComplete) {
      throw new Error("Firebase no está configurado");
    }
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

export { auth, signInWithGoogle, logout };
