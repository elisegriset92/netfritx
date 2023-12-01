import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'animate.css';
import 'vue-material-design-icons/HomeOutline.vue'
import 'vue-material-design-icons/Magnify.vue'
import 'vue-material-design-icons/ChevronLeft.vue'
import 'vue-material-design-icons/ChevronRight.vue'
import 'vue-material-design-icons/HeartOutline.vue'
import 'vue-material-design-icons/HomeOutline.vue'
import 'vue-material-design-icons/MovieOutline.vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')