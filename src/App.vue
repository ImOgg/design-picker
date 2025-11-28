<template>
  <div class="flex h-screen overflow-hidden bg-white text-gray-800 font-sans">
    <nav class="w-[250px] bg-[#1a1a1a] text-white flex flex-col p-4 shrink-0 h-full overflow-y-auto">
      <div class="text-2xl font-bold mb-8 text-white">Design Styles</div>
      <ul class="space-y-8">
        <li v-for="item in navigationItems" :key="item.title">
          <router-link :to="item.route"
            class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">
            <component :is="item.icon" class="h-4 w-4" />
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <main class="flex-1 h-full overflow-y-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
/* Global styles can remain if needed, or be moved to main.css */
.router-link-active {
  background: #333;
  color: #fff !important;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const navigationItems = [
  { title: '首頁', icon: '', route: '/' },
  { title: 'Y2K', icon: '', route: '/y2k' },
  { title: 'Bento Box', icon: '', route: '/bento' },
  { title: 'Pixel Art', icon: '', route: '/pixel' },
  { title: 'Bauhaus', icon: '', route: '/bauhaus' },
  { title: 'Cyberpunk', icon: '', route: '/cyberpunk' },
  { title: 'Retro Futurism', icon: '', route: '/retro' },
  { title: 'Swiss Style', icon: '', route: '/swiss' },
  { title: 'iOS', icon: '', route: '/ios' },
  { title: 'Material Design', icon: '', route: '/material' },
  { title: 'Neumorphism', icon: '', route: '/neumorphism' },
  { title: 'Brutalism', icon: '', route: '/brutalism' },
  { title: 'Art Deco', icon: '', route: '/art-deco' },
  { title: 'Nature', icon: '', route: '/nature' },
  { title: 'Magazine', icon: '', route: '/magazine' },
  { title: 'Hand Drawn', icon: '', route: '/hand-drawn' },
  { title: 'Claymorphism', icon: '', route: '/claymorphism' },
  { title: 'Memphis', icon: '', route: '/memphis' },
  { title: 'Terminal', icon: '', route: '/terminal' },
  { title: 'Gothic', icon: '', route: '/gothic' },
  { title: 'Pop Art', icon: '', route: '/pop-art' },
];

</script>