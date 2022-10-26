import { createApp } from 'vue'
import App from './app.vue'
import BrainButton from '@brain-ui/components/button'

const app = createApp(App)
app.use(BrainButton)
app.mount('#app')