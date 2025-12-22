// src/plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  theme: {
    defaultTheme: 'famfunzTheme',
    themes: {
      famfunzTheme: {
        dark: false,
        colors: {
          primary: '#6A5AE0',       // Lila-Mint Gradient Start (Figma Primary)
          secondary: '#A0F0D1',     // Mint Accent
          background: 'transparent',    // Heller Hintergrund
          surface: '#FFFFFF',       // Cards / Container
          accent: '#FFB547',        // Highlight/CTA
          error: '#FF6B6B',         // Optional
          info: '#5BC0EB',
          success: '#6BCB77',
          warning: '#FFD93D',
        },
      },
    },
  },
  defaults: {
    global: {
      rounded: 'lg', // Default Border-Radius für Buttons, Cards etc.
    },
    VBtn: {
      rounded: 'lg',
      elevation: 2,
    },
    VCard: {
      rounded: 'lg',
      elevation: 1,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});
