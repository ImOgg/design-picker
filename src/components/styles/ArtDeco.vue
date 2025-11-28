<template>
    <div class="min-h-full bg-[#1a1a1a] p-8 font-serif text-[#d4af37] flex justify-center items-center">
        <div class="max-w-4xl w-full border-[4px] border-[#d4af37] p-2 relative">
            <!-- Decorative Corners -->
            <div class="absolute top-0 left-0 w-16 h-16 border-t-[4px] border-l-[4px] border-[#d4af37]"></div>
            <div class="absolute top-0 right-0 w-16 h-16 border-t-[4px] border-r-[4px] border-[#d4af37]"></div>
            <div class="absolute bottom-0 left-0 w-16 h-16 border-b-[4px] border-l-[4px] border-[#d4af37]"></div>
            <div class="absolute bottom-0 right-0 w-16 h-16 border-b-[4px] border-r-[4px] border-[#d4af37]"></div>

            <div class="border border-[#d4af37] p-8 bg-gradient-to-b from-[#000] to-[#1a1a1a]">

                <!-- Header -->
                <header class="text-center mb-12 relative">
                    <div class="inline-block border-b-2 border-t-2 border-[#d4af37] py-4 px-12 relative">
                        <h1 class="text-5xl md:text-7xl uppercase tracking-[0.2em] font-light">Gatsby</h1>
                        <div class="absolute top-1/2 -left-8 w-6 h-[1px] bg-[#d4af37]"></div>
                        <div class="absolute top-1/2 -right-8 w-6 h-[1px] bg-[#d4af37]"></div>
                    </div>
                    <p class="mt-4 uppercase tracking-[0.3em] text-sm">Est. 1925</p>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <!-- Left Column -->
                    <div class="space-y-8 text-center md:text-left">
                        <div class="border border-[#d4af37] p-6 relative">
                            <div class="absolute inset-0 border border-[#d4af37] m-1 opacity-50"></div>
                            <h2 class="text-2xl uppercase tracking-widest mb-4">The Golden Age</h2>
                            <p class="leading-loose text-[#e5cca9]">
                                Experience the luxury and glamour of the Roaring Twenties. Geometric shapes, rich
                                colors, and lavish ornamentation define this timeless style.
                            </p>
                        </div>

                        <div class="flex justify-center gap-4">
                            <div class="w-12 h-12 border border-[#d4af37] rotate-45 flex items-center justify-center">
                                <div class="w-8 h-8 bg-[#d4af37]"></div>
                            </div>
                            <div class="w-12 h-12 border border-[#d4af37] rotate-45 flex items-center justify-center">
                                <div class="w-8 h-8 border border-[#d4af37]"></div>
                            </div>
                            <div class="w-12 h-12 border border-[#d4af37] rotate-45 flex items-center justify-center">
                                <div class="w-8 h-8 bg-[#d4af37]"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Forms -->
                    <div class="border-l border-[#d4af37] pl-8 md:pl-12 space-y-8">
                        <h3 class="text-xl uppercase tracking-[0.2em] border-b border-[#d4af37] pb-2 inline-block mb-4">
                            Reservation</h3>

                        <!-- Input -->
                        <div class="space-y-2 group">
                            <label class="block text-xs uppercase tracking-[0.2em]">Guest Name</label>
                            <input type="text"
                                class="w-full bg-transparent border-b border-[#d4af37] py-2 text-[#e5cca9] placeholder-[#d4af37]/30 focus:outline-none focus:border-b-2 transition-all"
                                placeholder="ENTER NAME">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label class="block text-xs uppercase tracking-[0.2em]">Occasion</label>
                            <div class="relative">
                                <select
                                    class="w-full bg-transparent border border-[#d4af37] py-2 px-4 text-[#e5cca9] appearance-none focus:outline-none focus:bg-[#d4af37]/10 cursor-pointer">
                                    <option class="bg-black">DINNER PARTY</option>
                                    <option class="bg-black">COCKTAIL HOUR</option>
                                    <option class="bg-black">JAZZ NIGHT</option>
                                </select>
                                <div
                                    class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d4af37]">
                                    ♦</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="block text-xs uppercase tracking-[0.2em]">Preferred Drink</label>
                            <input list="drinks"
                                class="w-full bg-transparent border border-[#d4af37] py-2 px-4 text-[#e5cca9] placeholder-[#d4af37]/30 focus:outline-none focus:bg-[#d4af37]/10"
                                placeholder="SELECT BEVERAGE">
                            <datalist id="drinks">
                                <option value="Champagne"></option>
                                <option value="Martini"></option>
                                <option value="Old Fashioned"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-4">
                            <label class="block text-xs uppercase tracking-[0.2em]">Seating</label>
                            <div class="flex flex-col gap-3">
                                <label class="flex items-center gap-4 cursor-pointer group">
                                    <div
                                        class="w-4 h-4 border border-[#d4af37] rotate-45 flex items-center justify-center transition-all group-hover:scale-110">
                                        <input type="radio" name="seating" class="peer sr-only" checked>
                                        <div class="w-2 h-2 bg-[#d4af37] hidden peer-checked:block"></div>
                                    </div>
                                    <span
                                        class="text-sm uppercase tracking-wider group-hover:text-white transition-colors">LOUNGE</span>
                                </label>
                                <label class="flex items-center gap-4 cursor-pointer group">
                                    <div
                                        class="w-4 h-4 border border-[#d4af37] rotate-45 flex items-center justify-center transition-all group-hover:scale-110">
                                        <input type="radio" name="seating" class="peer sr-only">
                                        <div class="w-2 h-2 bg-[#d4af37] hidden peer-checked:block"></div>
                                    </div>
                                    <span
                                        class="text-sm uppercase tracking-wider group-hover:text-white transition-colors">BALCONY</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between text-xs uppercase tracking-[0.2em]">
                                <label>Ambiance</label>
                                <span>Dim</span>
                            </div>
                            <input type="range"
                                class="w-full h-[1px] bg-[#d4af37] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#1a1a1a] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#d4af37] [&::-webkit-slider-thumb]:rotate-45">
                        </div>

                        <button
                            class="w-full border border-[#d4af37] py-3 uppercase tracking-[0.3em] hover:bg-[#d4af37] hover:text-black transition-colors font-bold mt-4">
                            Request
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
