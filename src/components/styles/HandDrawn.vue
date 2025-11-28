<template>
    <div class="min-h-full bg-[#fdfbf7] p-8 font-cursive text-[#2c3e50] relative overflow-hidden">

        <!-- Paper Texture Overlay -->
        <div class="absolute inset-0 opacity-50 pointer-events-none"
            style="background-image: url('https://www.transparenttextures.com/patterns/notebook.png');"></div>

        <div class="max-w-4xl mx-auto relative z-10">

            <!-- Header -->
            <header class="text-center mb-12 transform -rotate-1">
                <h1 class="text-6xl md:text-7xl font-bold mb-4 scribble-underline inline-block pb-2">My Notebook</h1>
                <div class="flex justify-center gap-4 mt-4">
                    <div
                        class="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center animate-bounce">
                        ★</div>
                    <div
                        class="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center animate-bounce delay-100">
                        ♥</div>
                    <div
                        class="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center animate-bounce delay-200">
                        ☺</div>
                </div>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Sticky Note -->
                <div
                    class="bg-[#fff740] p-6 shadow-[4px_4px_8px_rgba(0,0,0,0.1)] transform rotate-2 hover:rotate-0 transition-transform duration-300 relative">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e0e0e0]/50 transform -rotate-1">
                    </div>
                    <h2 class="text-2xl font-bold mb-4 border-b-2 border-dashed border-black/20 pb-2">To-Do List</h2>
                    <ul class="space-y-3 text-lg">
                        <li class="flex items-center gap-3">
                            <div class="w-5 h-5 border-2 border-black rounded-md flex items-center justify-center">
                                <div class="w-3 h-3 bg-black rounded-sm"></div>
                            </div>
                            <span class="line-through decoration-2 decoration-red-500">Buy milk</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <div class="w-5 h-5 border-2 border-black rounded-md"></div>
                            <span>Walk the dog</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <div class="w-5 h-5 border-2 border-black rounded-md"></div>
                            <span>Learn Vue.js</span>
                        </li>
                    </ul>
                    <div class="mt-6 text-right text-sm text-gray-600">
                        - Don't forget!
                    </div>
                </div>

                <!-- Form Area -->
                <div
                    class="border-4 border-black rounded-2xl p-8 bg-white shadow-[8px_8px_0_#2c3e50] transform -rotate-1">
                    <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span>✎</span> Doodle Form
                    </h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-2">
                            <label class="block font-bold text-lg">Nickname:</label>
                            <input type="text"
                                class="w-full border-b-2 border-black bg-transparent py-2 px-1 focus:outline-none focus:border-blue-500 font-cursive text-xl placeholder-gray-400 transition-colors"
                                placeholder="Write here...">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label class="block font-bold text-lg">Mood:</label>
                            <div class="relative">
                                <select
                                    class="w-full border-2 border-black rounded-lg py-2 px-4 bg-white font-cursive text-xl appearance-none focus:outline-none focus:shadow-[4px_4px_0_#000] transition-shadow cursor-pointer">
                                    <option>Super Happy!</option>
                                    <option>Feeling Blue...</option>
                                    <option>Meh.</option>
                                </select>
                                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xl">▼
                                </div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="block font-bold text-lg">Favorite Snack:</label>
                            <input list="snacks"
                                class="w-full border-2 border-black rounded-full py-2 px-4 bg-white font-cursive text-xl focus:outline-none focus:shadow-[4px_4px_0_#000] transition-shadow"
                                placeholder="Pick one...">
                            <datalist id="snacks">
                                <option value="Cookies"></option>
                                <option value="Chips"></option>
                                <option value="Candy"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-3">
                            <label class="block font-bold text-lg">Pen Color:</label>
                            <div class="flex gap-4">
                                <label class="cursor-pointer group relative">
                                    <input type="radio" name="color" class="peer sr-only" checked>
                                    <div
                                        class="w-8 h-8 rounded-full bg-blue-500 border-2 border-black group-hover:scale-110 transition-transform">
                                    </div>
                                    <div class="absolute -top-2 -right-2 text-2xl hidden peer-checked:block text-black">
                                        ✓</div>
                                </label>
                                <label class="cursor-pointer group relative">
                                    <input type="radio" name="color" class="peer sr-only">
                                    <div
                                        class="w-8 h-8 rounded-full bg-red-500 border-2 border-black group-hover:scale-110 transition-transform">
                                    </div>
                                    <div class="absolute -top-2 -right-2 text-2xl hidden peer-checked:block text-black">
                                        ✓</div>
                                </label>
                                <label class="cursor-pointer group relative">
                                    <input type="radio" name="color" class="peer sr-only">
                                    <div
                                        class="w-8 h-8 rounded-full bg-green-500 border-2 border-black group-hover:scale-110 transition-transform">
                                    </div>
                                    <div class="absolute -top-2 -right-2 text-2xl hidden peer-checked:block text-black">
                                        ✓</div>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between font-bold text-lg">
                                <label>Creativity:</label>
                                <span>100%</span>
                            </div>
                            <div class="relative h-4">
                                <div class="absolute top-1/2 left-0 w-full h-1 bg-black rounded-full -translate-y-1/2">
                                </div>
                                <input type="range"
                                    class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                <div
                                    class="absolute top-1/2 left-1/2 w-6 h-6 bg-white border-2 border-black rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none peer-active:scale-125 transition-transform shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
                                </div>
                            </div>
                        </div>

                        <button
                            class="w-full bg-black text-white font-bold text-xl py-3 rounded-lg hover:bg-gray-800 transition-colors transform hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none border-2 border-transparent hover:border-black">
                            Save Doodle
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

.font-cursive {
    font-family: 'Patrick Hand', cursive;
}

.scribble-underline {
    background-image: url("data:image/svg+xml,%3Csvg width='200' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 15 Q 50 25, 100 10 T 195 15' stroke='black' stroke-width='3' fill='none' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 20px;
}
</style>
