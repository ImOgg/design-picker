<template>
  <div class="flex h-screen overflow-hidden bg-white text-gray-800 font-sans">
    <nav class="w-[250px] bg-[#1a1a1a] text-white flex flex-col p-4 shrink-0 h-full overflow-y-auto">
      <div class="text-2xl font-bold mb-8 text-white">Design Styles</div>
      <router-link to="/"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Home</router-link>
      <router-link to="/y2k"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Y2K</router-link>
      <router-link to="/bento"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Bento
        Box</router-link>
      <router-link to="/pixel"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Pixel
        Art</router-link>
      <router-link to="/bauhaus"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Bauhaus</router-link>
      <router-link to="/cyberpunk"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Cyberpunk</router-link>
      <router-link to="/retro"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Retro
        Futurism</router-link>
      <router-link to="/swiss"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Swiss
        Style</router-link>
      <router-link to="/ios"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">iOS
        Style</router-link>
      <router-link to="/material"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Material
        Design</router-link>
      <router-link to="/neumorphism"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Neumorphism</router-link>
      <router-link to="/brutalism"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Brutalism</router-link>
      <router-link to="/art-deco"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Art
        Deco</router-link>
      <router-link to="/nature"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Nature</router-link>
      <router-link to="/magazine"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Magazine</router-link>
      <router-link to="/hand-drawn"
        class="text-gray-400 no-underline py-3 px-4 rounded mb-2 transition-colors hover:bg-[#333] hover:text-white">Hand
        Drawn</router-link>
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
