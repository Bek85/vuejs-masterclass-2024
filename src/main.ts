import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/index.css';
import 'iconify-icon';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.errorHandler = (error, instance, info) => {
  // TODO:Handle error globally and log it in red color
  // TODO: Need to log where the error is coming from
  console.log('%c' + error, 'color: red');
};

app.mount('#app');
