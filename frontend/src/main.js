import { createApp } from 'vue'
import './styles/variables.scss'
import './styles/global.scss'
import App from './App.vue'
//import { vuetify } from './plugins/vuetify'
import vuetify from './plugins/vuetify'
import { router } from './router/'


createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')