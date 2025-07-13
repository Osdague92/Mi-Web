document.addEventListener("DOMContentLoaded", () => {
  const multimediaContainer = document.getElementById("multimedia");
  const searchInput = document.getElementById("searchInput");

  const multimediaData = [
    {
      type: "audio",
      title: "Podcast",
      items: [
        {
          src: "assets/audios/PodcastOscarGuerraEsp.wav",
          description: "Exploramos el trading moderno y el desarrollo de software."
        },
        {
          src: "assets/audios/PodcastOscarGuerraIng.wav",
          description: "Hablamos sobre automatización, IA y decisiones financieras."
        }
      ]
    },
    {
      type: "video",
      title: "Videos",
      items: [
        {
          src: "assets/videos/Un trade cualquiera.mp4",
          description: "Análisis en tiempo real de una operación de trading."
        },
        {
          src: "assets/videos/Norecuerdo.mp4",
          description: "Buenas prácticas en desarrollo de software para trading."
        }
      ]
    },
    {
      type: "pdf",
      title: "Documentos PDF",
      items: [
        {
          src: "assets/pdfs/DiarioDeTrading(1).pdf",
          description: "Tu diario de trading personal para anotar tus operaciones."
        }
      ]
    }
  ];

  function renderContent(data) {
    multimediaContainer.innerHTML = "";

    data.forEach((section, sectionIndex) => {
      const sectionEl = document.createElement("section");
      sectionEl.className = "multimedia";

      const title = document.createElement("h2");
      title.textContent = section.title;
      sectionEl.appendChild(title);

      section.items.forEach((item, itemIndex) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item item-content";

        // Media
        let mediaElement;
        if (section.type === "audio") {
          mediaElement = document.createElement("audio");
          mediaElement.controls = true;
          mediaElement.innerHTML = `<source src="${item.src}" type="audio/mpeg">`;
        } else if (section.type === "video") {
          mediaElement = document.createElement("div");
          mediaElement.className = "video-container";
          mediaElement.innerHTML = `
            <video controls>
              <source src="${item.src}" type="video/mp4">
            </video>`;
        } else if (section.type === "pdf") {
          mediaElement = document.createElement("a");
          mediaElement.href = item.src;
          mediaElement.target = "_blank";
          mediaElement.className = "pdf-link";
          mediaElement.textContent = "Ver PDF";
        }

        const desc = document.createElement("p");
        desc.textContent = item.description;

        // Comentarios (simples en frontend)
        const commentsDiv = document.createElement("div");
        commentsDiv.className = "comments-section";
        commentsDiv.innerHTML = `
          <h4>Comentarios</h4>
          <div class="comments-list" id="comments-${sectionIndex}-${itemIndex}"></div>
          <form class="comment-form" data-section="${sectionIndex}" data-item="${itemIndex}">
            <textarea placeholder="Escribe un comentario..." required></textarea>
            <button type="submit">Publicar</button>
          </form>
        `;

        itemDiv.appendChild(mediaElement);
        itemDiv.appendChild(desc);
        itemDiv.appendChild(commentsDiv);
        sectionEl.appendChild(itemDiv);
      });

      multimediaContainer.appendChild(sectionEl);
    });
  }

  // Sistema de comentarios (solo en frontend, sin backend aún)
  document.addEventListener("submit", (e) => {
    if (e.target.matches(".comment-form")) {
      e.preventDefault();
      const textarea = e.target.querySelector("textarea");
      const text = textarea.value.trim();
      if (!text) return;

      const sectionIndex = e.target.dataset.section;
      const itemIndex = e.target.dataset.item;
      const commentList = document.getElementById(`comments-${sectionIndex}-${itemIndex}`);

      const commentEl = document.createElement("div");
      commentEl.className = "comment";
      commentEl.innerHTML = `
        <div class="comment-header">
          <span>Usuario anónimo</span>
          <span class="comment-date">${new Date().toLocaleString()}</span>
        </div>
        <p class="comment-text">${text}</p>
      `;

      commentList.appendChild(commentEl);
      textarea.value = "";
    }
  });

  // Buscador
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filteredData = multimediaData.map(section => {
      const filteredItems = section.items.filter(item =>
        item.description.toLowerCase().includes(query)
      );
      return {
        ...section,
        items: filteredItems
      };
    }).filter(section => section.items.length > 0);

    renderContent(filteredData);
  });

  renderContent(multimediaData);
});

  // Usuario de GitHub

  document.addEventListener("DOMContentLoaded", () => {
    const githubProjectsContainer = document.getElementById("github-projects");
    const GITHUB_USERNAME = "Osdague92";
    
  
    const languageIcons = {
      "JavaScript": "🟨",
      "HTML": "🟥",
      "CSS": "🟦",
      "Python": "🐍",
      "TypeScript": "🔷",
      "Shell": "🐚",
      "Dockerfile": "🐳",
      "Java": "☕",
      "C++": "💠",
      "C": "🧱",
      "Go": "🐹",
      "PHP": "🐘"
      // Puedes agregar más lenguajes aquí
    };
  
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(response => response.json())
      .then(repos => {
        repos.forEach(repo => {
          const projectEl = document.createElement("div");
          projectEl.className = "project";
  
          const title = `<h3>${repo.name}</h3>`;
          const desc = `<p>${repo.description || 'Sin descripción.'}</p>`;
          const link = `<a href="${repo.html_url}" target="_blank">Ver en GitHub</a>`;
  
          const langEl = document.createElement("div");
          langEl.className = "project-langs";
  
          fetch(repo.languages_url)
            .then(langRes => langRes.json())
            .then(langs => {
              const langList = Object.keys(langs)
                .map(lang => {
                  const icon = languageIcons[lang] || "📄";
                  return `<span class="lang">${icon} ${lang}</span>`;
                })
                .join("");
              langEl.innerHTML = langList;
            });
  
          projectEl.innerHTML = `${title}${desc}${link}`;
          projectEl.appendChild(langEl);
  
          githubProjectsContainer.appendChild(projectEl);
        });
      })
      .catch(error => {
        githubProjectsContainer.innerHTML = "<p>No se pudieron cargar los proyectos de GitHub.</p>";
        console.error("Error al cargar GitHub repos:", error);
      });
  });
    // Toggle de visibilidad con ícono 📁 ↔ 📂
    const toggleTitle = document.getElementById("toggle-proyectos");

    toggleTitle.addEventListener("click", () => {
      githubProjectsContainer.classList.toggle("hidden");
  
    });
  