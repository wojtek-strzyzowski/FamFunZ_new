# FamFunZ – Development Checklist

## Project Goal
Mobile-first web app for parents in Zurich to discover and share family-friendly places and activities.

---

## Tech Stack
- Frontend: Vue 3 + Vite
- UI Framework: Vuetify 3
- Styling: SCSS + Vuetify Theme
- Backend: Laravel API
- Auth: Laravel Sanctum
- Maps: Leaflet or Google Maps
- Animations: GSAP
- Rich Text Editor: TipTap

---

## Repository Structure


# FamFunZ – Development Checklist

## Project Overview
**FamFunZ** is a mobile-first web app for parents in Zurich to discover and share family-friendly places, activities, and experiences.  
The focus is on usability, trust, and a calm, elegant design — built for real parents.

---

## Project Goals
- Mobile-first UX
- Clean, non-childish but family-friendly design
- User-generated content (posts with location & images)
- Scalable architecture (Nuxt-ready)
- Professional frontend standards (design system first)

---

## Tech Stack

### Frontend
- Vue 3 (Vite)
- Vuetify 3
- SCSS (global variables + theme)
- GSAP (animations – later)
- TipTap (rich text – later)

### Backend (planned)
- Laravel API
- MySQL
- Laravel Sanctum (Auth)

---

## Repository Structure

.git  
backend/  
frontend/  
design/  
README.md  
DEV_CHECKLIST.md  

---

## Frontend File Structure

frontend/  
├─ src/  
│ ├─ assets/ # images, icons, fonts  
│ ├─ components/ # reusable UI components  
│ │ ├─ ui/  
│ │ │ └─ AppHeader.vue (Header mit Buttons erstellt, mobile-first, funktioniert)  
│ │ ├─ cards/  
│ │ ├─ hero/  
│ │ │ └─ HeroSection.vue (Headline + Text + Search Input sichtbar)  
│ │ └─ cta/  
│ ├─ layouts/ # app layouts  
│ │ └─ DefaultLayout.vue (Header + slot für Page Content)  
│ ├─ pages/ # route-level pages  
│ │ └─ LandingPage.vue (Header + HeroSection eingebunden)  
│ ├─ plugins/  
│ │ └─ vuetify.js (Components + Directives registriert, Theme + Defaults definiert)  
│ ├─ router/  
│ │ └─ index.js  
│ ├─ styles/  
│ │ ├─ _variables.scss  
│ │ └─ main.scss (Fonts + global Gradient + Reset Styles)  
│ ├─ App.vue  
│ └─ main.js  

---

## Development Status

### 1. Setup & Infrastructure
- [x] Monorepo structure created  
- [x] Node.js updated (v22+)  
- [x] Vite + Vue 3 initialized  
- [x] Vuetify installed  
- [x] Vuetify plugin registered in main.js  
- [x] Vuetify test component rendered successfully  

---

### 2. Design System (CURRENT FOCUS)
Derived from Figma design.

- [x] Define color tokens (primary, secondary, background, surface, accent)  
      ----> In `vuetify.js` definiert  
- [x] Setup Vuetify theme configuration  
- [x] Define global border radius & elevation rules  
- [x] Define typography system  
      ----> Fonts definiert, aber noch nicht global importiert  
  - Headlines: Playfair Display  
  - Body: Inter  
  - UI / Buttons: Poppins  
- [ ] Import and register fonts globally  
- [ ] Create global SCSS variables  
- [x] Define global background gradient (via `global.scss`)  

---

### 3. Layout Architecture
- [x] DefaultLayout.vue created (minimal)  
- [x] AppHeader.vue erstellt (Header mit Buttons, mobile-first)  
- [ ] Apply global background & page padding  
- [ ] Prepare header/footer slots  
- [ ] Mobile-first layout constraints  

---

### 4. Reusable UI Components
(Components first, pages last)

- [x] HeroSection scaffolded (Headline + Text + Search Input sichtbar)  
- [ ] StatCard  
- [ ] AdventureListCard  
- [ ] JoinCommunityCard  
- [ ] Navigation (mobile-first)  

---

### 5. Pages
- [x] LandingPage.vue scaffolded (Header + HeroSection eingebunden)  
- [ ] Explore  
- [ ] Post Detail  
- [ ] Profile  

---

### 6. Future Features (Post-MVP)
- [ ] Authentication  
- [ ] Post creation flow  
- [ ] Map integration  
- [ ] Animations (GSAP)  
- [ ] Rich text editor (TipTap)  

---

## Development Rules (NON-NEGOTIABLE)
- No page-level styling  
- No hardcoded colors (theme/variables only)  
- Mobile-first always  
- Components must be reusable  
- Layout logic lives in layouts, not pages  
- Pages only compose components  

---

## Design Reference
- UI based on Figma mockups  
- Rounded cards, soft gradients  
- Calm, elegant, non-childish aesthetic  
- Accessibility & readability prioritized  

---

## Decision Log
- UI Framework: Vuetify 3  
- Architecture: Design-system first  
- Styling: Theme + SCSS variables  
- Future-proofing: Nuxt-compatible structure  

---

### Next Steps / Prompt für Entwickler
Ich habe die LandingPage scaffolded, Header mit Buttons (Explore / Sign In) und HeroSection (Headline + Text + Search Input) funktionsfähig, Gradient sichtbar, Vuetify Styles greifen korrekt.

Weiterarbeiten:  
- [ ] StatCards (wiederverwendbare Komponenten für Statistikbereich)  
- [ ] Latest Adventures List (AdventureListCard-Komponenten)  
- [ ] CTA Section (JoinCommunityCard)  
- [ ] Prüfen von Theme / Padding / Fonts für konsistente LandingPage  
- [ ] Alles weiterhin mobile-first, responsive, Vuetify-konform  
