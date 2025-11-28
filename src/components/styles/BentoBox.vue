<template>
  <div class="min-h-full bg-[#f0f2f5] p-8 font-sans text-[#333]">
    <div class="max-w-6xl mx-auto">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-[#1a1a1a]">Bento Grid</h1>
        <p class="text-[#666]">Modular, clean, and organized.</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        <!-- Large Card -->
        <div
          class="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold mb-2">Productivity Boost</h2>
            <p class="text-gray-500">Optimize your workflow with our new tools. Everything you need in one place.</p>
          </div>
          <div class="mt-4 h-32 bg-gray-50 rounded-xl border border-gray-100"></div>
        </div>

        <!-- Medium Card -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-lg mb-1">Daily Goals</h3>
          <div class="flex items-end gap-2 mt-2">
            <span class="text-4xl font-bold text-green-500">85%</span>
            <span class="text-gray-400 text-sm mb-1">completed</span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-2 mt-4">
            <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
          </div>
        </div>

        <!-- Medium Card -->
        <div
          class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <h3 class="font-bold text-lg opacity-90">Pro Plan</h3>
          <p class="text-sm opacity-75 mt-1">Upgrade now</p>
          <button
            class="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium transition-colors">
            View Details
          </button>
        </div>

        <!-- Form Elements Card (Span 2 columns) -->
        <div class="md:col-span-2 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-lg mb-4">Preferences</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Input -->
            <div class="space-y-1">
              <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Profile Name</label>
              <input type="text"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                placeholder="John Doe">
            </div>

            <!-- Select -->
            <div class="space-y-1">
              <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Region</label>
              <div class="relative">
                <select
                  class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia Pacific</option>
                </select>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Combobox -->
            <div class="space-y-1">
              <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Timezone</label>
              <input list="timezones"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                placeholder="Select timezone...">
              <datalist id="timezones">
                <option value="UTC-08:00 Pacific Time"></option>
                <option value="UTC-05:00 Eastern Time"></option>
                <option value="UTC+00:00 GMT"></option>
                <option value="UTC+09:00 Japan Standard Time"></option>
              </datalist>
            </div>

            <!-- Radio -->
            <div class="space-y-2">
              <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Theme</label>
              <div class="flex gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="theme" class="peer sr-only" checked>
                  <div
                    class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-all">
                    Light</div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="theme" class="peer sr-only">
                  <div
                    class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-all">
                    Dark</div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="theme" class="peer sr-only">
                  <div
                    class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-all">
                    Auto</div>
                </label>
              </div>
            </div>

            <!-- Slider -->
            <div class="col-span-1 sm:col-span-2 space-y-1">
              <div class="flex justify-between">
                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Volume</label>
                <span class="text-xs font-medium text-gray-900">75%</span>
              </div>
              <input type="range"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900">
            </div>

          </div>
        </div>

        <!-- Small Card -->
        <div
          class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
          <div class="text-center">
            <div class="text-3xl mb-1">👋</div>
            <div class="font-bold text-gray-900">Hello</div>
          </div>
        </div>

        <!-- Small Card -->
        <div
          class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
          <div class="text-center">
            <div class="text-3xl mb-1">🚀</div>
            <div class="font-bold text-gray-900">Launch</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* No custom CSS needed! Tailwind handles it all. */
</style>
