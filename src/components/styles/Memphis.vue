<template>
    <div class="min-h-full bg-[#fff5f5] p-8 font-sans text-black relative overflow-hidden">

        <!-- Background Patterns -->
        <div
            class="absolute top-10 left-10 w-20 h-20 bg-[#ffeb3b] rounded-full mix-blend-multiply opacity-80 animate-bounce">
        </div>
        <div
            class="absolute bottom-20 right-20 w-32 h-32 bg-[#00bcd4] transform rotate-45 mix-blend-multiply opacity-80">
        </div>
        <div
            class="absolute top-1/2 left-1/4 w-4 h-4 bg-black rounded-full shadow-[20px_0_0_black,40px_0_0_black,60px_0_0_black]">
        </div>
        <div class="absolute bottom-1/3 right-1/3 w-24 h-6 bg-[#ff4081] transform -rotate-12"></div>

        <!-- Squiggles (SVG) -->
        <svg class="absolute top-20 right-10 w-32 h-32 text-[#3f51b5] animate-pulse" viewBox="0 0 100 100" fill="none"
            stroke="currentColor" stroke-width="5">
            <path d="M10 50 Q 25 25, 40 50 T 70 50 T 100 50" />
        </svg>

        <div class="max-w-4xl mx-auto relative z-10">

            <!-- Header -->
            <header class="text-center mb-16">
                <h1
                    class="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-[#ffeb3b] to-[#00bcd4] drop-shadow-[4px_4px_0_black]">
                    Memphis
                </h1>
                <div
                    class="inline-block bg-black text-white px-6 py-2 text-xl font-bold transform -rotate-3 shadow-[8px_8px_0_#ff4081]">
                    Bold & Chaotic
                </div>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Content Box -->
                <div
                    class="bg-white border-4 border-black p-8 shadow-[12px_12px_0_#00bcd4] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <h2 class="text-4xl font-black mb-6 uppercase">Less is Bore</h2>
                    <p class="text-lg font-bold leading-relaxed">
                        Rebelling against the strict rules of modernism. We love clashing colors, geometric shapes, and
                        random patterns. It's fun, it's loud, and it doesn't care if you think it's ugly.
                    </p>
                    <div class="mt-8 flex gap-4">
                        <div class="w-12 h-12 bg-[#ff4081] rounded-full border-4 border-black"></div>
                        <div class="w-12 h-12 bg-[#ffeb3b] transform rotate-45 border-4 border-black"></div>
                        <div class="w-12 h-12 bg-[#3f51b5] rounded-tr-3xl border-4 border-black"></div>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="bg-[#fff] border-4 border-black p-8 shadow-[12px_12px_0_#ffeb3b] transform -rotate-1">
                    <h3 class="text-3xl font-black mb-8 uppercase border-b-4 border-black pb-2 inline-block">Join the
                        Party</h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-2">
                            <label class="block font-black text-xl uppercase">Name</label>
                            <input type="text"
                                class="w-full border-4 border-black p-3 font-bold text-lg focus:outline-none focus:shadow-[8px_8px_0_#ff4081] transition-shadow bg-[#e0f7fa]"
                                placeholder="YOUR NAME HERE">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label class="block font-black text-xl uppercase">Vibe</label>
                            <div class="relative">
                                <select
                                    class="w-full border-4 border-black p-3 font-bold text-lg appearance-none focus:outline-none focus:shadow-[8px_8px_0_#3f51b5] transition-shadow bg-[#fff9c4] cursor-pointer">
                                    <option>Retro 80s</option>
                                    <option>Geometric</option>
                                    <option>Abstract</option>
                                </select>
                                <div
                                    class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-2xl font-black">
                                    ▼</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="block font-black text-xl uppercase">Pattern</label>
                            <input list="patterns"
                                class="w-full border-4 border-black p-3 font-bold text-lg focus:outline-none focus:shadow-[8px_8px_0_#00bcd4] transition-shadow bg-[#f8bbd0]"
                                placeholder="Pick a pattern...">
                            <datalist id="patterns">
                                <option value="Squiggles"></option>
                                <option value="Polka Dots"></option>
                                <option value="Triangles"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-4">
                            <label class="block font-black text-xl uppercase">Shape</label>
                            <div class="flex gap-4">
                                <label class="cursor-pointer group">
                                    <input type="radio" name="shape" class="peer sr-only" checked>
                                    <div
                                        class="w-10 h-10 bg-black peer-checked:bg-[#ff4081] border-4 border-black transition-colors group-hover:scale-110">
                                    </div>
                                </label>
                                <label class="cursor-pointer group">
                                    <input type="radio" name="shape" class="peer sr-only">
                                    <div
                                        class="w-10 h-10 bg-black peer-checked:bg-[#ffeb3b] rounded-full border-4 border-black transition-colors group-hover:scale-110">
                                    </div>
                                </label>
                                <label class="cursor-pointer group">
                                    <input type="radio" name="shape" class="peer sr-only">
                                    <div
                                        class="w-10 h-10 bg-black peer-checked:bg-[#00bcd4] transform rotate-45 border-4 border-black transition-colors group-hover:scale-110">
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between font-black text-xl uppercase">
                                <label>Volume</label>
                                <span>LOUD</span>
                            </div>
                            <input type="range"
                                class="w-full h-6 bg-black rounded-full appearance-none cursor-pointer border-4 border-black [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#ff4081] [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[4px_4px_0_white]">
                        </div>

                        <button
                            class="w-full py-4 bg-black text-white font-black text-2xl uppercase tracking-widest hover:bg-[#3f51b5] hover:shadow-[8px_8px_0_#ffeb3b] transition-all active:translate-y-1 active:shadow-none mt-4 border-4 border-transparent hover:border-black">
                            Let's Go!
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
