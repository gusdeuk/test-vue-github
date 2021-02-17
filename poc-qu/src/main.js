import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import mixitup from 'mixitup';

// -----------------------------------------------------------
// Entry point for Global Scoped SCSS structure
// -----------------------------------------------------------
import './scss/main.scss';

// -----------------------------------------------------------
// global icon library FA based
// -----------------------------------------------------------
import { iconLibrary } from './icon-library';

const app = createApp(App)
    .use(store)
    .use(router)
    //.use(mixitup)
    // register icon lib as global component
    .component('font-awesome-icon', iconLibrary)
    .mount('#app');
