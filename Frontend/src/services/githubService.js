/**
 * githubService.js (Versión con Depuración)
 * Módulo encargado de obtener y mostrar los proyectos de GitHub.
 */

console.log("✅ Módulo githubService.js cargado.");

const customProjectDetails = {
    "Mi-Web": { description: "Machine Learning, Programacion, Blockchain, Trading y mucho mas.", tags: ["HTML", "CSS", "JavaScript"]},
    "fullstack-docker": { description: "Prueba de entrevista que demuestra la creación de un entorno de desarrollo full-stack contenerizado con Docker.", tags: ["Docker", "Full-Stack", "JavaScript"] },
    "curriculum": { description: "Recurso para aprendices para practicar y mejorar sus habilidades en HTML, CSS, JavaScript y otras tecnologías web.", tags: []},
    "ContratosApp": { description: "Aplicación para la gestión y ordenamiento de contratos, facilitando la búsqueda y el seguimiento de documentos importantes.", tags: ["JavaScript", "HTML"] },
    "MiChatbotOscar": { description: "Un chatbot que procesa lenguaje natural para automatizar respuestas, mejorando la interacción y la eficiencia del usuario.", tags: ["Python", "PLN"] },
    "ProyectoPrecipitaciones": { description: "Modelo de Machine Learning que predice precipitaciones mensuales usando datos históricos para optimizar decisiones en agricultura.", tags: ["Python", "Machine Learning"] }
};

export function initGithubProjects(containerId) {
    console.log("🚀 Se ha llamado a initGithubProjects.");
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`🛑 Error: No se encontró el contenedor con el ID: #${containerId}. Verifica tu HTML.`);
        return;
    }
    console.log("✅ Contenedor #github-projects encontrado.", container);

    const GITHUB_USERNAME = "Osdague92";
    container.innerHTML = "<p>Cargando proyectos desde GitHub...</p>";
    console.log("⏳ Iniciando fetch a la API de GitHub...");

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
        .then(response => {
            console.log("📡 Respuesta de la API recibida.");
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(repos => {
            console.log("✅ Repositorios recibidos con éxito:", repos);
            container.innerHTML = ""; // Limpia el mensaje de carga
            
            if (repos.length === 0) {
                container.innerHTML = "<p>No se encontraron repositorios públicos.</p>";
                return;
            }

            repos.forEach(repo => {
                const details = customProjectDetails[repo.name] || {
                    description: repo.description || 'No hay descripción disponible.',
                    tags: repo.language ? [repo.language] : []
                };

                const card = document.createElement("div");
                card.className = "project-card";
                const tagsHTML = details.tags.map(tag => `<span>${tag}</span>`).join('');
                
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${details.description}</p>
                    <div class="tech-tags">${tagsHTML}</div>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Ver en GitHub →</a>
                `;
                container.appendChild(card);
            });
            console.log("✅ Proyectos renderizados en la página.");
        })
        .catch(error => {
            container.innerHTML = "<p>Hubo un error al cargar los proyectos. Revisa la consola para más detalles.</p>";
            console.error("🛑 Error fatal en githubService:", error);
        });
}