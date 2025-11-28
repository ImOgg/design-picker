<template>
    <div class="min-h-full bg-[#ffeb3b] p-8 font-sans text-black overflow-hidden relative">

        <!-- Halftone Pattern Background -->
        <div class="absolute inset-0 opacity-20 pointer-events-none"
            style="background-image: radial-gradient(circle, #000 2px, transparent 2.5px); background-size: 20px 20px;">
        </div>

        <div class="max-w-5xl mx-auto relative z-10">

            <!-- Header -->
            <header class="text-center mb-12 relative">
                <div class="absolute -top-10 -left-10 w-32 h-32 bg-[#00bcd4] rounded-full border-4 border-black z-0">
                </div>
                <div
                    class="absolute -bottom-5 -right-5 w-24 h-24 bg-[#ff4081] transform rotate-12 border-4 border-black z-0">
                </div>

                <h1 class="text-7xl md:text-9xl font-black uppercase italic relative z-10 text-white drop-shadow-[4px_4px_0_black] stroke-black"
                    style="-webkit-text-stroke: 3px black;">
                    POP ART!
                </h1>
                <div
                    class="inline-block bg-white border-4 border-black px-8 py-4 mt-4 transform -rotate-3 shadow-[8px_8px_0_black]">
                    <span class="text-2xl font-black uppercase">Boom! Pow! Wow!</span>
                </div>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <!-- Comic Panel -->
                <div class="bg-white border-[6px] border-black p-4 shadow-[16px_16px_0_black] relative">
                    <div
                        class="absolute -top-6 -right-6 bg-[#ff4081] text-white font-black text-xl px-4 py-2 border-4 border-black transform rotate-12">
                        NEW!
                    </div>
                    <div
                        class="border-4 border-black h-64 bg-[#00bcd4] relative overflow-hidden flex items-center justify-center group">
                        <div
                            class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30">
                        </div>
                        <div class="text-center transform group-hover:scale-110 transition-transform duration-300">
                            <p class="text-6xl font-black text-white drop-shadow-[4px_4px_0_black]"
                                style="-webkit-text-stroke: 2px black;">AMAZING</p>
                            <p class="text-4xl font-black text-[#ffeb3b] drop-shadow-[3px_3px_0_black]"
                                style="-webkit-text-stroke: 1.5px black;">STYLE</p>
                        </div>
                    </div>
                    <p class="mt-4 font-bold text-lg leading-tight">
                        Inspired by the 1950s and 60s. Bold lines, primary colors, and commercial imagery. It's art for
                        the masses!
                    </p>
                </div>

                <!-- Form Section -->
                <div class="bg-white border-[6px] border-black p-8 shadow-[16px_16px_0_#ff4081] transform rotate-2">
                    <h3 class="text-4xl font-black mb-8 uppercase text-center relative">
                        <span class="bg-[#ffeb3b] px-2">Sign Up</span>
                        <svg class="absolute -top-8 -right-4 w-16 h-16 text-black" viewBox="0 0 100 100"
                            fill="currentColor">
                            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                        </svg>
                    </h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-2">
                            <label
                                class="block font-black text-xl uppercase bg-black text-white inline-block px-2 transform -skew-x-12">Your
                                Name</label>
                            <input type="text"
                                class="w-full border-4 border-black p-3 font-bold text-xl focus:outline-none focus:bg-[#00bcd4] focus:text-white transition-colors shadow-[4px_4px_0_black]"
                                placeholder="Type here...">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label
                                class="block font-black text-xl uppercase bg-black text-white inline-block px-2 transform -skew-x-12">Favorite
                                Hero</label>
                            <div class="relative">
                                <select
                                    class="w-full border-4 border-black p-3 font-bold text-xl appearance-none focus:outline-none focus:bg-[#ff4081] focus:text-white transition-colors shadow-[4px_4px_0_black] cursor-pointer">
                                    <option>Superman</option>
                                    <option>Batman</option>
                                    <option>Wonder Woman</option>
                                </select>
                                <div
                                    class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-2xl font-black">
                                    ▼</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label
                                class="block font-black text-xl uppercase bg-black text-white inline-block px-2 transform -skew-x-12">Superpower</label>
                            <input list="powers"
                                class="w-full border-4 border-black p-3 font-bold text-xl focus:outline-none focus:bg-[#ffeb3b] transition-colors shadow-[4px_4px_0_black]"
                                placeholder="Choose power...">
                            <datalist id="powers">
                                <option value="Flight"></option>
                                <option value="Invisibility"></option>
                                <option value="Super Strength"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-4">
                            <label
                                class="block font-black text-xl uppercase bg-black text-white inline-block px-2 transform -skew-x-12">Team</label>
                            <div class="flex gap-4">
                                <label class="cursor-pointer group relative">
                                    <input type="radio" name="team" class="peer sr-only" checked>
                                    <div
                                        class="w-12 h-12 bg-[#00bcd4] border-4 border-black rounded-full peer-checked:bg-[#ff4081] transition-colors shadow-[4px_4px_0_black] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                                    </div>
                                    <span
                                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white pointer-events-none">A</span>
                                </label>
                                <label class="cursor-pointer group relative">
                                    <input type="radio" name="team" class="peer sr-only">
                                    <div
                                        class="w-12 h-12 bg-[#ffeb3b] border-4 border-black rounded-full peer-checked:bg-[#ff4081] transition-colors shadow-[4px_4px_0_black] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                                    </div>
                                    <span
                                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-black pointer-events-none">B</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between font-black text-xl uppercase">
                                <label class="bg-black text-white px-2 transform -skew-x-12">Action</label>
                                <span class="font-black">MAX!</span>
                            </div>
                            <input type="range"
                                class="w-full h-8 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] bg-white border-4 border-black appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#ff4081] [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[4px_4px_0_black] [&::-webkit-slider-thumb]:hover:scale-110">
                        </div>

                        <button
                            class="w-full py-4 bg-[#ffeb3b] text-black font-black text-3xl uppercase italic tracking-widest hover:bg-[#00bcd4] hover:text-white hover:shadow-[8px_8px_0_black] transition-all active:translate-y-1 active:shadow-none mt-6 border-4 border-black shadow-[4px_4px_0_black]">
                            KABOOM!
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
