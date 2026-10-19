import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JogosView from '@/views/JogosView.vue'
import LancamentoView from '@/views/LancamentoView.vue'
import PromocoesView from '@/views/PromocoesView.vue'
import ContatoView from '@/views/ContatoView.vue'
import AcessoriosView from '@/views/AcessoriosView.vue'
const routes = [
    {
    path: '/',
    name: 'Home',
    component: HomeView
    },
    {
    path: '/jogos',
    name: 'JogosView',
    component: JogosView
    },
    {
    path: '/lancamento',
    name: 'LancamentoView',
    component: LancamentoView
    },
    {
    path: '/promocoes',
    name: 'PromocoesView',
    component: PromocoesView
    },
    {
    path: '/acessorios',
    name: 'AcessoriosView',
    component: AcessoriosView
    },
    {
    path: '/contato',
    name: 'ContatoView',
    component: ContatoView
    }
    ]
const router = createRouter({
history: createWebHistory(),
routes
})
export default router