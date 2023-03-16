import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

  createApp(App).use(vuetify).mount('#app')