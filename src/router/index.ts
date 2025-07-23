import { createRouter, createWebHistory } from 'vue-router'
import SearchResult from '../components/SearchResult.vue' // 假設你的檔案放在 views 資料夾
import Home from "../components/Home.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/search',
        name: 'SearchResult',
        component: SearchResult,
    },
    // 其他路由...
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router