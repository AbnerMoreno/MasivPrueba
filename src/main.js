import { createApp } from 'vue'
import App from './App.vue'
import vue3StarRatings from "vue3-star-ratings";

const app = createApp(App);

app.component("vue3-star-ratings", vue3StarRatings);

app.mount('#app')
