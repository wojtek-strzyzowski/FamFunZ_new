import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'famfunzTheme',
    themes: {
      famfunzTheme: {
        dark: false,
        colors: {
          primary: '#6A5AE0',
          secondary: '#A0F0D1',
          background: 'transparent',
          surface: '#FFFFFF',
          accent: '#FFB547',
          error: '#FF6B6B',
          info: '#5BC0EB',
          success: '#6BCB77',
          warning: '#FFD93D',
        },
      },
    },
  },
  defaults: {
    global: { rounded: 'lg' },
    VBtn: { rounded: 'lg', elevation: 2 },
    VCard: { rounded: 'lg', elevation: 1 },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});
