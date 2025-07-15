# Mi Web - GitHub Pages

Este proyecto está configurado para ser desplegado automáticamente en GitHub Pages.

## Configuración de GitHub Pages

### 1. Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona **gh-pages** y **/(root)**
5. Haz clic en **Save**

### 2. Configurar el repositorio

El proyecto ya incluye:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Configuración de Vite para Vue.js
- ✅ Scripts de build en `package.json`

### 3. Desplegar automáticamente

Cada vez que hagas push a la rama `main`, el sitio se desplegará automáticamente en:
`https://[tu-usuario].github.io/[nombre-del-repositorio]/`

## Desarrollo local

```bash
cd Frontend
npm install
npm run dev
```

## Build manual

```bash
cd Frontend
npm run build
```

## Estructura del proyecto

```
├── Frontend/           # Aplicación Vue.js
│   ├── src/           # Código fuente
│   ├── public/        # Archivos estáticos
│   ├── package.json   # Dependencias y scripts
│   └── vite.config.js # Configuración de Vite
├── .github/
│   └── workflows/     # GitHub Actions
└── README.md          # Este archivo
```

## Notas importantes

- El sitio se desplegará en la rama `gh-pages` automáticamente
- La URL base en producción será `/[nombre-del-repositorio]/`
- Los cambios se reflejan en GitHub Pages después de unos minutos