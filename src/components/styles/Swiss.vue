<template>
  <div class="min-h-full bg-white p-8 font-sans text-black">
    <div class="max-w-5xl mx-auto grid grid-cols-12 gap-8">

      <!-- Header -->
      <div class="col-span-12 border-t-4 border-black pt-4 mb-12">
        <h1 class="text-6xl md:text-8xl font-bold tracking-tight mb-4">Helvetica</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-bold uppercase tracking-wide">
          <div>Neue Haas Grotesk</div>
          <div>Max Miedinger</div>
          <div>1957</div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="col-span-12 md:col-span-8 space-y-12">
        <div class="grid grid-cols-2 gap-8">
          <div class="aspect-square bg-[#ff3300] flex items-end p-4">
            <span class="text-white font-bold text-4xl">Aa</span>
          </div>
          <div class="aspect-square bg-black flex items-end p-4">
            <span class="text-white font-bold text-4xl">Zz</span>
          </div>
        </div>

        <div class="border-t border-black pt-4">
          <h2 class="text-2xl font-bold mb-4">Objective Design</h2>
          <p class="text-xl leading-relaxed">
            The International Typographic Style, also known as the Swiss Style, is a graphic design style that emerged
            in Russia, the Netherlands, and Germany in the 1920s and was further developed by designers in Switzerland
            during the 1950s.
          </p>
        </div>
      </div>

      <!-- Sidebar / Forms -->
      <div class="col-span-12 md:col-span-4 space-y-12">
        <div class="bg-[#f0f0f0] p-8">
          <h3 class="font-bold text-xl mb-8 border-b border-black pb-2">Specifications</h3>

          <div class="space-y-8">

            <!-- Input -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-wider">Project Name</label>
              <input type="text"
                class="w-full bg-white border border-black p-3 font-bold focus:outline-none focus:ring-2 focus:ring-black rounded-none placeholder-gray-400"
                placeholder="Untitled-1">
            </div>

            <!-- Select -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-wider">Grid System</label>
              <div class="relative">
                <select
                  class="w-full bg-white border border-black p-3 appearance-none font-bold focus:outline-none focus:ring-2 focus:ring-black rounded-none cursor-pointer">
                  <option>12 Column</option>
                  <option>16 Column</option>
                  <option>Modular</option>
                </select>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L1 4H11L6 9Z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Combobox -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-wider">Typeface</label>
              <input list="fonts"
                class="w-full bg-white border border-black p-3 font-bold focus:outline-none focus:ring-2 focus:ring-black rounded-none"
                placeholder="Select Font...">
              <datalist id="fonts">
                <option value="Helvetica Neue"></option>
                <option value="Univers"></option>
                <option value="Akzidenz-Grotesk"></option>
                <option value="Futura"></option>
              </datalist>
            </div>

            <!-- Radio -->
            <div class="space-y-4">
              <label class="block text-xs font-bold uppercase tracking-wider">Alignment</label>
              <div class="space-y-2">
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-4 h-4 border border-black flex items-center justify-center">
                    <input type="radio" name="align" class="peer sr-only" checked>
                    <div class="w-2 h-2 bg-black hidden peer-checked:block"></div>
                  </div>
                  <span class="text-sm font-bold group-hover:underline">Flush Left</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-4 h-4 border border-black flex items-center justify-center">
                    <input type="radio" name="align" class="peer sr-only">
                    <div class="w-2 h-2 bg-black hidden peer-checked:block"></div>
                  </div>
                  <span class="text-sm font-bold group-hover:underline">Centered</span>
                </label>
              </div>
            </div>

            <!-- Slider -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-bold uppercase tracking-wider">
                <label>Opacity</label>
                <span>100%</span>
              </div>
              <input type="range"
                class="w-full h-1 bg-gray-300 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full">
            </div>

            <button
              class="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-[#ff3300] transition-colors">
              Process
            </button>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
