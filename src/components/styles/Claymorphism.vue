<template>
    <div class="min-h-full bg-[#e0f7fa] p-8 font-sans text-[#006064] flex justify-center items-center">
        <div class="max-w-4xl w-full">

            <!-- Header -->
            <header class="text-center mb-12">
                <h1 class="text-5xl md:text-7xl font-bold mb-4 text-[#00838f] drop-shadow-sm">Claymorphism</h1>
                <p class="text-xl text-[#006064] font-medium opacity-80">Soft, fluffy, and 3D.</p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Info Card -->
                <div
                    class="bg-[#e0f7fa] p-8 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div
                        class="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#b2ebf2] rounded-full blur-3xl opacity-60">
                    </div>
                    <div
                        class="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-[#4dd0e1] rounded-full blur-3xl opacity-40">
                    </div>

                    <h2 class="text-3xl font-bold mb-6 relative z-10">What is it?</h2>
                    <p class="text-lg leading-relaxed relative z-10">
                        Claymorphism combines Neumorphism with 3D floating elements. It features rounded corners, inner
                        shadows, and outer drop shadows to create a "clay" look. It's friendly, approachable, and often
                        uses pastel colors.
                    </p>
                    <button
                        class="mt-8 px-8 py-4 bg-[#4dd0e1] text-white font-bold rounded-[2rem] shadow-[8px_8px_16px_#b2ebf2,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#26c6da,inset_-4px_-4px_8px_#80deea] transition-all active:scale-95">
                        Touch Me
                    </button>
                </div>

                <!-- Form Elements -->
                <div
                    class="bg-white/50 backdrop-blur-xl p-8 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/40">
                    <h3 class="text-2xl font-bold mb-8 text-center">Clay Forms</h3>

                    <div class="space-y-8">

                        <!-- Input -->
                        <div class="space-y-3">
                            <label class="ml-4 font-bold text-sm uppercase tracking-wider opacity-70">Username</label>
                            <input type="text"
                                class="w-full px-6 py-4 bg-[#e0f7fa] rounded-[2rem] shadow-[inset_6px_6px_12px_#b2ebf2,inset_-6px_-6px_12px_#ffffff] focus:outline-none focus:shadow-[inset_8px_8px_16px_#b2ebf2,inset_-8px_-8px_16px_#ffffff] transition-shadow text-[#006064] placeholder-[#006064]/40 font-medium"
                                placeholder="clay_user">
                        </div>

                        <!-- Select -->
                        <div class="space-y-3">
                            <label class="ml-4 font-bold text-sm uppercase tracking-wider opacity-70">Favorite
                                Color</label>
                            <div class="relative">
                                <select
                                    class="w-full px-6 py-4 bg-[#e0f7fa] rounded-[2rem] shadow-[8px_8px_16px_#b2ebf2,-8px_-8px_16px_#ffffff] appearance-none focus:outline-none focus:shadow-[inset_4px_4px_8px_#b2ebf2,inset_-4px_-4px_8px_#ffffff] cursor-pointer text-[#006064] font-medium transition-all">
                                    <option>Pastel Pink</option>
                                    <option>Mint Green</option>
                                    <option>Baby Blue</option>
                                </select>
                                <div
                                    class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#006064]">
                                    ▼</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-3">
                            <label class="ml-4 font-bold text-sm uppercase tracking-wider opacity-70">Pet</label>
                            <input list="pets"
                                class="w-full px-6 py-4 bg-[#e0f7fa] rounded-[2rem] shadow-[inset_6px_6px_12px_#b2ebf2,inset_-6px_-6px_12px_#ffffff] focus:outline-none focus:shadow-[inset_8px_8px_16px_#b2ebf2,inset_-8px_-8px_16px_#ffffff] transition-shadow text-[#006064] placeholder-[#006064]/40 font-medium"
                                placeholder="Choose...">
                            <datalist id="pets">
                                <option value="Cat"></option>
                                <option value="Dog"></option>
                                <option value="Bunny"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-4">
                            <label class="ml-4 font-bold text-sm uppercase tracking-wider opacity-70">Texture</label>
                            <div
                                class="flex justify-around bg-[#e0f7fa] p-2 rounded-[2rem] shadow-[inset_6px_6px_12px_#b2ebf2,inset_-6px_-6px_12px_#ffffff]">
                                <label
                                    class="cursor-pointer relative z-10 px-6 py-2 rounded-[1.5rem] transition-all has-[:checked]:bg-[#4dd0e1] has-[:checked]:text-white has-[:checked]:shadow-[4px_4px_8px_#26c6da,-4px_-4px_8px_#80deea]">
                                    <input type="radio" name="texture" class="sr-only" checked>
                                    <span class="font-bold">Smooth</span>
                                </label>
                                <label
                                    class="cursor-pointer relative z-10 px-6 py-2 rounded-[1.5rem] transition-all has-[:checked]:bg-[#4dd0e1] has-[:checked]:text-white has-[:checked]:shadow-[4px_4px_8px_#26c6da,-4px_-4px_8px_#80deea]">
                                    <input type="radio" name="texture" class="sr-only">
                                    <span class="font-bold">Rough</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-3">
                            <div
                                class="flex justify-between ml-4 font-bold text-sm uppercase tracking-wider opacity-70">
                                <label>Softness</label>
                                <span>Max</span>
                            </div>
                            <div class="px-2">
                                <input type="range"
                                    class="w-full h-4 bg-[#e0f7fa] rounded-full appearance-none cursor-pointer shadow-[inset_2px_2px_4px_#b2ebf2,inset_-2px_-2px_4px_#ffffff] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#4dd0e1] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[4px_4px_8px_#26c6da,-4px_-4px_8px_#80deea] [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform">
                            </div>
                        </div>

                        <button
                            class="w-full py-4 bg-[#00bcd4] text-white font-bold text-xl rounded-[2rem] shadow-[8px_8px_16px_#b2ebf2,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#00acc1,inset_-4px_-4px_8px_#4dd0e1] transition-all active:scale-95 mt-4">
                            Submit
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
