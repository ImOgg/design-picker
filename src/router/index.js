import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/styles/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/y2k', component: () => import('../components/styles/Y2K.vue') },
  { path: '/bento', component: () => import('../components/styles/BentoBox.vue') },
  { path: '/pixel', component: () => import('../components/styles/PixelArt.vue') },
  { path: '/bauhaus', component: () => import('../components/styles/Bauhaus.vue') },
  { path: '/cyberpunk', component: () => import('../components/styles/Cyberpunk.vue') },
  { path: '/retro', component: () => import('../components/styles/RetroFuturism.vue') },
  { path: '/swiss', component: () => import('../components/styles/Swiss.vue') },
  { path: '/ios', component: () => import('../components/styles/IOS.vue') },
  { path: '/material', component: () => import('../components/styles/MaterialDesign.vue') },
  { path: '/neumorphism', component: () => import('../components/styles/Neumorphism.vue') },
  { path: '/brutalism', component: () => import('../components/styles/Brutalism.vue') },
  { path: '/art-deco', component: () => import('../components/styles/ArtDeco.vue') },
  { path: '/nature', component: () => import('../components/styles/Nature.vue') },
  { path: '/magazine', component: () => import('../components/styles/Magazine.vue') },
  { path: '/hand-drawn', component: () => import('../components/styles/HandDrawn.vue') },
  { path: '/claymorphism', component: () => import('../components/styles/Claymorphism.vue') },
  { path: '/memphis', component: () => import('../components/styles/Memphis.vue') },
  { path: '/terminal', component: () => import('../components/styles/Terminal.vue') },
  { path: '/gothic', component: () => import('../components/styles/Gothic.vue') },
  { path: '/pop-art', component: () => import('../components/styles/PopArt.vue') },
  { path: '/neubrutalism', component: () => import('../components/styles/Neubrutalism.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
