<template>
    <div
        class="min-h-full bg-[#1a1a1a] p-8 font-serif text-[#d4af37] flex justify-center items-center relative overflow-hidden">

        <!-- Texture Overlay -->
        <div class="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style="background-image: url('https://www.transparenttextures.com/patterns/black-linen.png');"></div>

        <!-- Fog Effect -->
        <div
            class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        </div>

        <div class="max-w-4xl w-full relative z-10 border-[1px] border-[#d4af37]/30 p-1">
            <div class="border-[1px] border-[#d4af37]/60 p-1">
                <div class="border-[2px] border-[#d4af37] p-8 bg-[#0a0a0a]/90 shadow-[0_0_50px_rgba(0,0,0,0.8)]">

                    <!-- Header -->
                    <header class="text-center mb-12">
                        <div class="text-xs tracking-[0.5em] uppercase text-[#888] mb-2">Est. MDCCCLXXXVIII</div>
                        <h1
                            class="text-5xl md:text-7xl font-bold uppercase tracking-widest text-[#d4af37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-serif">
                            Nocturne
                        </h1>
                        <div class="flex items-center justify-center gap-4 mt-4 opacity-60">
                            <div class="h-[1px] w-16 bg-[#d4af37]"></div>
                            <span class="text-2xl">❦</span>
                            <div class="h-[1px] w-16 bg-[#d4af37]"></div>
                        </div>
                    </header>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <!-- Text Content -->
                        <div class="relative">
                            <div
                                class="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent">
                            </div>
                            <p
                                class="text-lg leading-loose text-[#a8a8a8] first-letter:text-5xl first-letter:font-bold first-letter:text-[#d4af37] first-letter:mr-2 first-letter:float-left">
                                Amidst the shadows of the old library, secrets whisper through the dust motes. The air
                                is thick with the scent of parchment and decaying roses. Here, time stands still, and
                                the darkness is not a void, but a velvet embrace.
                            </p>
                            <div class="mt-8 text-center italic text-[#d4af37]/60">
                                "Darkness creates the canvas for the light."
                            </div>
                        </div>

                        <!-- Form Section -->
                        <div class="space-y-8">
                            <h3
                                class="text-xl uppercase tracking-[0.2em] text-center border-b border-[#d4af37]/30 pb-4">
                                Inquiry</h3>

                            <!-- Input -->
                            <div class="space-y-2 group">
                                <label
                                    class="block text-xs uppercase tracking-[0.2em] text-[#888] group-hover:text-[#d4af37] transition-colors">Identity</label>
                                <input type="text"
                                    class="w-full bg-transparent border-b border-[#d4af37]/30 py-2 text-[#d4af37] placeholder-[#d4af37]/20 focus:outline-none focus:border-[#d4af37] transition-all font-serif italic"
                                    placeholder="Enter your name...">
                            </div>

                            <!-- Select -->
                            <div class="space-y-2 group">
                                <label
                                    class="block text-xs uppercase tracking-[0.2em] text-[#888] group-hover:text-[#d4af37] transition-colors">Department</label>
                                <div class="relative">
                                    <select
                                        class="w-full bg-[#1a1a1a] border border-[#d4af37]/30 py-2 px-4 text-[#d4af37] appearance-none focus:outline-none focus:border-[#d4af37] cursor-pointer font-serif">
                                        <option>Alchemy</option>
                                        <option>Necromancy</option>
                                        <option>Literature</option>
                                    </select>
                                    <div
                                        class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d4af37] text-xs">
                                        ▼</div>
                                </div>
                            </div>

                            <!-- Combobox -->
                            <div class="space-y-2 group">
                                <label
                                    class="block text-xs uppercase tracking-[0.2em] text-[#888] group-hover:text-[#d4af37] transition-colors">Artifact</label>
                                <input list="artifacts"
                                    class="w-full bg-transparent border-b border-[#d4af37]/30 py-2 text-[#d4af37] placeholder-[#d4af37]/20 focus:outline-none focus:border-[#d4af37] transition-all font-serif italic"
                                    placeholder="Search archives...">
                                <datalist id="artifacts">
                                    <option value="Cursed Mirror"></option>
                                    <option value="Raven Feather"></option>
                                    <option value="Obsidian Dagger"></option>
                                </datalist>
                            </div>

                            <!-- Radio -->
                            <div class="space-y-4">
                                <label class="block text-xs uppercase tracking-[0.2em] text-[#888]">Affiliation</label>
                                <div class="flex flex-col gap-3">
                                    <label class="flex items-center gap-4 cursor-pointer group">
                                        <div
                                            class="w-4 h-4 border border-[#d4af37] rotate-45 flex items-center justify-center transition-all group-hover:bg-[#d4af37]/10">
                                            <input type="radio" name="affiliation" class="peer sr-only" checked>
                                            <div
                                                class="w-2 h-2 bg-[#d4af37] hidden peer-checked:block shadow-[0_0_5px_#d4af37]">
                                            </div>
                                        </div>
                                        <span
                                            class="text-sm uppercase tracking-wider text-[#a8a8a8] group-hover:text-[#d4af37] transition-colors">The
                                            Order</span>
                                    </label>
                                    <label class="flex items-center gap-4 cursor-pointer group">
                                        <div
                                            class="w-4 h-4 border border-[#d4af37] rotate-45 flex items-center justify-center transition-all group-hover:bg-[#d4af37]/10">
                                            <input type="radio" name="affiliation" class="peer sr-only">
                                            <div
                                                class="w-2 h-2 bg-[#d4af37] hidden peer-checked:block shadow-[0_0_5px_#d4af37]">
                                            </div>
                                        </div>
                                        <span
                                            class="text-sm uppercase tracking-wider text-[#a8a8a8] group-hover:text-[#d4af37] transition-colors">The
                                            Coven</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Slider -->
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs uppercase tracking-[0.2em] text-[#888]">
                                    <label>Shadow Intensity</label>
                                    <span>High</span>
                                </div>
                                <input type="range"
                                    class="w-full h-[1px] bg-[#d4af37]/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#d4af37] [&::-webkit-slider-thumb]:rotate-45 [&::-webkit-slider-thumb]:shadow-[0_0_5px_#d4af37]">
                            </div>

                            <button
                                class="w-full border border-[#d4af37] py-3 uppercase tracking-[0.3em] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-500 font-bold mt-4 relative overflow-hidden group">
                                <span class="relative z-10">Summon</span>
                                <div
                                    class="absolute inset-0 bg-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500">
                                </div>
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
