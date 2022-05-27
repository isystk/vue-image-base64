import { createApp } from 'vue';
import Dev from './serve.vue';

require('./assets/sass/main.scss')

const app = createApp(Dev);
app.mount('#app');
