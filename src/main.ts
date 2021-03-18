import { createApp } from 'vue'
import ECharts from 'vue-echarts';

import App from './App.vue'

const app =createApp(App)
app.component('v-chart',ECharts)
app.mount('#app')
