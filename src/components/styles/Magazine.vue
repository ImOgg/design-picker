<template>
    <div class="min-h-full bg-white p-8 font-serif text-black">
        <div class="max-w-6xl mx-auto">

            <!-- Masthead -->
            <header class="text-center border-b-4 border-black mb-12 pb-4">
                <div class="text-xs font-sans tracking-[0.3em] uppercase mb-2 text-gray-500">Vol. 24 • Issue 09 •
                    September 2023</div>
                <h1 class="text-7xl md:text-9xl font-black tracking-tighter scale-y-110 mb-4">VOGUE</h1>
                <div
                    class="flex justify-between border-t border-black pt-2 font-sans font-bold text-sm uppercase tracking-widest">
                    <span>Fashion</span>
                    <span>Culture</span>
                    <span>Beauty</span>
                    <span>Living</span>
                    <span>Runway</span>
                </div>
            </header>

            <div class="grid grid-cols-12 gap-8">

                <!-- Main Feature -->
                <div class="col-span-12 lg:col-span-8">
                    <div class="relative mb-8 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop"
                            class="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                        <div
                            class="absolute bottom-0 left-0 bg-white p-6 max-w-md border-t-4 border-black ml-8 -mb-8 shadow-xl">
                            <span
                                class="font-sans font-bold text-xs uppercase tracking-widest text-red-600 mb-2 block">Exclusive</span>
                            <h2 class="text-4xl font-bold italic leading-tight mb-4">The New Era of Digital Elegance
                            </h2>
                            <p class="font-sans text-gray-600 leading-relaxed line-clamp-3">
                                Exploring how technology is reshaping the landscape of high fashion, from virtual
                                runways to AI-generated textiles.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Sidebar / Forms -->
                <div class="col-span-12 lg:col-span-4 space-y-12 mt-12 lg:mt-0">

                    <div class="border-t-4 border-black pt-2">
                        <h3 class="font-sans font-bold text-xl uppercase tracking-widest mb-6">Subscribe</h3>

                        <div class="bg-[#f9f9f9] p-8 space-y-8">
                            <p class="italic text-lg text-center font-medium">"Style is a way to say who you are without
                                having to speak."</p>

                            <!-- Input -->
                            <div class="space-y-2">
                                <label class="block font-sans text-xs font-bold uppercase tracking-widest">Email
                                    Address</label>
                                <input type="email"
                                    class="w-full bg-transparent border-b border-black py-3 font-sans focus:outline-none focus:border-b-2 placeholder-gray-400 transition-all"
                                    placeholder="you@example.com">
                            </div>

                            <!-- Select -->
                            <div class="space-y-2">
                                <label
                                    class="block font-sans text-xs font-bold uppercase tracking-widest">Edition</label>
                                <div class="relative">
                                    <select
                                        class="w-full bg-transparent border border-black py-3 px-4 font-sans appearance-none focus:outline-none focus:bg-black focus:text-white cursor-pointer transition-colors rounded-none">
                                        <option>Digital Only</option>
                                        <option>Print + Digital</option>
                                        <option>Collector's Edition</option>
                                    </select>
                                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs">▼
                                    </div>
                                </div>
                            </div>

                            <!-- Combobox -->
                            <div class="space-y-2">
                                <label
                                    class="block font-sans text-xs font-bold uppercase tracking-widest">Country</label>
                                <input list="countries_mag"
                                    class="w-full bg-transparent border-b border-black py-3 font-sans focus:outline-none focus:border-b-2 placeholder-gray-400 transition-all"
                                    placeholder="Select...">
                                <datalist id="countries_mag">
                                    <option value="France"></option>
                                    <option value="Italy"></option>
                                    <option value="United States"></option>
                                    <option value="Japan"></option>
                                </datalist>
                            </div>

                            <!-- Radio -->
                            <div class="space-y-4">
                                <label
                                    class="block font-sans text-xs font-bold uppercase tracking-widest">Frequency</label>
                                <div class="space-y-2">
                                    <label class="flex items-center gap-3 cursor-pointer group">
                                        <div
                                            class="w-4 h-4 border border-black rounded-full flex items-center justify-center">
                                            <input type="radio" name="freq" class="peer sr-only" checked>
                                            <div class="w-2 h-2 bg-black rounded-full hidden peer-checked:block"></div>
                                        </div>
                                        <span class="font-sans text-sm group-hover:underline">Monthly</span>
                                    </label>
                                    <label class="flex items-center gap-3 cursor-pointer group">
                                        <div
                                            class="w-4 h-4 border border-black rounded-full flex items-center justify-center">
                                            <input type="radio" name="freq" class="peer sr-only">
                                            <div class="w-2 h-2 bg-black rounded-full hidden peer-checked:block"></div>
                                        </div>
                                        <span class="font-sans text-sm group-hover:underline">Weekly</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Slider -->
                            <div class="space-y-2">
                                <div class="flex justify-between font-sans text-xs font-bold uppercase tracking-widest">
                                    <label>Text Size</label>
                                    <span>Aa</span>
                                </div>
                                <input type="range"
                                    class="w-full h-[2px] bg-gray-300 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full">
                            </div>

                            <button
                                class="w-full bg-black text-white font-sans font-bold uppercase tracking-widest py-4 hover:bg-red-600 transition-colors">
                                Join Now
                            </button>

                        </div>
                    </div>

                    <div class="border-t-4 border-black pt-2">
                        <h3 class="font-sans font-bold text-xl uppercase tracking-widest mb-4">Trending</h3>
                        <ul class="space-y-4">
                            <li class="flex gap-4 group cursor-pointer">
                                <span
                                    class="text-4xl font-black text-gray-200 group-hover:text-black transition-colors">01</span>
                                <div>
                                    <h4 class="font-bold leading-tight group-hover:underline">The Return of Minimalism
                                    </h4>
                                    <span class="text-xs font-sans text-gray-500 uppercase">Design</span>
                                </div>
                            </li>
                            <li class="flex gap-4 group cursor-pointer">
                                <span
                                    class="text-4xl font-black text-gray-200 group-hover:text-black transition-colors">02</span>
                                <div>
                                    <h4 class="font-bold leading-tight group-hover:underline">Sustainable Fabrics</h4>
                                    <span class="text-xs font-sans text-gray-500 uppercase">Eco</span>
                                </div>
                            </li>
                            <li class="flex gap-4 group cursor-pointer">
                                <span
                                    class="text-4xl font-black text-gray-200 group-hover:text-black transition-colors">03</span>
                                <div>
                                    <h4 class="font-bold leading-tight group-hover:underline">Paris Fashion Week Recap
                                    </h4>
                                    <span class="text-xs font-sans text-gray-500 uppercase">Events</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
