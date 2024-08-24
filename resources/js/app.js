import './bootstrap';
import 'bootstrap';

import { createApp } from 'vue'
import Counter from './components/Counter.vue'
import TitleMsg from './components/Title.vue'
import BlogTypeDpMenu from './components/BlogTypeDropdown.vue'



const app = createApp()

app.component('counter', Counter),
app.component('title_msg',TitleMsg),
app.component('blogtypedp',BlogTypeDpMenu),

app.mount('#app')

