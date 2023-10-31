// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcomeTitle: "Welcome",
        welcomeMessage: "This is a multilingual app",
        goToInitial: "Go to initial",
        goToCharts: "Go to charts",
        dasVisualization: "DAS visualization",
        newProject: "New Project",
        settings: "Settings",
        exit: "Exit",
      },
    },
    es: {
      translation: {
        welcomeTitle: "Bienvenido",
        welcomeMessage: "Esta es una aplicación multilingüe",
        goToInitial: "Ir a inicial",
        goToCharts: "Ir a gráficas",
        dasVisualization: "Visualización DAS",
        newProject: "Nuevo proyecto",
        settings: "Configuraciones",
        exit: "Cerrar Aplicación",
      },
    },
    fr: {
      translation: {
        welcomeTitle: "Bienvenue",
        welcomeMessage: "C'est une application multilingue",
        goToInitial: "Aller à l'initial",
        goToCharts: "Aller aux graphiques",
        dasVisualization: "Visualisation DAS",
        newProject: "Nouveau projet",
        settings: "Paramètres",
        exit: "Quitter l'application",
      },
    },
    // Add more languages as needed
  },
  lng: "en", // Default language
  fallbackLng: "en",
  // ... other options
});

export default i18n;
