# Portafolio personal - Oscar Guerra

Sitio web de portafolio personal desarrollado con **React + Vite + TailwindCSS**, con animaciones sutiles usando **Framer Motion** y iconos de **Lucide React**.

Dominio: **osdague.dev**

## Características

- Diseño moderno, limpio y responsive.
- Navegación de una sola página con desplazamiento suave.
- Secciones: Hero, Servicios, Proyectos, Sobre mí, Contacto y Footer.
- Formulario de contacto compatible con **Netlify Forms**.
- Estructura modular y fácil de mantener.

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Luego abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

La salida se genera en la carpeta:

```bash
dist
```

## Deploy en Netlify

1. Conecta este repositorio en Netlify.
2. Configura:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Despliega.

### Netlify Forms

El formulario de contacto ya está listo con atributos `data-netlify="true"`, campo oculto `form-name` y honeypot anti-spam.

## Estructura

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx
    Portfolio.jsx
    ProjectCard.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js
    services.js
  pages/
    Home.jsx
  App.jsx
  main.jsx
```
