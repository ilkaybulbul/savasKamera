# Walkthrough: React Migration Complete

I have successfully migrated the "Ankaragüvenlik Kamera" project to a modern **React + Vite** application. The codebase is now fully modular, type-safe, and supports the requested features.

## 🚀 How to Run

1.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Then open `http://localhost:5173`.

2.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder.

## ✨ New Features

### 1. 🌓 Dark Mode
*   **Toggle**: Use the moon/sun icon in the top right (desktop) or mobile menu.
*   **Implementation**: Persistent preference using `localStorage` and system settings detection.
*   **Style**: Fully customized dark palette matching the original premium design.

### 2. 🌍 Internationalization (i18n)
*   **Toggle**: Switch between **TR** (Turkish) and **EN** (English) using the language button.
*   **Coverage**: 100% of the text is extracted to locale files (`src/locales/`), allowing easy updates.

### 3. 🧩 Component Architecture
 The project is broken down into reusable components in `src/components/`:
*   `Navbar`: Responsive, sticky header.
*   `Hero`, `Services`, `Process`, `WhyUs`, `Reviews`: Content sections.
*   `References`: **New!** A gallery section showing completed projects as requested.
*   `ContactForm`: Interactive form with validation and simulated submission.
*   `Footer`: Standard footer.

### 4. 📱 Responsiveness
*   **Mobile Menu**: A fully functional hamburger menu for small screens.
*   **Layout**: Grid systems (Tailwind) adapt from mobile to desktop.

## 📁 Project Structure

```
src/
├── components/     # React Components (Hero, Navbar, etc.)
├── context/        # Global State (ThemeContext)
├── locales/        # JSON Translation files (en.json, tr.json)
├── App.tsx         # Main Layout Assembly
├── main.tsx        # Entry Point
└── index.css       # Tailwind & Custom Styles
```

## ✅ Verification
The project builds successfully (`npm run build`). All interactive elements (buttons, forms, toggles) are wired up.

Enjoy your new modern web application!
