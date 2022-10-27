import { createApp } from 'vue'
import App from './app.vue'
import BrainButton from '@brain-ui/components/button/index'
import BrainButtonGroup from '@brain-ui/components/button-group/index'
import '@brain-ui/theme-chalk/src/index.scss'
import BrainUi from '@brain-ui/components'

const app = createApp(App)
app.use(BrainUi)

// app.use(BrainButton)
// app.use(BrainButtonGroup)
app.mount('#app')