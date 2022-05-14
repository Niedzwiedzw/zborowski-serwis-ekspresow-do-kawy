import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
import PrimeVue from "primevue/config";
app.use(PrimeVue);
app.use(createPinia());
app.use(router);

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //

app.mount("#app");
