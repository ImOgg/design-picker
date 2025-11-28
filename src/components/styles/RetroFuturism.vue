<template>
    <div class="min-h-full bg-[#120024] p-8 font-sans text-white relative overflow-hidden flex flex-col items-center">

        <!-- Retro Grid Background -->
        <div
            class="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#ff00cc]/20 to-transparent z-0 perspective-grid">
        </div>

        <!-- Sun -->
        <div
            class="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-t from-[#ff00cc] to-[#ffcc00] z-0 blur-sm shadow-[0_0_50px_#ff00cc]">
        </div>

        <div class="relative z-10 max-w-4xl w-full">

            <!-- Header -->
            <header class="text-center mb-16">
                <h1
                    class="text-6xl md:text-8xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#00ffff] to-[#ff00cc] drop-shadow-[0_0_10px_rgba(255,0,204,0.8)] transform -skew-x-12">
                    SYNTHWAVE
                </h1>
                <p class="text-[#00ffff] text-xl tracking-[0.5em] mt-4 uppercase font-bold text-shadow-neon">
                    The Future is Now
                </p>
            </header>

            <!-- Main Card -->
            <div
                class="bg-[#2a0044]/80 backdrop-blur-md border border-[#ff00cc] p-8 rounded-xl shadow-[0_0_20px_rgba(255,0,204,0.3)]">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <!-- Visuals -->
                    <div class="space-y-6">
                        <div
                            class="aspect-video bg-black rounded-lg border-2 border-[#00ffff] relative overflow-hidden group">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-[#ff00cc]/20 to-[#00ffff]/20 group-hover:opacity-0 transition-opacity">
                            </div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-16 h-16 border-4 border-[#ff00cc] rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        <div class="flex justify-between items-center border-b border-[#00ffff]/30 pb-4">
                            <span class="text-[#00ffff] font-bold">TRACK 01</span>
                            <span class="text-[#ff00cc] font-bold">NIGHTCALL</span>
                        </div>

                        <div class="flex gap-4">
                            <button
                                class="flex-1 bg-gradient-to-r from-[#ff00cc] to-[#3333ff] py-3 rounded font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(255,0,204,0.5)]">
                                Play
                            </button>
                            <button
                                class="flex-1 border border-[#00ffff] text-[#00ffff] py-3 rounded font-bold uppercase tracking-wider hover:bg-[#00ffff]/10 transition-colors text-shadow-neon">
                                Download
                            </button>
                        </div>
                    </div>

                    <!-- Forms -->
                    <div class="space-y-6">
                        <h2 class="text-2xl font-bold text-[#ff00cc] uppercase tracking-wider mb-6 text-shadow-neon">
                            System Control</h2>

                        <!-- Input -->
                        <div class="space-y-2">
                            <label class="text-[#00ffff] text-sm font-bold uppercase tracking-widest">User ID</label>
                            <input type="text"
                                class="w-full bg-[#120024] border border-[#ff00cc] rounded p-3 text-white focus:outline-none focus:border-[#00ffff] focus:shadow-[0_0_10px_#00ffff] transition-all placeholder-[#ff00cc]/50"
                                placeholder="NEON_RIDER">
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label
                                class="text-[#00ffff] text-sm font-bold uppercase tracking-widest">Destination</label>
                            <div class="relative">
                                <select
                                    class="w-full bg-[#120024] border border-[#ff00cc] rounded p-3 text-white appearance-none focus:outline-none focus:border-[#00ffff] focus:shadow-[0_0_10px_#00ffff] transition-all cursor-pointer">
                                    <option>MIAMI 1984</option>
                                    <option>TOKYO 2077</option>
                                    <option>LA 2019</option>
                                </select>
                                <div
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff00cc] pointer-events-none">
                                    ▼</div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-2">
                            <label class="text-[#00ffff] text-sm font-bold uppercase tracking-widest">Vehicle</label>
                            <input list="cars"
                                class="w-full bg-[#120024] border border-[#ff00cc] rounded p-3 text-white focus:outline-none focus:border-[#00ffff] focus:shadow-[0_0_10px_#00ffff] transition-all"
                                placeholder="SELECT RIDE...">
                            <datalist id="cars">
                                <option value="DeLorean DMC-12"></option>
                                <option value="Lamborghini Countach"></option>
                                <option value="Ferrari Testarossa"></option>
                                <option value="Lotus Esprit"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-2">
                            <label class="text-[#00ffff] text-sm font-bold uppercase tracking-widest">Radio
                                Station</label>
                            <div class="flex flex-col gap-2">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-[#ff00cc] flex items-center justify-center group-hover:border-[#00ffff] transition-colors">
                                        <input type="radio" name="station" class="peer sr-only" checked>
                                        <div
                                            class="w-2.5 h-2.5 rounded-full bg-[#00ffff] hidden peer-checked:block shadow-[0_0_5px_#00ffff]">
                                        </div>
                                    </div>
                                    <span class="text-white group-hover:text-[#00ffff] transition-colors">FM 84.0 -
                                        SYNTH</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        class="w-5 h-5 rounded-full border-2 border-[#ff00cc] flex items-center justify-center group-hover:border-[#00ffff] transition-colors">
                                        <input type="radio" name="station" class="peer sr-only">
                                        <div
                                            class="w-2.5 h-2.5 rounded-full bg-[#00ffff] hidden peer-checked:block shadow-[0_0_5px_#00ffff]">
                                        </div>
                                    </div>
                                    <span class="text-white group-hover:text-[#00ffff] transition-colors">AM 19.8 -
                                        RETRO</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between text-[#00ffff] text-sm font-bold">
                                <label>BASS BOOST</label>
                                <span>MAX</span>
                            </div>
                            <input type="range"
                                class="w-full h-2 bg-[#120024] border border-[#ff00cc] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ffff] [&::-webkit-slider-thumb]:shadow-[0_0_10px_#00ffff] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-grid {
    background-image:
        linear-gradient(to right, rgba(255, 0, 204, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 0, 204, 0.3) 1px, transparent 1px);
    background-size: 40px 40px;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: bottom;
}

.text-shadow-neon {
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.5);
}
</style>
