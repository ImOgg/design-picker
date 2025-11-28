<template>
    <div class="min-h-full bg-white p-8 font-mono text-black">
        <div class="max-w-5xl mx-auto border-[5px] border-black bg-[#ffff00]">

            <!-- Header -->
            <header class="border-b-[5px] border-black">
                <h1 class="text-6xl md:text-8xl p-4 uppercase leading-[0.8] tracking-[-5px] break-all">BRUTALISM</h1>
                <div class="bg-black text-white p-2 overflow-hidden whitespace-nowrap font-bold text-xl">
                    <span>RAW • UNPOLISHED • BOLD • HONEST • RAW • UNPOLISHED • BOLD • HONEST</span>
                </div>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-3">

                <!-- Left Col -->
                <div class="md:col-span-2 border-b-[5px] md:border-b-0 md:border-r-[5px] border-black">
                    <div class="p-8 bg-[#ff0000] text-white border-b-[5px] border-black">
                        <h2 class="text-5xl uppercase underline decoration-4 underline-offset-4 mb-4">CONTENT IS KING
                        </h2>
                        <p class="text-xl font-bold">Forget about fancy gradients and shadows. We serve raw HTML.</p>
                        <button
                            class="mt-8 bg-white text-black border-[3px] border-black px-8 py-4 text-2xl font-bold shadow-[5px_5px_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all hover:bg-black hover:text-white">
                            CLICK ME
                        </button>
                    </div>

                    <div class="p-8 bg-white">
                        <h3 class="text-3xl font-bold bg-black text-white inline-block px-2 mb-6">INPUT_DATA</h3>

                        <div class="space-y-6">

                            <!-- Input -->
                            <div class="space-y-2">
                                <label class="block font-bold text-xl uppercase">Your Name</label>
                                <input type="text"
                                    class="w-full border-[3px] border-black p-4 text-xl font-bold focus:outline-none focus:bg-[#ffff00] placeholder-black/30"
                                    placeholder="TYPE HERE">
                            </div>

                            <!-- Select -->
                            <div class="space-y-2">
                                <label class="block font-bold text-xl uppercase">Choose Path</label>
                                <div class="relative">
                                    <select
                                        class="w-full border-[3px] border-black p-4 text-xl font-bold appearance-none bg-white focus:outline-none focus:bg-[#0000ff] focus:text-white cursor-pointer rounded-none">
                                        <option>CHAOS</option>
                                        <option>ORDER</option>
                                        <option>ENTROPY</option>
                                    </select>
                                    <div
                                        class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-2xl font-bold">
                                        ▼</div>
                                </div>
                            </div>

                            <!-- Combobox -->
                            <div class="space-y-2">
                                <label class="block font-bold text-xl uppercase">Favorite Color</label>
                                <input list="colors"
                                    class="w-full border-[3px] border-black p-4 text-xl font-bold focus:outline-none focus:bg-[#00ff00]"
                                    placeholder="SELECT...">
                                <datalist id="colors">
                                    <option value="#FF0000 RED"></option>
                                    <option value="#00FF00 GREEN"></option>
                                    <option value="#0000FF BLUE"></option>
                                </datalist>
                            </div>

                            <!-- Radio -->
                            <div class="space-y-2">
                                <label class="block font-bold text-xl uppercase">Vibe Check</label>
                                <div class="flex flex-col gap-2">
                                    <label class="flex items-center gap-4 cursor-pointer group">
                                        <div
                                            class="w-8 h-8 border-[3px] border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:border-white transition-colors">
                                            <input type="radio" name="vibe" class="peer sr-only" checked>
                                            <div
                                                class="w-4 h-4 bg-black hidden peer-checked:block group-hover:bg-white">
                                            </div>
                                        </div>
                                        <span class="text-xl font-bold group-hover:underline decoration-4">GOOD</span>
                                    </label>
                                    <label class="flex items-center gap-4 cursor-pointer group">
                                        <div
                                            class="w-8 h-8 border-[3px] border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:border-white transition-colors">
                                            <input type="radio" name="vibe" class="peer sr-only">
                                            <div
                                                class="w-4 h-4 bg-black hidden peer-checked:block group-hover:bg-white">
                                            </div>
                                        </div>
                                        <span class="text-xl font-bold group-hover:underline decoration-4">BAD</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Slider -->
                            <div class="space-y-2">
                                <label class="block font-bold text-xl uppercase">Intensity</label>
                                <input type="range"
                                    class="w-full h-8 bg-white border-[3px] border-black appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[2px_2px_0_#000]">
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Right Col -->
                <div class="grid grid-rows-2">
                    <div class="bg-[#0000ff] p-4 flex items-center justify-center border-b-[5px] border-black">
                        <div
                            class="w-full h-48 bg-white border-[3px] border-black flex items-center justify-center text-3xl font-bold rotate-6">
                            IMAGE
                        </div>
                    </div>
                    <div class="bg-[#00ff00] p-4">
                        <ul class="list-square pl-8 space-y-2 text-xl font-bold">
                            <li><a href="#" class="hover:bg-black hover:text-white block">LINK_01</a></li>
                            <li><a href="#" class="hover:bg-black hover:text-white block">LINK_02</a></li>
                            <li><a href="#" class="hover:bg-black hover:text-white block">LINK_03</a></li>
                            <li><a href="#" class="hover:bg-black hover:text-white block">LINK_04</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <footer class="p-4 text-center font-bold text-xl border-t-[5px] border-black uppercase">
                © 2023 NO RIGHTS RESERVED.
            </footer>
        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
