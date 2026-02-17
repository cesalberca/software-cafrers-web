# Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra 🐐

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2-60A5FA?style=flat-square&logo=biome)](https://biomejs.dev/)
[![License](https://img.shields.io/badge/Licencia-Privada-red?style=flat-square)]()
[![Cabras offendidas](https://img.shields.io/badge/Cabras_ofendidas-42-fcc146?style=flat-square)]()

> _"Si nadie entiende tu código... eres indispensable."_

Web oficial del libro **Software Cafrers** de [César Alberca](https://cesalberca.com/). Publicado por [Savvily](https://savvily.es/). 42a edición*. 158 páginas de sabiduría _cuestionable_.

<sub>*No ha habido 41 ediciones anteriores, pero suena más impresionante así.</sub>

---

## Requisitos previos

Necesitas tener instalado:

- **Node.js** 25+ (si no sabes qué versión tienes, ejecuta `node -v` y reza)
- **npm** (viene con Node.js, no tienes excusa)

## Instalación

Clona el repositorio y luego instala las dependencias.

```bash
git clone https://github.com/cesalberca/software-cafrers-web
cd software-cafrers-web
npm install
```

## Scripts disponibles

| Comando            | Qué hace                                              | Nivel de peligro                      |
|--------------------|-------------------------------------------------------|---------------------------------------|
| `npm run dev`      | Arranca el servidor de desarrollo en `localhost:3000` | Ninguno*                              |
| `npm run build`    | Genera el build de producción                         | Medio si tienes errores de TypeScript |
| `npm start`        | Arranca el servidor de producción                     | Necesitas haber hecho `build` antes   |
| `npm run lint`     | Revisa el código con Biome                            | Tu ego podría salir herido            |
| `npm run lint:fix` | Corrige errores de lint automáticamente               | Deja que Biome haga el trabajo sucio  |
| `npm run format`   | Formatea el código con Biome                          | Paz interior garantizada              |

<sub>*Ninguno, salvo las horas de productividad que vas a perder.</sub>

## Stack tecnológico

Porque usar una sola tecnología sería demasiado sencillo:

- **[Next.js 16](https://nextjs.org/)** — Framework de React. Porque React solo no era suficientemente complejo.
- **[React 19](https://react.dev/)** — La librería que te prometió que los hooks iban a ser fáciles.
- **[TypeScript 5](https://www.typescriptlang.org/)** — Para que los errores te los diga el compilador en vez de tus usuarios.
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Clases CSS inline pero _con estilo_. Já.
- **[Radix UI](https://www.radix-ui.com/)** — Componentes accesibles. Al menos algo hacemos bien.
- **[Biome](https://biomejs.dev/)** — Linter y formateador. Reemplaza a ESLint y Prettier.
- **[Fathom Analytics](https://usefathom.com/)** — Analytics que respetan la privacidad. Sí, existen.

## Estructura del proyecto

```
app/
├── page.tsx          # Página principal (donde ocurre la magia)
├── layout.tsx        # Layout raíz con metadatos y analytics
├── globals.css       # Estilos globales y tema personalizado
└── icon.png          # Favicon

components/
├── sections/         # Secciones de la landing (~26 componentes)
│   ├── Hero.tsx      # Hero con libro 3D y animación de código vomitivo
│   ├── Testimonials.tsx  # Reseñas falsas (ninguna es real, lo juramos)
│   ├── FAQ.tsx       # Preguntas frecuentes con respuestas cuestionables
│   └── ...           # Y muchas más secciones
├── BuyLink.tsx       # Botón de compra (con tracking, obvio)
└── ConsoleArt.tsx    # Arte ASCII de una cabra en la consola del navegador

lib/
├── fathom-goals.ts   # Definiciones de objetivos de analytics
├── goat-sound.ts     # Efectos de sonido de cabra (sí, en serio)
└── utils.ts          # Utilidades varias

public/
├── cover.png         # Portada del libro
├── left-goat.svg     # Cabra animada izquierda
├── right-goat.svg    # Cabra animada derecha
└── sounds/           # Archivos de audio (más cabras)
```

## Desarrollo

Arranca el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. Los cambios se recargan automáticamente porque estamos en `Date.now().year`, no en la edad de piedra.

## Linting y formateo

Este proyecto usa **Biome** para mantener el código limpio. La configuración incluye:

- Comillas simples
- Sin punto y coma (vivimos al límite)
- Comas finales
- Ancho máximo de línea: 120 caracteres

```bash
# Revisar errores
npm run lint

# Corregir errores automáticamente
npm run lint:fix

# Formatear código
npm run format
```

## Despliegue

El proyecto se despliega en **Vercel**. Cada push a `main` dispara un despliegue automático.

```bash
npm run build
```

---

<div align="center">

**[Comprar el libro](https://savvily.es/libros/software-cafrers/)** | **[Sobre el autor](https://cesaralberca.com)**

_Hecho con cantidades cuestionables de ~~café~~ Matcha y al menos 3 cabras de apoyo emocional._

</div>
