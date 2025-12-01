<template>
  <div class="flex h-screen overflow-hidden bg-white text-gray-800 font-sans relative">

    <!-- Mobile Overlay -->
    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black/50 z-40 md:hidden" @click="isSidebarOpen = false"></div>

    <!-- Sidebar -->
    <nav
      class="fixed md:relative z-50 bg-[#1a1a1a] text-white flex flex-col p-4 shrink-0 h-full overflow-y-auto transition-all duration-300 ease-in-out"
      :class="[
        isSidebarOpen ? 'translate-x-0 w-[250px]' : '-translate-x-full md:translate-x-0 md:w-0 md:p-0 md:overflow-hidden'
      ]">
      <div class="flex justify-between items-center mb-8">
        <div class="text-2xl font-bold text-white whitespace-nowrap">Design Styles</div>
        <!-- Mobile Close Button -->
        <button @click="isSidebarOpen = false" class="md:hidden text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="space-y-8 whitespace-nowrap">
        <li v-for="item in navigationItems" :key="item.route">
          <router-link :to="item.route"
            class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white block">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 h-full overflow-y-auto relative w-full">
      <!-- Toggle Button -->
      <button @click="toggleSidebar"
        class="absolute top-4 left-4 z-30 p-2 bg-white/80 backdrop-blur rounded-full shadow-md hover:bg-white transition-colors text-gray-800"
        :class="{ 'opacity-0 pointer-events-none': isSidebarOpen && !isMobile, 'opacity-100': !isSidebarOpen || isMobile }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Desktop Open Button (when sidebar is closed) -->
      <button v-if="!isSidebarOpen && !isMobile" @click="isSidebarOpen = true"
        class="absolute top-4 left-4 z-30 p-2 bg-white/80 backdrop-blur rounded-full shadow-md hover:bg-white transition-colors text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <router-view></router-view>
    </main>

    <!-- Floating Toggle Button for Desktop (Visible when sidebar is open to close it) -->
    <div v-if="isSidebarOpen" class="fixed bottom-4 left-[200px] z-50 md:block hidden">
      <button @click="isSidebarOpen = false" class="p-2 bg-[#333] text-white rounded-full hover:bg-[#444] shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>

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
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const isSidebarOpen = ref(true);
const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
  if (isMobile.value) {
    isSidebarOpen.value = false;
  } else {
    isSidebarOpen.value = true;
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Close sidebar on route change for mobile
router.afterEach(() => {
  if (isMobile.value) {
    isSidebarOpen.value = false;
  }
});

const navigationItems = [
  { title: '首頁', icon: '', route: '/' },
  { title: '關於', icon: '', route: '/about' },
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
  { title: 'Neubrutalism', icon: '', route: '/neubrutalism' },
  { title: 'Glassmorphism', icon: '', route: '/glassmorphism' },
  { title: 'Paper Cut', icon: '', route: '/paper-cut' }
];

</script>