<template>
  <div class="min-h-full bg-gray-100 p-8 text-center font-sans">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">Web Design Style Templates</h1>
    <p class="text-gray-600 mb-8">Select a style from the sidebar or click a card below to view the template.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <!-- Existing Styles -->
      <router-link to="/y2k"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#ff00ff] text-white font-mono">Y2K</router-link>
      <router-link to="/bento"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#f4f4f4] text-[#333] border-2 border-[#ddd]">Bento
        Box</router-link>
      <router-link to="/pixel"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-black text-[#0f0] font-mono border-4 border-[#0f0]">Pixel
        Art</router-link>
      <router-link to="/bauhaus"
        class="flex items-center justify-center h-[150px] rounded-none no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#d22630] text-white">Bauhaus</router-link>
      <router-link to="/cyberpunk"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#0b0b0b] text-[#0ff] border border-[#0ff]">Cyberpunk</router-link>
      <router-link to="/retro"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-gradient-to-tr from-[#ff00cc] to-[#3333ff] text-white">Retro
        Futurism</router-link>
      <router-link to="/swiss"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-white text-black border border-black items-start p-4">Swiss
        Style</router-link>
      <router-link to="/ios"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#f2f2f7] text-[#007aff] font-sans">iOS
        Style</router-link>
      <router-link to="/material"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#6200ee] text-white shadow-md">Material
        Design</router-link>
      <router-link to="/neumorphism"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#e0e5ec] text-[#4d4d4d] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">Neumorphism</router-link>
      <router-link to="/brutalism"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-black transition-transform hover:scale-105 bg-[#ff0000] text-black border-4 border-black font-mono uppercase">Brutalism</router-link>
      <router-link to="/art-deco"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-black text-[#d4af37] border-2 border-[#d4af37] font-serif">Art
        Deco</router-link>
      <router-link to="/nature"
        class="flex items-center justify-center h-[150px] rounded-tl-[20px] rounded-br-[20px] no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#e8f5e9] text-[#2e7d32]">Nature</router-link>
      <router-link to="/magazine"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-white text-black font-serif italic border-b-4 border-black">Magazine</router-link>
      <router-link to="/hand-drawn"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-white text-[#333] font-cursive border-2 border-dashed border-[#333] -rotate-2">Hand
        Drawn</router-link>

      <!-- New Styles -->
      <router-link to="/claymorphism"
        class="flex items-center justify-center h-[150px] rounded-[30px] no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#e0f7fa] text-[#006064] shadow-[8px_8px_16px_#b2ebf2,-8px_-8px_16px_#ffffff]">Claymorphism</router-link>
      <router-link to="/memphis"
        class="flex items-center justify-center h-[150px] rounded-none no-underline text-xl font-black transition-transform hover:scale-105 bg-[#fff] text-black border-4 border-black shadow-[8px_8px_0_#000]">Memphis</router-link>
      <router-link to="/terminal"
        class="flex items-center justify-center h-[150px] rounded-none no-underline text-xl font-bold transition-transform hover:scale-105 bg-black text-[#0f0] font-mono border border-[#0f0]">>_
        TERMINAL</router-link>
      <router-link to="/gothic"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#1a1a1a] text-[#d4af37] font-serif border border-[#333]">Gothic</router-link>
      <router-link to="/pop-art"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-black transition-transform hover:scale-105 bg-[#ffeb3b] text-black border-[6px] border-black shadow-[8px_8px_0_black]">POP
        ART!</router-link>
      <router-link to="/neubrutalism"
        class="flex items-center justify-center h-[150px] rounded-lg no-underline text-xl font-bold transition-transform hover:scale-105 bg-[#ff90e8] text-black border-[4px] border-black shadow-[6px_6px_0_black] font-sans">Neubrutalism</router-link>

    </div>
  </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
