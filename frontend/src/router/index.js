// Importiert die Router-Funktionen aus Vue Router.
// createRouter → erstellt eine neue Router-Instanz
// createWebHistory → sorgt für "schöne" URLs ohne Hash (#)
import { createRouter, createWebHistory } from 'vue-router'

// Importiert die Seite, die bei der Route "/" angezeigt werden soll.
// Jede Page ist eine eigene Vue-Komponente.
import LandingPage from '../pages/LandingPage.vue'

// Definiert alle verfügbaren Routen deiner Anwendung.
// Jede Route besteht aus:
// - path: die URL im Browser
// - name: interner Name (optional, aber nützlich für Navigation)
// - component: welche Vue-Komponente angezeigt wird
const routes = [
  {
    path: '/',              // URL: http://localhost:5173/
    name: 'Landing',        // interner Name der Route
    component: LandingPage, // welche Page-Komponente geladen wird
  },
]

// Erstellt die Router-Instanz.
// - history: legt fest, wie die Browser-History funktioniert
// - routes: die oben definierten Routen
export const router = createRouter({
  history: createWebHistory(), // nutzt die HTML5-History-API
  routes,                      // registriert alle Routen
})
