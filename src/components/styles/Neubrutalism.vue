<template>
    <div class="min-h-full bg-[#fff0f5] p-8 font-sans text-black">
        <div class="max-w-5xl mx-auto">

            <!-- Header -->
            <header class="mb-16">
                <div
                    class="bg-[#ff90e8] border-[4px] border-black p-8 shadow-[12px_12px_0_black] inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <h1 class="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Neubrutalism</h1>
                </div>
                <p
                    class="mt-8 text-2xl font-bold bg-white border-[3px] border-black p-4 inline-block shadow-[8px_8px_0_black]">
                    Bold. High Contrast. Unapologetic.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Info Card -->
                <div
                    class="bg-[#23a6d5] border-[4px] border-black p-8 shadow-[12px_12px_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                    <h2 class="text-4xl font-bold mb-6 bg-black text-white inline-block px-2">The Concept</h2>
                    <p
                        class="text-lg font-medium leading-relaxed bg-white border-[3px] border-black p-4 shadow-[6px_6px_0_black]">
                        Neubrutalism (or Neo-Brutalism) merges the raw aesthetic of traditional brutalism with modern
                        web design standards. It features high contrast, thick borders, distinct shadows, and often
                        vibrant or pastel colors. It's anti-design, but functional.
                    </p>
                    <div class="mt-8 flex gap-4">
                        <button
                            class="bg-[#ffeb3b] border-[3px] border-black px-6 py-3 font-bold shadow-[6px_6px_0_black] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                            Learn More
                        </button>
                        <button
                            class="bg-white border-[3px] border-black px-6 py-3 font-bold shadow-[6px_6px_0_black] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                            Ignore
                        </button>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="bg-[#a3e635] border-[4px] border-black p-8 shadow-[12px_12px_0_black]">
                    <h3 class="text-3xl font-bold mb-8 uppercase border-b-[4px] border-black pb-2">User Input</h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-2">
                            <label class="block font-bold text-xl uppercase">Username</label>
                            <input type="text"
                                class="w-full bg-white border-[3px] border-black p-4 font-bold text-lg focus:outline-none focus:shadow-[8px_8px_0_black] focus:-translate-y-1 transition-all placeholder-gray-500"
                                placeholder="Enter name">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label class="block font-bold text-xl uppercase">Role</label>
                            <div class="relative">
                                <select
                                    class="w-full bg-white border-[3px] border-black p-4 font-bold text-lg appearance-none focus:outline-none focus:shadow-[8px_8px_0_black] focus:-translate-y-1 transition-all cursor-pointer">
                                    <option>Designer</option>
                                    <option>Developer</option>
                                    <option>Manager</option>
                                </select>
                                <div
                                    class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-2xl font-bold">
                                    ▼</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="block font-bold text-xl uppercase">Skill</label>
                            <input list="skills"
                                class="w-full bg-white border-[3px] border-black p-4 font-bold text-lg focus:outline-none focus:shadow-[8px_8px_0_black] focus:-translate-y-1 transition-all placeholder-gray-500"
                                placeholder="Select skill...">
                            <datalist id="skills">
                                <option value="Figma"></option>
                                <option value="Vue.js"></option>
                                <option value="Tailwind"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-4">
                            <label class="block font-bold text-xl uppercase">Preference</label>
                            <div class="flex gap-4">
                                <label
                                    class="cursor-pointer group flex items-center gap-3 bg-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_black] hover:-translate-y-1 hover:shadow-[6px_6px_0_black] transition-all">
                                    <div class="w-6 h-6 border-[3px] border-black flex items-center justify-center">
                                        <input type="radio" name="pref" class="peer sr-only" checked>
                                        <div class="w-3 h-3 bg-black hidden peer-checked:block"></div>
                                    </div>
                                    <span class="font-bold">Dark Mode</span>
                                </label>
                                <label
                                    class="cursor-pointer group flex items-center gap-3 bg-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_black] hover:-translate-y-1 hover:shadow-[6px_6px_0_black] transition-all">
                                    <div class="w-6 h-6 border-[3px] border-black flex items-center justify-center">
                                        <input type="radio" name="pref" class="peer sr-only">
                                        <div class="w-3 h-3 bg-black hidden peer-checked:block"></div>
                                    </div>
                                    <span class="font-bold">Light Mode</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between font-bold text-xl uppercase">
                                <label>Intensity</label>
                                <span class="bg-black text-white px-2">High</span>
                            </div>
                            <input type="range"
                                class="w-full h-8 bg-white border-[3px] border-black appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#ff90e8] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[4px_4px_0_black] [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform">
                        </div>

                        <button
                            class="w-full py-4 bg-black text-white font-bold text-2xl uppercase tracking-widest hover:bg-[#ff90e8] hover:text-black hover:shadow-[8px_8px_0_black] transition-all active:translate-y-1 active:shadow-none mt-6 border-[4px] border-black">
                            Submit Data
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
