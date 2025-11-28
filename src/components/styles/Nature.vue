<template>
    <div class="min-h-full bg-[#f1f8e9] p-8 font-sans text-[#33691e] relative overflow-hidden">

        <!-- Organic Shapes Background -->
        <div
            class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#dcedc8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse">
        </div>
        <div
            class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#c5e1a5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000">
        </div>

        <div class="max-w-5xl mx-auto relative z-10">

            <!-- Header -->
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-7xl font-serif font-bold text-[#1b5e20] mb-4">Organic Life</h1>
                <p class="text-xl text-[#558b2f] italic">Reconnect with the earth.</p>
                <div class="w-24 h-1 bg-[#8bc34a] mx-auto mt-6 rounded-full"></div>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                <!-- Image Card -->
                <div
                    class="bg-white/60 backdrop-blur-sm p-6 rounded-[2rem] shadow-lg border border-white/50 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    <div class="aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 relative group">
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt="Nature">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#1b5e20]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <p class="text-white font-serif text-lg">"In every walk with nature one receives far more
                                than he seeks."</p>
                        </div>
                    </div>
                    <h2 class="text-2xl font-serif font-bold text-[#1b5e20] mb-2">Forest Bathing</h2>
                    <p class="text-[#33691e]/80 leading-relaxed">
                        Immerse yourself in the atmosphere of the forest. Let the sights, sounds, and smells wash over
                        you.
                    </p>
                </div>

                <!-- Form Section -->
                <div
                    class="bg-white/80 backdrop-blur-md p-8 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl shadow-xl border border-[#a5d6a7]">
                    <h3 class="text-2xl font-serif font-bold text-[#1b5e20] mb-8 flex items-center gap-3">
                        <span class="text-3xl">🌿</span> Join the Community
                    </h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-2">
                            <label class="block text-sm font-semibold text-[#558b2f] uppercase tracking-wide">Your
                                Name</label>
                            <input type="text"
                                class="w-full bg-[#f1f8e9] border-none rounded-xl px-4 py-3 text-[#33691e] placeholder-[#33691e]/40 focus:ring-2 focus:ring-[#8bc34a] focus:bg-white transition-all"
                                placeholder="Jane Seed">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label
                                class="block text-sm font-semibold text-[#558b2f] uppercase tracking-wide">Interest</label>
                            <div class="relative">
                                <select
                                    class="w-full bg-[#f1f8e9] border-none rounded-xl px-4 py-3 text-[#33691e] appearance-none focus:ring-2 focus:ring-[#8bc34a] focus:bg-white cursor-pointer transition-all">
                                    <option>Gardening</option>
                                    <option>Hiking</option>
                                    <option>Conservation</option>
                                </select>
                                <div
                                    class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#558b2f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="block text-sm font-semibold text-[#558b2f] uppercase tracking-wide">Favorite
                                Plant</label>
                            <input list="plants"
                                class="w-full bg-[#f1f8e9] border-none rounded-xl px-4 py-3 text-[#33691e] placeholder-[#33691e]/40 focus:ring-2 focus:ring-[#8bc34a] focus:bg-white transition-all"
                                placeholder="Search flora...">
                            <datalist id="plants">
                                <option value="Monstera"></option>
                                <option value="Fern"></option>
                                <option value="Succulent"></option>
                                <option value="Orchid"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-3">
                            <label class="block text-sm font-semibold text-[#558b2f] uppercase tracking-wide">Experience
                                Level</label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-[#8bc34a] flex items-center justify-center group-hover:bg-[#dcedc8] transition-colors">
                                        <input type="radio" name="exp" class="peer sr-only" checked>
                                        <div
                                            class="w-2.5 h-2.5 rounded-full bg-[#558b2f] scale-0 peer-checked:scale-100 transition-transform">
                                        </div>
                                    </div>
                                    <span class="text-[#33691e]">Sprout</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-[#8bc34a] flex items-center justify-center group-hover:bg-[#dcedc8] transition-colors">
                                        <input type="radio" name="exp" class="peer sr-only">
                                        <div
                                            class="w-2.5 h-2.5 rounded-full bg-[#558b2f] scale-0 peer-checked:scale-100 transition-transform">
                                        </div>
                                    </div>
                                    <span class="text-[#33691e]">Sapling</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-[#8bc34a] flex items-center justify-center group-hover:bg-[#dcedc8] transition-colors">
                                        <input type="radio" name="exp" class="peer sr-only">
                                        <div
                                            class="w-2.5 h-2.5 rounded-full bg-[#558b2f] scale-0 peer-checked:scale-100 transition-transform">
                                        </div>
                                    </div>
                                    <span class="text-[#33691e]">Tree</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between text-sm font-semibold text-[#558b2f]">
                                <label>Commitment</label>
                                <span>Weekly</span>
                            </div>
                            <input type="range"
                                class="w-full h-2 bg-[#dcedc8] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#8bc34a] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md">
                        </div>

                        <button
                            class="w-full bg-[#558b2f] text-white font-bold py-4 rounded-xl hover:bg-[#33691e] transition-colors shadow-lg shadow-[#558b2f]/30 mt-4">
                            Plant the Seed
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
