<template>
    <div
        class="min-h-full bg-gradient-to-br from-[#4facfe] to-[#00f2fe] p-8 font-sans text-white flex justify-center items-center relative overflow-hidden">

        <!-- Background Blobs -->
        <div
            class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob">
        </div>
        <div
            class="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000">
        </div>
        <div
            class="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000">
        </div>

        <div class="max-w-4xl w-full relative z-10">

            <!-- Header -->
            <header class="text-center mb-12">
                <h1 class="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Glassmorphism</h1>
                <p class="text-xl font-medium opacity-90">Translucent, blurry, and floating.</p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Info Card -->
                <div class="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl">
                    <h2 class="text-3xl font-bold mb-6">What is it?</h2>
                    <p class="text-lg leading-relaxed mb-6">
                        Glassmorphism creates a "through the glass" look. It uses translucency (background-blur) to
                        create depth and context. It mimics the look of frosted glass, often floating above a colorful
                        background.
                    </p>
                    <button
                        class="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                        Explore
                    </button>
                </div>

                <!-- Form Elements -->
                <div class="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl">
                    <h3 class="text-2xl font-bold mb-8 text-center">Glass Forms</h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-2">
                            <label class="ml-1 font-bold text-sm uppercase tracking-wider opacity-80">Username</label>
                            <input type="text"
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:bg-white/10 focus:border-white/30 transition-all placeholder-white/50 text-white"
                                placeholder="glass_user">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label
                                class="ml-1 font-bold text-sm uppercase tracking-wider opacity-80">Transparency</label>
                            <div class="relative">
                                <select
                                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl appearance-none focus:outline-none focus:bg-white/10 focus:border-white/30 cursor-pointer text-white">
                                    <option class="bg-gray-800 text-white">High</option>
                                    <option class="bg-gray-800 text-white">Medium</option>
                                    <option class="bg-gray-800 text-white">Low</option>
                                </select>
                                <div
                                    class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">
                                    ▼</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="ml-1 font-bold text-sm uppercase tracking-wider opacity-80">Effect</label>
                            <input list="effects"
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:bg-white/10 focus:border-white/30 transition-all placeholder-white/50 text-white"
                                placeholder="Choose effect...">
                            <datalist id="effects">
                                <option value="Blur"></option>
                                <option value="Frost"></option>
                                <option value="Noise"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-3">
                            <label class="ml-1 font-bold text-sm uppercase tracking-wider opacity-80">Mode</label>
                            <div class="flex gap-4">
                                <label class="cursor-pointer flex items-center gap-2 group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-white transition-colors">
                                        <div class="w-2.5 h-2.5 rounded-full bg-white opacity-0 transition-opacity"
                                            :class="{ 'opacity-100': true }"></div>
                                    </div>
                                    <input type="radio" name="mode" class="sr-only" checked>
                                    <span class="font-medium">Light</span>
                                </label>
                                <label class="cursor-pointer flex items-center gap-2 group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-white transition-colors">
                                        <div class="w-2.5 h-2.5 rounded-full bg-white opacity-0 transition-opacity">
                                        </div>
                                    </div>
                                    <input type="radio" name="mode" class="sr-only">
                                    <span class="font-medium">Dark</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div
                                class="flex justify-between ml-1 font-bold text-sm uppercase tracking-wider opacity-80">
                                <label>Blur Strength</label>
                                <span>100%</span>
                            </div>
                            <input type="range"
                                class="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform">
                        </div>

                        <button
                            class="w-full py-3 mt-4 bg-white text-blue-500 font-bold text-lg rounded-xl shadow-lg hover:bg-blue-50 transition-colors active:scale-95">
                            Apply Effect
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}
</style>
