import React ,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './locales/en/translation.json';
import Fntranslation from './locales/fn/translation.json'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store from './store/store.js';



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translations,
      },
      fn: {
        translation: Fntranslation,
      }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     <Provider store={store}  >
      <BrowserRouter>
    <Suspense  fallback={<div>Loading...</div>}> <App /></Suspense>
    </BrowserRouter>
    </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
