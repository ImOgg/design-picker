<template>
  <div class="min-h-full bg-[#2c2c2c] p-8 font-mono text-white image-pixelated">
    <div class="max-w-4xl mx-auto border-4 border-white p-1 bg-black shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
      <div class="border-2 border-white p-6 min-h-[600px] relative">

        <!-- Header -->
        <header class="text-center mb-12 border-b-4 border-white pb-4">
          <h1 class="text-4xl md:text-6xl mb-2 text-[#00ff00] drop-shadow-[4px_4px_0_#003300]">PIXEL_WORLD</h1>
          <p class="text-[#ff00ff] text-xl tracking-widest">INSERT COIN TO START</p>
        </header>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Character Stats -->
          <div class="border-4 border-white p-4 bg-[#000033]">
            <h2 class="text-2xl text-[#ffff00] mb-4 border-b-2 border-white inline-block">PLAYER_STATS</h2>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-[#ff0000] border-4 border-white"></div>
                <div>
                  <div class="text-xl">HERO_01</div>
                  <div class="text-[#00ff00]">LVL: 99</div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span>HP</span>
                  <span>100/100</span>
                </div>
                <div class="h-4 border-2 border-white bg-[#330000]">
                  <div class="h-full bg-[#ff0000] w-full"></div>
                </div>
                <div class="flex justify-between text-sm">
                  <span>MP</span>
                  <span>45/50</span>
                </div>
                <div class="h-4 border-2 border-white bg-[#000033]">
                  <div class="h-full bg-[#0000ff] w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Settings / Forms -->
          <div class="border-4 border-white p-4 bg-[#330033]">
            <h2 class="text-2xl text-[#00ffff] mb-4 border-b-2 border-white inline-block">CONFIG</h2>

            <div class="space-y-6">
              <!-- Input -->
              <div class="space-y-1">
                <label class="block text-[#ff00ff] text-sm">> ENTER_NAME:</label>
                <input type="text"
                  class="w-full bg-black border-2 border-white p-2 text-[#00ff00] focus:outline-none focus:bg-[#001100] placeholder-gray-700 font-mono"
                  placeholder="PLAYER_1">
              </div>

              <!-- Select -->
              <div class="space-y-1">
                <label class="block text-[#ff00ff] text-sm">> DIFFICULTY:</label>
                <div class="relative">
                  <select
                    class="w-full bg-black border-2 border-white p-2 text-[#00ff00] focus:outline-none appearance-none font-mono cursor-pointer hover:bg-[#111]">
                    <option>EASY</option>
                    <option>NORMAL</option>
                    <option>HARDCORE</option>
                    <option>NIGHTMARE</option>
                  </select>
                  <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">▼</div>
                </div>
              </div>

              <!-- Combobox -->
              <div class="space-y-1">
                <label class="block text-[#ff00ff] text-sm">> SELECT_CLASS:</label>
                <input list="classes"
                  class="w-full bg-black border-2 border-white p-2 text-[#00ff00] focus:outline-none focus:bg-[#001100] font-mono"
                  placeholder="CHOOSE...">
                <datalist id="classes">
                  <option value="WARRIOR"></option>
                  <option value="MAGE"></option>
                  <option value="ROGUE"></option>
                  <option value="PALADIN"></option>
                </datalist>
              </div>

              <!-- Radio -->
              <div class="space-y-2">
                <label class="block text-[#ff00ff] text-sm">> GRAPHICS:</label>
                <div class="flex flex-col gap-2">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <div class="relative w-6 h-6 border-2 border-white bg-black flex items-center justify-center">
                      <input type="radio" name="gfx"
                        class="peer appearance-none w-full h-full absolute top-0 left-0 cursor-pointer" checked>
                      <div class="w-3 h-3 bg-[#00ff00] hidden peer-checked:block"></div>
                    </div>
                    <span class="group-hover:text-[#00ff00]">8-BIT</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <div class="relative w-6 h-6 border-2 border-white bg-black flex items-center justify-center">
                      <input type="radio" name="gfx"
                        class="peer appearance-none w-full h-full absolute top-0 left-0 cursor-pointer">
                      <div class="w-3 h-3 bg-[#00ff00] hidden peer-checked:block"></div>
                    </div>
                    <span class="group-hover:text-[#00ff00]">16-BIT</span>
                  </label>
                </div>
              </div>

              <!-- Slider -->
              <div class="space-y-2">
                <div class="flex justify-between text-[#ff00ff] text-sm">
                  <label>> SFX_VOL:</label>
                  <span>80%</span>
                </div>
                <input type="range"
                  class="w-full h-4 bg-black border-2 border-white appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#00ff00] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white">
              </div>

            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="mt-8 flex justify-center gap-4">
          <button
            class="px-8 py-4 bg-[#0000ff] border-4 border-white text-white text-xl hover:bg-[#0000cc] active:translate-y-1 transition-transform shadow-[4px_4px_0_#000066]">START</button>
          <button
            class="px-8 py-4 bg-[#ff0000] border-4 border-white text-white text-xl hover:bg-[#cc0000] active:translate-y-1 transition-transform shadow-[4px_4px_0_#660000]">QUIT</button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.image-pixelated {
  image-rendering: pixelated;
}
</style>
