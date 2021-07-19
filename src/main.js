import { createApp } from 'vue';
import router from './pages/route.js';
import App from './App.vue';
import fontawesome from 'font-awesome/css/font-awesome.css';
import store from './store/store.js';
import LoadingSpinner from './components/ui/BaseSpinner.vue';
import ErrorModal from './components/ui/BaseDialog.vue';
import Footer from './components/layout/TheFooter.vue';

const app = createApp(App);
app.component('loading-spinner', LoadingSpinner);
app.component('error-modal', ErrorModal);
app.component('the-footer', Footer);

app.use(router);
app.use(store);
app.use(fontawesome);

router.isReady().then(function() {
  app.mount('#app');
});
