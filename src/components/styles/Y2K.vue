<template>
  <div class="min-h-full bg-[#000033] p-8 font-mono text-[#00ff00] overflow-hidden relative">
    <!-- Matrix rain effect background (simulated) -->
    <div class="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"
      style="background-image: linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent); background-size: 50px 50px;">
    </div>

    <div class="relative z-10 max-w-4xl mx-auto border-4 border-[#c0c0c0] bg-[#c0c0c0] shadow-[10px_10px_0px_#000]">
      <!-- Window Header -->
      <div class="bg-gradient-to-r from-[#000080] to-[#1084d0] p-1 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png" class="w-4 h-4" alt="icon">
          <span class="text-white font-bold text-sm tracking-wider">Y2K_AESTHETIC.EXE</span>
        </div>
        <div class="flex gap-1">
          <button
            class="w-5 h-5 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black flex items-center justify-center text-black text-xs font-bold active:border-t-black active:border-l-black active:border-b-white active:border-r-white">_</button>
          <button
            class="w-5 h-5 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black flex items-center justify-center text-black text-xs font-bold active:border-t-black active:border-l-black active:border-b-white active:border-r-white">□</button>
          <button
            class="w-5 h-5 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black flex items-center justify-center text-black text-xs font-bold active:border-t-black active:border-l-black active:border-b-white active:border-r-white">X</button>
        </div>
      </div>

      <!-- Menu Bar -->
      <div class="bg-[#c0c0c0] p-1 border-b border-[#808080] flex gap-4 text-black text-sm">
        <span class="underline cursor-pointer hover:bg-[#000080] hover:text-white px-1">F</span>ile
        <span class="underline cursor-pointer hover:bg-[#000080] hover:text-white px-1">E</span>dit
        <span class="underline cursor-pointer hover:bg-[#000080] hover:text-white px-1">V</span>iew
        <span class="underline cursor-pointer hover:bg-[#000080] hover:text-white px-1">H</span>elp
      </div>

      <!-- Content Area -->
      <div class="bg-white p-6 text-black min-h-[500px]">
        <div
          class="marquee-container overflow-hidden whitespace-nowrap bg-black text-[#00ff00] p-2 mb-6 border-2 border-inset border-[#808080]">
          <div class="animate-marquee inline-block">
            WELCOME TO THE YEAR 2000 /// SYSTEM ONLINE /// CONNECTING TO THE WORLD WIDE WEB...
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Left Column -->
          <div class="space-y-6">
            <div class="border-2 border-[#808080] p-4 bg-[#c0c0c0]">
              <h2
                class="text-xl font-bold mb-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-transparent bg-clip-text drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                COOL STUFF
              </h2>
              <p class="mb-4 font-sans text-sm">
                Check out these rad elements!
              </p>
              <button
                class="w-full py-2 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold mb-2">
                CLICK ME!
              </button>
              <div class="h-4 bg-white border border-[#808080] relative">
                <div class="h-full bg-[#000080] w-[75%]"></div>
              </div>
              <div class="text-center text-xs mt-1">Downloading... 75%</div>
            </div>

            <div class="border-2 border-[#808080] p-4 bg-[#c0c0c0]">
              <h3 class="font-bold mb-2">Music Player</h3>
              <div class="bg-black text-[#00ff00] p-2 font-mono text-xs mb-2 border border-[#808080]">
                Now Playing: Sandstorm.mp3<br>
                02:14 / 03:45
              </div>
              <div class="flex justify-center gap-2">
                <button
                  class="w-8 h-8 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">◄◄</button>
                <button
                  class="w-8 h-8 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">►</button>
                <button
                  class="w-8 h-8 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">■</button>
                <button
                  class="w-8 h-8 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">►►</button>
              </div>
            </div>
          </div>

          <!-- Right Column: Form Elements -->
          <div class="border-2 border-[#808080] p-4 bg-[#c0c0c0]">
            <h3 class="font-bold mb-4 border-b-2 border-[#808080] pb-1">Guestbook Sign-up</h3>

            <div class="space-y-4">
              <!-- Text Input -->
              <div>
                <label class="block text-sm font-bold mb-1">Username:</label>
                <input type="text"
                  class="w-full bg-white border-2 border-[#808080] border-inset p-1 font-mono text-sm focus:outline-none focus:bg-[#ffffcc]"
                  placeholder="xX_CoolGuy_Xx">
              </div>

              <!-- Select -->
              <div>
                <label class="block text-sm font-bold mb-1">Mood:</label>
                <select class="w-full bg-white border-2 border-[#808080] border-inset p-1 font-mono text-sm">
                  <option>Happy :)</option>
                  <option>Sad :(</option>
                  <option>Hyper !!!</option>
                  <option>Bored -_-</option>
                </select>
              </div>

              <!-- Combobox (Datalist) -->
              <div>
                <label class="block text-sm font-bold mb-1">Favorite Band:</label>
                <input list="bands" class="w-full bg-white border-2 border-[#808080] border-inset p-1 font-mono text-sm"
                  placeholder="Type or select...">
                <datalist id="bands">
                  <option value="Backstreet Boys"></option>
                  <option value="NSYNC"></option>
                  <option value="Britney Spears"></option>
                  <option value="Linkin Park"></option>
                </datalist>
              </div>

              <!-- Radio Buttons -->
              <div>
                <label class="block text-sm font-bold mb-1">Gender:</label>
                <div class="flex gap-4">
                  <label class="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gender" class="accent-[#000080]"> Male
                  </label>
                  <label class="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gender" class="accent-[#000080]"> Female
                  </label>
                  <label class="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gender" class="accent-[#000080]"> Alien
                  </label>
                </div>
              </div>

              <!-- Slider -->
              <div>
                <label class="block text-sm font-bold mb-1">Coolness Level:</label>
                <input type="range" min="0" max="100"
                  class="w-full accent-[#000080] h-2 bg-white border border-[#808080] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#c0c0c0] [&::-webkit-slider-thumb]:border-t-2 [&::-webkit-slider-thumb]:border-l-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:border-b-2 [&::-webkit-slider-thumb]:border-r-2 [&::-webkit-slider-thumb]:border-black">
              </div>

              <div class="pt-2">
                <button
                  class="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm">
                  Sign Guestbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Status Bar -->
      <div class="bg-[#c0c0c0] border-t border-[#808080] p-1 text-xs flex justify-between">
        <span>Ready</span>
        <span>NUM</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 10s linear infinite;
}
</style>
