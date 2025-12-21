import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  theme: {
    defaultTheme: 'famfunzTheme',
    themes: {
      famfunzTheme: {
        dark: false,
        colors: {
          primary: '#6A5AE0',
          secondary: '#A0F0D1',
          background: '#F5F5FA',
          surface: '#FFFFFF',
          accent: '#FFB547',
        },
      },
    },
  },
  defaults: {
    global: { rounded: 'lg' },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
