<template>
    <div class="min-h-full bg-[#e0e5ec] p-8 font-sans text-[#4d4d4d] flex justify-center items-center">
        <div
            class="w-[375px] bg-[#e0e5ec] rounded-[30px] p-8 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">

            <!-- Header -->
            <div class="flex justify-between items-center mb-8">
                <button
                    class="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_0_rgba(163,177,198,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.8)] flex items-center justify-center text-[#4d4d4d] active:shadow-[inset_4px_4px_8px_0_rgba(163,177,198,0.7),inset_-4px_-4px_8px_0_rgba(255,255,255,0.8)] transition-all">
                    ←
                </button>
                <h2 class="text-lg font-bold">Soft UI</h2>
                <button
                    class="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_0_rgba(163,177,198,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.8)] flex items-center justify-center text-[#4d4d4d] active:shadow-[inset_4px_4px_8px_0_rgba(163,177,198,0.7),inset_-4px_-4px_8px_0_rgba(255,255,255,0.8)] transition-all">
                    ⋮
                </button>
            </div>

            <div class="space-y-8">

                <!-- Card -->
                <div
                    class="rounded-[20px] bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-5 text-center">
                    <div
                        class="w-full h-[150px] rounded-[15px] bg-[#e0e5ec] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] mb-4">
                    </div>
                    <h3 class="font-bold text-lg">Neumorphism</h3>
                    <p class="text-sm opacity-70">Soft UI design trend.</p>
                </div>

                <!-- Form Elements -->
                <div class="space-y-6">

                    <!-- Input -->
                    <div class="space-y-2">
                        <label class="ml-4 text-sm font-bold opacity-70">Username</label>
                        <input type="text"
                            class="w-full px-5 py-3 border-none rounded-[50px] bg-[#e0e5ec] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-[#4d4d4d] outline-none focus:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.7),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow placeholder-gray-400"
                            placeholder="Type something...">
                    </div>

                    <!-- Select -->
                    <div class="space-y-2">
                        <label class="ml-4 text-sm font-bold opacity-70">Theme</label>
                        <div class="relative">
                            <select
                                class="w-full px-5 py-3 border-none rounded-[50px] bg-[#e0e5ec] shadow-[6px_6px_10px_0_rgba(163,177,198,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.8)] text-[#4d4d4d] outline-none appearance-none cursor-pointer active:shadow-[inset_4px_4px_8px_0_rgba(163,177,198,0.7),inset_-4px_-4px_8px_0_rgba(255,255,255,0.8)] transition-shadow">
                                <option>Light Mode</option>
                                <option>Dark Mode</option>
                                <option>Blue Mode</option>
                            </select>
                            <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-70">▼
                            </div>
                        </div>
                    </div>

                    <!-- Combobox -->
                    <div class="space-y-2">
                        <label class="ml-4 text-sm font-bold opacity-70">Country</label>
                        <input list="countries"
                            class="w-full px-5 py-3 border-none rounded-[50px] bg-[#e0e5ec] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-[#4d4d4d] outline-none transition-shadow placeholder-gray-400"
                            placeholder="Select Country...">
                        <datalist id="countries">
                            <option value="USA"></option>
                            <option value="UK"></option>
                            <option value="Canada"></option>
                        </datalist>
                    </div>

                    <!-- Radio / Switch -->
                    <div class="flex justify-center gap-8 py-4">
                        <label class="relative inline-block w-[60px] h-[30px] cursor-pointer">
                            <input type="checkbox" checked class="sr-only peer">
                            <span
                                class="absolute inset-0 bg-[#e0e5ec] rounded-[30px] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all"></span>
                            <span
                                class="absolute h-[22px] w-[22px] left-1 bottom-1 bg-[#007aff] rounded-full shadow-[3px_3px_6px_rgba(163,177,198,0.7),-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all peer-checked:translate-x-[30px]"></span>
                        </label>
                        <label class="relative inline-block w-[60px] h-[30px] cursor-pointer">
                            <input type="checkbox" class="sr-only peer">
                            <span
                                class="absolute inset-0 bg-[#e0e5ec] rounded-[30px] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all"></span>
                            <span
                                class="absolute h-[22px] w-[22px] left-1 bottom-1 bg-[#e0e5ec] rounded-full shadow-[3px_3px_6px_rgba(163,177,198,0.7),-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all peer-checked:translate-x-[30px] peer-checked:bg-[#007aff]"></span>
                        </label>
                    </div>

                    <!-- Slider -->
                    <div class="space-y-4">
                        <div
                            class="h-[6px] rounded-[3px] bg-[#e0e5ec] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] relative">
                            <div class="absolute top-0 left-0 h-full w-1/2 bg-[#007aff] rounded-[3px]"></div>
                            <div
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_rgba(163,177,198,0.7),-3px_-3px_6px_rgba(255,255,255,0.8)] cursor-pointer">
                            </div>
                        </div>
                    </div>

                    <button
                        class="w-full py-3 rounded-[50px] bg-[#e0e5ec] shadow-[6px_6px_10px_0_rgba(163,177,198,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.8)] text-[#007aff] font-bold active:shadow-[inset_4px_4px_8px_0_rgba(163,177,198,0.7),inset_-4px_-4px_8px_0_rgba(255,255,255,0.8)] transition-all mt-4">
                        Submit
                    </button>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
