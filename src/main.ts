import { registerPlugins } from "./plugins";
import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options: PluginOptions = {
    // You can set your default options here
};

app.use(router).use(Toast,options);

registerPlugins(app);

app.mount("#app");
