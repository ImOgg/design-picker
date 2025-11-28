<template>
    <div class="min-h-full bg-[#f0f0f0] p-8 font-sans flex items-center justify-center">
        <div class="max-w-5xl w-full bg-[#f0f0f0]">

            <!-- Header Composition -->
            <div class="grid grid-cols-12 gap-0 mb-12">
                <div class="col-span-12 md:col-span-8 bg-[#d22630] p-12 text-white flex items-center">
                    <h1 class="text-6xl md:text-8xl font-bold tracking-tighter transform -rotate-2">BAUHAUS</h1>
                </div>
                <div class="col-span-12 md:col-span-4 grid grid-rows-2">
                    <div class="bg-[#1e1e1e] p-6 flex items-center justify-center">
                        <div class="w-16 h-16 rounded-full bg-[#f0f0f0]"></div>
                    </div>
                    <div class="bg-[#005c96] p-6 flex items-center justify-center">
                        <div
                            class="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-[#f0f0f0] border-r-[30px] border-r-transparent">
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Typography / Content -->
                <div class="space-y-8">
                    <div class="border-l-8 border-[#f0b700] pl-6">
                        <h2 class="text-4xl font-bold mb-4 text-[#1e1e1e]">FORM FOLLOWS FUNCTION</h2>
                        <p class="text-xl leading-relaxed text-gray-700">
                            The Bauhaus style is characterized by its simple, geometric shapes and primary colors. It
                            emphasizes functionality and the absence of ornamentation.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="aspect-square bg-[#d22630] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                            A</div>
                        <div
                            class="aspect-square bg-[#005c96] flex items-center justify-center text-white font-bold text-2xl">
                            B</div>
                        <div
                            class="aspect-square bg-[#f0b700] flex items-center justify-center text-white font-bold text-2xl transform rotate-45">
                            C</div>
                        <div
                            class="aspect-square bg-[#1e1e1e] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                            D</div>
                    </div>
                </div>

                <!-- Form Elements (Geometric) -->
                <div class="bg-white p-8 shadow-xl border-b-8 border-[#d22630]">
                    <h3
                        class="text-2xl font-bold mb-8 text-[#1e1e1e] uppercase tracking-widest border-b-4 border-[#1e1e1e] inline-block pb-2">
                        Controls</h3>

                    <div class="space-y-8">

                        <!-- Input -->
                        <div class="relative">
                            <label class="block text-sm font-bold mb-2 uppercase tracking-wider">Identification</label>
                            <div class="flex">
                                <div class="w-12 bg-[#1e1e1e] flex items-center justify-center text-white font-bold">>
                                </div>
                                <input type="text"
                                    class="w-full bg-[#f0f0f0] border-none p-4 font-bold text-[#1e1e1e] focus:ring-0 focus:bg-[#e0e0e0] transition-colors"
                                    placeholder="ENTER TEXT">
                            </div>
                        </div>

                        <!-- Select -->
                        <div>
                            <label class="block text-sm font-bold mb-2 uppercase tracking-wider">Category</label>
                            <div class="relative">
                                <select
                                    class="w-full appearance-none bg-[#005c96] text-white p-4 pr-12 font-bold cursor-pointer hover:bg-[#004a7a] transition-colors rounded-none">
                                    <option>ARCHITECTURE</option>
                                    <option>DESIGN</option>
                                    <option>ART</option>
                                </select>
                                <div
                                    class="absolute right-0 top-0 h-full w-12 bg-[#004a7a] flex items-center justify-center pointer-events-none text-white">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div>
                            <label class="block text-sm font-bold mb-2 uppercase tracking-wider">Material</label>
                            <div class="flex border-4 border-[#f0b700]">
                                <input list="materials" class="w-full p-3 border-none focus:ring-0 font-bold"
                                    placeholder="SELECT MATERIAL">
                                <datalist id="materials">
                                    <option value="STEEL"></option>
                                    <option value="GLASS"></option>
                                    <option value="CONCRETE"></option>
                                </datalist>
                            </div>
                        </div>

                        <!-- Radio -->
                        <div>
                            <label class="block text-sm font-bold mb-4 uppercase tracking-wider">Shape</label>
                            <div class="flex gap-6">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        class="relative w-8 h-8 border-4 border-[#1e1e1e] rounded-full flex items-center justify-center transition-colors group-hover:border-[#d22630]">
                                        <input type="radio" name="shape"
                                            class="peer appearance-none absolute w-full h-full cursor-pointer" checked>
                                        <div class="w-4 h-4 bg-[#1e1e1e] rounded-full hidden peer-checked:block"></div>
                                    </div>
                                    <span class="font-bold">CIRCLE</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        class="relative w-8 h-8 border-4 border-[#1e1e1e] flex items-center justify-center transition-colors group-hover:border-[#005c96]">
                                        <input type="radio" name="shape"
                                            class="peer appearance-none absolute w-full h-full cursor-pointer">
                                        <div class="w-4 h-4 bg-[#1e1e1e] hidden peer-checked:block"></div>
                                    </div>
                                    <span class="font-bold">SQUARE</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div>
                            <label class="block text-sm font-bold mb-2 uppercase tracking-wider">Balance</label>
                            <input type="range"
                                class="w-full h-2 bg-[#e0e0e0] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:border-l-[10px] [&::-webkit-slider-thumb]:border-l-transparent [&::-webkit-slider-thumb]:border-b-[20px] [&::-webkit-slider-thumb]:border-b-[#d22630] [&::-webkit-slider-thumb]:border-r-[10px] [&::-webkit-slider-thumb]:border-r-transparent [&::-webkit-slider-thumb]:-mt-2">
                        </div>

                        <button
                            class="w-full bg-[#1e1e1e] text-white py-4 font-bold text-xl hover:bg-[#d22630] transition-colors uppercase tracking-widest">
                            Submit
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles the styling */
</style>
