import { createApp } from "vue";
import { createPinia } from "pinia";
import FloatingVue from "floating-vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "floating-vue/dist/style.css";
import "./index.css";

const app = createApp(App);

app.use(FloatingVue); 
app.use(createPinia());
app.use(router);

app.mount("#app");
