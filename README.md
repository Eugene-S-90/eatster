# Eatster web app (React + TypeScript + Vite)

A modern, modular SPA built with React, TypeScript, Zustand, and Vite.  
Features product listing, cart, multi-language support, and routing.

---

## 🚀 Getting Started

### 1. **Install dependencies**

```sh
npm install
```

### 2. **Run in development mode**

```sh
npm run dev
```
App will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 3. **Build for production**

```sh
npm run build
```

### 4. **Preview production build**

```sh
npm run preview
```

---

## 🗂️ Project Structure

- `src/components/` – UI components (product cards, dialogs, cart, etc.)
- `src/layouts/` – Layout and error pages
- `src/store/` – Zustand stores for app, cart, and restaurant/product state
- `src/api/` – API fetch utilities
- `src/types/` – TypeScript types
- `src/lib/` – Utility functions
- `public/` – Static assets (e.g., spinner.gif)

---

## ⚙️ Environment

- API base URL is set in `.env` as `VITE_API_BASE`.

---

## 📝 Notes

- Uses Zustand for state management.
- Query parameters control view and content.
- Tailwind CSS for styling.
- To deploy, use any static hosting (e.g., Vercel, Netlify).

---

## 📦 Scripts

| Command         | Description                |
|-----------------|---------------------------|
| `npm run dev`   | Start dev server          |
| `npm run build` | Build for production      |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint                |

---