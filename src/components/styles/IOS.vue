<template>
    <div class="min-h-full bg-[#f2f2f7] p-8 font-sans text-black flex justify-center items-center">
        <!-- iPhone Frame -->
        <div
            class="w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-black">

            <!-- Status Bar -->
            <div
                class="h-12 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 text-sm font-semibold z-20 relative">
                <span>9:41</span>
                <div class="flex gap-2 items-center">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd" />
                    </svg>
                    <div class="w-6 h-3 border border-gray-400 rounded-[2px] relative">
                        <div class="bg-black h-full w-[80%]"></div>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="h-full overflow-y-auto bg-[#f2f2f7] pb-20">

                <div class="p-4 pt-2">
                    <h1 class="text-3xl font-bold mb-4 px-2">Settings</h1>

                    <!-- Search Bar -->
                    <div class="bg-[#e3e3e8] rounded-xl flex items-center px-3 py-2 mb-6">
                        <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Search"
                            class="bg-transparent border-none outline-none w-full text-[17px] placeholder-gray-500">
                    </div>

                    <!-- User Card -->
                    <div class="bg-white rounded-xl p-4 flex items-center gap-4 mb-8 shadow-sm">
                        <div
                            class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-500">
                            JD</div>
                        <div>
                            <div class="text-xl font-semibold">John Doe</div>
                            <div class="text-sm text-gray-500">Apple ID, iCloud, Media & Purchases</div>
                        </div>
                        <div class="ml-auto text-gray-400">›</div>
                    </div>

                    <!-- Form Group -->
                    <div class="bg-white rounded-xl overflow-hidden shadow-sm mb-8">

                        <!-- Input -->
                        <div class="flex items-center p-4 border-b border-gray-100">
                            <label class="w-24 text-[17px]">Name</label>
                            <input type="text" value="iPhone"
                                class="flex-1 text-[17px] text-right text-gray-500 outline-none bg-transparent">
                            <div class="ml-2 text-gray-400">›</div>
                        </div>

                        <!-- Select (Simulated with div for iOS look) -->
                        <div
                            class="flex items-center p-4 border-b border-gray-100 cursor-pointer active:bg-gray-50 transition-colors relative">
                            <label class="w-24 text-[17px]">Region</label>
                            <select class="absolute inset-0 opacity-0 cursor-pointer">
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                            </select>
                            <div class="flex-1 text-[17px] text-right text-gray-500">United States</div>
                            <div class="ml-2 text-gray-400">›</div>
                        </div>

                        <!-- Combobox (Simulated) -->
                        <div class="flex items-center p-4 border-b border-gray-100">
                            <label class="w-24 text-[17px]">Language</label>
                            <input list="langs"
                                class="flex-1 text-[17px] text-right text-blue-500 outline-none bg-transparent"
                                placeholder="English">
                            <datalist id="langs">
                                <option value="English"></option>
                                <option value="Spanish"></option>
                                <option value="French"></option>
                            </datalist>
                            <div class="ml-2 text-gray-400">›</div>
                        </div>

                        <!-- Switch (Radio alternative) -->
                        <div class="flex items-center justify-between p-4 border-b border-gray-100">
                            <label class="text-[17px]">Airplane Mode</label>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div
                                    class="w-[51px] h-[31px] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-green-500 shadow-sm">
                                </div>
                            </label>
                        </div>

                        <!-- Radio Group -->
                        <div class="p-4">
                            <div class="text-[15px] text-gray-500 mb-3 uppercase">Appearance</div>
                            <div class="flex bg-gray-100 p-1 rounded-lg">
                                <label
                                    class="flex-1 text-center py-1.5 rounded-md text-[13px] font-medium cursor-pointer transition-all shadow-sm bg-white text-black">
                                    <input type="radio" name="appearance" class="sr-only" checked>
                                    Light
                                </label>
                                <label
                                    class="flex-1 text-center py-1.5 rounded-md text-[13px] font-medium cursor-pointer transition-all text-gray-500 hover:text-black">
                                    <input type="radio" name="appearance" class="sr-only">
                                    Dark
                                </label>
                                <label
                                    class="flex-1 text-center py-1.5 rounded-md text-[13px] font-medium cursor-pointer transition-all text-gray-500 hover:text-black">
                                    <input type="radio" name="appearance" class="sr-only">
                                    Auto
                                </label>
                            </div>
                        </div>

                    </div>

                    <!-- Slider Group -->
                    <div class="bg-white rounded-xl p-4 shadow-sm mb-8">
                        <div class="flex items-center gap-4 mb-4">
                            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input type="range"
                                class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-[0.5px] [&::-webkit-slider-thumb]:border-gray-200">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Home Indicator -->
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full z-20"></div>
        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles styling */
</style>
