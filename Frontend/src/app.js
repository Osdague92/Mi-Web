// Este evento se asegura de que el script se ejecute solo cuando todo el HTML esté cargado.
document.addEventListener("DOMContentLoaded", () => {

  // =================================================
  // --- CARGADOR DE PROYECTOS DE GITHUB ---
  // =================================================
  // Esta parte del código solo se ejecutará si encuentra el contenedor de proyectos en la página.
  const githubProjectsContainer = document.getElementById("github-projects");
  if (githubProjectsContainer) {
    const GITHUB_USERNAME = "Osdague92";

    // --- ¡IMPORTANTE! MEJORA TUS DESCRIPCIONES AQUÍ ---
    // Añade tus repositorios clave aquí con descripciones que vendan el proyecto.
    // Si un repo no está aquí, usará la descripción de GitHub por defecto.
    const customProjectDetails = {
      "MiChatbotOscar": {
        description: "Un chatbot que procesa lenguaje natural para automatizar respuestas, mejorando la interacción y la eficiencia del usuario.",
        tags: ["Python", "PLN", "NLTK"]
      },
      "ProyectoPrecipitaciones": {
        description: "Modelo de Machine Learning que predice precipitaciones mensuales usando datos históricos para optimizar decisiones en agricultura y gestión hídrica.",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"]
      },
      "ContratosApp": {
          description: "Aplicación para la gestión y ordenamiento de contratos, facilitando la búsqueda y el seguimiento de documentos importantes.",
          tags: ["JavaScript", "HTML", "CSS"]
      },
      "fullstack-docker": {
          description: "Prueba de entrevista que demuestra la creación de un entorno de desarrollo full-stack contenerizado con Docker.",
          tags: ["Docker", "Full-Stack", "JavaScript"]
      }
      // Añade más proyectos clave aquí...
    };

    // Muestra un estado de carga inicial
    githubProjectsContainer.innerHTML = "<p>Cargando proyectos desde GitHub...</p>";

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue exitosa.');
        }
        return response.json();
      })
      .then(repos => {
        githubProjectsContainer.innerHTML = ""; // Limpiar el mensaje de carga
        repos.forEach(repo => {
          // Usa detalles personalizados si existen, si no, los de la API
          const details = customProjectDetails[repo.name] || {
            description: repo.description || 'No hay descripción disponible.',
            tags: [repo.language].filter(Boolean) // Usa el lenguaje principal como tag por defecto
          };

          const projectCard = document.createElement("div");
          projectCard.className = "project-card";

          // Genera las etiquetas de tecnología
          const tagsHTML = details.tags.map(tag => `<span>${tag}</span>`).join('');

          projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${details.description}</p>
            <div class="tech-tags">
                ${tagsHTML}
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Ver en GitHub →</a>
          `;
          githubProjectsContainer.appendChild(projectCard);
        });
      })
      .catch(error => {
        githubProjectsContainer.innerHTML = "<p>Error al cargar los proyectos. Inténtalo de nuevo más tarde.</p>";
        console.error("Error al cargar repositorios de GitHub:", error);
      });
  }


  // =================================================
  // --- GESTOR DEL FORMULARIO DE CONTACTO ---
  // =================================================
  // Esta parte del código solo se ejecutará si encuentra el formulario en la página.
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Previene que la página se recargue

      const name = contactForm.querySelector("#name").value;
      const email = contactForm.querySelector("#email").value;
      const interest = contactForm.querySelector("#interest").value;
      const message = contactForm.querySelector("#message").value;
      const submitButton = contactForm.querySelector("button");

      // Deshabilita el botón para evitar envíos múltiples
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";
      
      // --- TU LÓGICA DE FIREBASE VA AQUÍ ---
      // 1. Asegúrate de tener tu archivo firebase.js con tu configuración e importado.
      // 2. Importa las funciones necesarias: import { getFirestore, collection, addDoc } from "firebase/firestore";
      // 3. Descomenta y adapta el siguiente bloque de código.

      /*
      // --- INICIO DEL CÓDIGO DE FIREBASE (EJEMPLO) ---
      
      // Obtén la instancia de Firestore desde tu archivo de configuración
      // import { db } from './firebase.js'; 
      
      try {
        const docRef = await addDoc(collection(db, "contactos"), {
          name: name,
          email: email,
          interest: interest,
          message: message,
          timestamp: new Date()
        });
        
        console.log("Documento escrito con ID: ", docRef.id);
        submitButton.style.backgroundColor = "#28a745"; // Verde de éxito
        submitButton.textContent = "¡Mensaje Enviado!";
        contactForm.reset(); // Limpia el formulario

      } catch (error) {
        console.error("Error al añadir el documento: ", error);
        submitButton.style.backgroundColor = "#dc3545"; // Rojo de error
        submitButton.textContent = "Error al Enviar";
        alert("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.");
      } finally {
        // Vuelve a habilitar el botón después de unos segundos
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.style.backgroundColor = ""; // Vuelve al color original
          submitButton.textContent = "Enviar Mensaje";
        }, 4000);
      }
      
      // --- FIN DEL CÓDIGO DE FIREBASE (EJEMPLO) ---
      */

      // --- SIMULACIÓN (BORRA ESTO CUANDO IMPLEMENTES FIREBASE) ---
      console.log("Datos del formulario a enviar:", { name, email, interest, message });
      setTimeout(() => {
          submitButton.style.backgroundColor = "#28a745";
          submitButton.textContent = "¡Mensaje Enviado!";
          contactForm.reset();
          setTimeout(() => {
              submitButton.disabled = false;
              submitButton.style.backgroundColor = "";
              submitButton.textContent = "Enviar Mensaje";
          }, 4000);
      }, 1000);
      // --- FIN DE LA SIMULACIÓN ---
    });
  }
});