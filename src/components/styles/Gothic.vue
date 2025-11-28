<template>
  <div class="min-h-full bg-[#050505] p-8 font-serif text-[#c0c0c0] flex justify-center items-center relative overflow-hidden">
    
    <!-- Texture Overlay -->
    <div class="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay" style="background-image: url('https://www.transparenttextures.com/patterns/black-linen.png');"></div>
    
    <!-- Crimson Fog Effect -->
    <div class="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#300000]/40 to-transparent pointer-events-none"></div>

    <div class="max-w-4xl w-full relative z-10 border-[1px] border-[#4a4a4a] p-1">
      <div class="border-[1px] border-[#4a4a4a] p-1">
        <div class="border-[2px] border-[#800000] p-8 bg-[#0a0a0a]/95 shadow-[0_0_60px_rgba(128,0,0,0.2)]">
          
          <!-- Header -->
          <header class="text-center mb-12">
            <div class="text-xs tracking-[0.5em] uppercase text-[#666] mb-2 font-sans">Est. MDCCCLXXXVIII</div>
            <h1 class="text-5xl md:text-7xl font-bold uppercase tracking-widest text-[#e0e0e0] drop-shadow-[0_4px_8px_rgba(0,0,0,1)] font-serif border-b border-[#800000] inline-block pb-4">
              Crimson Peak
            </h1>
            <div class="flex items-center justify-center gap-4 mt-4 opacity-80 text-[#800000]">
              <span class="text-3xl">†</span>
            </div>
          </header>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <!-- Text Content -->
            <div class="relative">
              <div class="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#800000] to-transparent"></div>
              <p class="text-lg leading-loose text-[#a0a0a0] first-letter:text-5xl first-letter:font-bold first-letter:text-[#800000] first-letter:mr-2 first-letter:float-left font-serif">
                The moon hangs low over the spires, casting long, jagged shadows across the cobblestones. A chill wind whispers through the crypts, carrying the scent of iron and old velvet. Welcome to the eternal night.
              </p>
              <div class="mt-8 text-center italic text-[#800000] font-bold">
                "Blood is the life."
              </div>
            </div>

            <!-- Form Section -->
            <div class="space-y-8">
              <h3 class="text-xl uppercase tracking-[0.2em] text-center text-[#c0c0c0] border-b border-[#4a4a4a] pb-4 font-sans">Dark Pact</h3>

              <!-- Input -->
              <div class="space-y-2 group">
                <label class="block text-xs uppercase tracking-[0.2em] text-[#666] group-hover:text-[#800000] transition-colors font-sans">True Name</label>
                <input type="text" class="w-full bg-transparent border-b border-[#4a4a4a] py-2 text-[#e0e0e0] placeholder-[#4a4a4a] focus:outline-none focus:border-[#800000] transition-all font-serif italic" placeholder="Sign in blood...">
              </div>

              <!-- Select -->
              <div class="space-y-2 group">
                <label class="block text-xs uppercase tracking-[0.2em] text-[#666] group-hover:text-[#800000] transition-colors font-sans">Bloodline</label>
                <div class="relative">
                  <select class="w-full bg-[#0f0f0f] border border-[#4a4a4a] py-2 px-4 text-[#c0c0c0] appearance-none focus:outline-none focus:border-[#800000] cursor-pointer font-serif">
                    <option>Vampire</option>
                    <option>Lycan</option>
                    <option>Wraith</option>
                  </select>
                  <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#800000] text-xs">▼</div>
                </div>
              </div>

              <!-- Combobox -->
              <div class="space-y-2 group">
                <label class="block text-xs uppercase tracking-[0.2em] text-[#666] group-hover:text-[#800000] transition-colors font-sans">Relic</label>
                <input list="relics" class="w-full bg-transparent border-b border-[#4a4a4a] py-2 text-[#e0e0e0] placeholder-[#4a4a4a] focus:outline-none focus:border-[#800000] transition-all font-serif italic" placeholder="Choose your burden...">
                <datalist id="relics">
                  <option value="Silver Bullet"></option>
                  <option value="Wooden Stake"></option>
                  <option value="Unholy Grail"></option>
                </datalist>
              </div>

              <!-- Radio -->
              <div class="space-y-4">
                <label class="block text-xs uppercase tracking-[0.2em] text-[#666] font-sans">Allegiance</label>
                <div class="flex flex-col gap-3">
                  <label class="flex items-center gap-4 cursor-pointer group">
                    <div class="w-4 h-4 border border-[#666] rotate-45 flex items-center justify-center transition-all group-hover:border-[#800000]">
                      <input type="radio" name="allegiance" class="peer sr-only" checked>
                      <div class="w-2 h-2 bg-[#800000] hidden peer-checked:block shadow-[0_0_8px_#800000]"></div>
                    </div>
                    <span class="text-sm uppercase tracking-wider text-[#888] group-hover:text-[#e0e0e0] transition-colors font-serif">The Night Watch</span>
                  </label>
                  <label class="flex items-center gap-4 cursor-pointer group">
                    <div class="w-4 h-4 border border-[#666] rotate-45 flex items-center justify-center transition-all group-hover:border-[#800000]">
                      <input type="radio" name="allegiance" class="peer sr-only">
                      <div class="w-2 h-2 bg-[#800000] hidden peer-checked:block shadow-[0_0_8px_#800000]"></div>
                    </div>
                    <span class="text-sm uppercase tracking-wider text-[#888] group-hover:text-[#e0e0e0] transition-colors font-serif">The Ancients</span>
                  </label>
                </div>
              </div>

              <!-- Slider -->
              <div class="space-y-2">
                <div class="flex justify-between text-xs uppercase tracking-[0.2em] text-[#666] font-sans">
                  <label>Darkness Level</label>
                  <span>Abyssal</span>
                </div>
                <input type="range" class="w-full h-[2px] bg-[#333] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#800000] [&::-webkit-slider-thumb]:rotate-45 [&::-webkit-slider-thumb]:shadow-[0_0_8px_#800000] hover:[&::-webkit-slider-thumb]:scale-150 transition-all">
              </div>

              <button class="w-full border border-[#800000] py-3 uppercase tracking-[0.3em] text-[#800000] hover:bg-[#800000] hover:text-white transition-all duration-700 font-bold mt-4 relative overflow-hidden group font-sans">
                <span class="relative z-10">Sacrifice</span>
                <div class="absolute inset-0 bg-[#500000] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
