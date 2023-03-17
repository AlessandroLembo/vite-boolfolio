import { createApp } from 'vue';
import {router} from './router';
import AppLoader from './components/AppLoader.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';

const app = createApp(App);
app.component('AppLoader', AppLoader);
app.use(router);
app.mount('#app');
