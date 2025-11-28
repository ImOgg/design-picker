<template>
    <div class="min-h-full bg-[#eee] p-8 font-sans flex justify-center items-center">
        <div class="w-[360px] h-[740px] bg-[#fafafa] shadow-2xl relative flex flex-col overflow-hidden">

            <!-- App Bar -->
            <header class="h-14 bg-[#6200ee] text-white flex items-center px-4 shadow-md z-10 shrink-0">
                <div class="mr-8 text-2xl cursor-pointer">☰</div>
                <div class="text-xl font-medium grow">Material App</div>
                <div class="flex gap-6">
                    <span class="text-xl cursor-pointer">🔍</span>
                    <span class="text-xl cursor-pointer">⋮</span>
                </div>
            </header>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4 pb-20">

                <!-- Card -->
                <div class="bg-white rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div class="h-36 bg-[#bb86fc]"></div>
                    <div class="p-4">
                        <h2 class="text-xl font-medium text-gray-900">Material Design</h2>
                        <p class="text-sm text-gray-600 mt-1">Cards contain content and actions about a single subject.
                        </p>
                    </div>
                    <div class="px-2 pb-2 flex gap-2">
                        <button
                            class="text-[#6200ee] font-medium text-sm px-4 py-2 rounded hover:bg-[#6200ee]/10 uppercase transition-colors">Action
                            1</button>
                        <button
                            class="text-[#6200ee] font-medium text-sm px-4 py-2 rounded hover:bg-[#6200ee]/10 uppercase transition-colors">Action
                            2</button>
                    </div>
                </div>

                <!-- Form Elements Card -->
                <div class="bg-white rounded shadow-sm p-4 space-y-6">
                    <h3 class="text-gray-600 font-medium text-sm uppercase tracking-wide">Input Fields</h3>

                    <!-- Input (Outlined) -->
                    <div class="relative group">
                        <input type="text"
                            class="peer w-full h-14 border border-gray-400 rounded px-4 pt-4 text-gray-900 focus:outline-none focus:border-[#6200ee] focus:border-2 transition-colors placeholder-transparent"
                            placeholder="Username">
                        <label
                            class="absolute left-3 top-4 text-gray-600 text-base transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#6200ee] peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none">Username</label>
                    </div>

                    <!-- Select (Filled) -->
                    <div
                        class="relative bg-[#f5f5f5] rounded-t border-b border-gray-400 hover:bg-[#ececec] transition-colors">
                        <label class="absolute left-4 top-2 text-xs text-gray-600">Category</label>
                        <select
                            class="w-full h-14 pt-4 px-4 bg-transparent border-none focus:outline-none focus:border-b-2 focus:border-[#6200ee] appearance-none cursor-pointer text-gray-900">
                            <option>Personal</option>
                            <option>Work</option>
                            <option>Other</option>
                        </select>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">▼</div>
                        <div
                            class="absolute bottom-0 left-0 w-full h-[2px] bg-[#6200ee] scale-x-0 transition-transform origin-center peer-focus:scale-x-100">
                        </div>
                    </div>

                    <!-- Combobox -->
                    <div class="relative group">
                        <input list="contacts"
                            class="peer w-full h-14 border border-gray-400 rounded px-4 pt-4 text-gray-900 focus:outline-none focus:border-[#6200ee] focus:border-2 transition-colors placeholder-transparent"
                            placeholder="Search Contact">
                        <label
                            class="absolute left-3 top-4 text-gray-600 text-base transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#6200ee] peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none">Search
                            Contact</label>
                        <datalist id="contacts">
                            <option value="Alice"></option>
                            <option value="Bob"></option>
                            <option value="Charlie"></option>
                        </datalist>
                    </div>

                    <!-- Radio -->
                    <div>
                        <label class="text-sm text-gray-600 block mb-2">Priority</label>
                        <div class="flex gap-6">
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <div
                                    class="relative w-5 h-5 rounded-full border-2 border-gray-600 group-hover:border-[#6200ee] flex items-center justify-center transition-colors">
                                    <input type="radio" name="priority" class="peer sr-only" checked>
                                    <div
                                        class="w-2.5 h-2.5 rounded-full bg-[#6200ee] scale-0 peer-checked:scale-100 transition-transform">
                                    </div>
                                    <div
                                        class="absolute inset-0 rounded-full bg-[#6200ee]/10 scale-0 group-hover:scale-[2.5] transition-transform -z-10">
                                    </div>
                                </div>
                                <span class="text-gray-900">High</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <div
                                    class="relative w-5 h-5 rounded-full border-2 border-gray-600 group-hover:border-[#6200ee] flex items-center justify-center transition-colors">
                                    <input type="radio" name="priority" class="peer sr-only">
                                    <div
                                        class="w-2.5 h-2.5 rounded-full bg-[#6200ee] scale-0 peer-checked:scale-100 transition-transform">
                                    </div>
                                    <div
                                        class="absolute inset-0 rounded-full bg-[#6200ee]/10 scale-0 group-hover:scale-[2.5] transition-transform -z-10">
                                    </div>
                                </div>
                                <span class="text-gray-900">Low</span>
                            </label>
                        </div>
                    </div>

                    <!-- Slider -->
                    <div>
                        <label class="text-sm text-gray-600 block mb-2">Brightness</label>
                        <input type="range"
                            class="w-full h-1 bg-[#6200ee]/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#6200ee] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:hover:scale-150 [&::-webkit-slider-thumb]:transition-transform">
                    </div>

                </div>

                <!-- Chips -->
                <div class="flex gap-2 flex-wrap">
                    <div
                        class="h-8 rounded-full bg-[#e0e0e0] flex items-center px-3 text-sm text-gray-800 cursor-pointer hover:bg-[#d0d0d0] transition-colors">
                        Chip 1</div>
                    <div
                        class="h-8 rounded-full bg-[#e8def8] flex items-center px-3 text-sm text-[#1d192b] cursor-pointer hover:bg-[#d8cef8] transition-colors font-medium">
                        <span class="mr-1">✓</span> Chip 2
                    </div>
                    <div
                        class="h-8 rounded-full bg-[#e0e0e0] flex items-center px-3 text-sm text-gray-800 cursor-pointer hover:bg-[#d0d0d0] transition-colors">
                        Chip 3</div>
                </div>

            </div>

            <!-- FAB -->
            <button
                class="absolute bottom-6 right-6 w-14 h-14 bg-[#03dac6] text-black rounded-full shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] flex items-center justify-center text-2xl hover:shadow-[0_7px_8px_-4px_rgba(0,0,0,0.2),0_12px_17px_2px_rgba(0,0,0,0.14),0_5px_22px_4px_rgba(0,0,0,0.12)] active:shadow-sm transition-shadow z-20">
                +
            </button>

        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
