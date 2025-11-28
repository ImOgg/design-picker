<template>
    <div class="min-h-full bg-[#050505] p-8 font-mono text-[#00f3ff] relative overflow-hidden">
        <!-- Grid Background -->
        <div class="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style="background-image: linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px); background-size: 40px 40px;">
        </div>

        <div class="relative z-10 max-w-5xl mx-auto">

            <!-- Header -->
            <header class="flex justify-between items-end mb-12 border-b border-[#00f3ff]/30 pb-4">
                <div>
                    <h1 class="text-5xl md:text-7xl font-bold text-[#fcee0a] uppercase tracking-tighter glitch-text"
                        data-text="NIGHT_CITY">NIGHT_CITY</h1>
                    <p class="text-[#ff003c] tracking-widest mt-2">SYSTEM_OVERRIDE // V.2.0.77</p>
                </div>
                <div class="hidden md:block text-right">
                    <div class="text-xs text-[#00f3ff]/70">NET_STATUS: CONNECTED</div>
                    <div class="text-xs text-[#00f3ff]/70">SEC_LEVEL: CRITICAL</div>
                    <div class="text-3xl font-bold text-[#fcee0a]">23:59</div>
                </div>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <!-- Left Panel: Info -->
                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-[#000]/80 border border-[#00f3ff] p-6 relative clip-path-corner">
                        <div class="absolute top-0 right-0 bg-[#00f3ff] text-black text-xs font-bold px-2 py-1">INFO
                        </div>
                        <h2 class="text-2xl font-bold text-[#fcee0a] mb-4">USER_DATA</h2>
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-20 h-20 bg-[#ff003c] relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop"
                                    class="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply">
                                <div class="absolute inset-0 bg-[#00f3ff]/20"></div>
                            </div>
                            <div>
                                <div class="text-white">NAME: V</div>
                                <div class="text-[#00f3ff]">REP: 50</div>
                                <div class="text-[#ff003c]">EDDIES: $0</div>
                            </div>
                        </div>
                        <p class="text-xs text-[#00f3ff]/70 leading-relaxed">
                            Cybernetic enhancements detected. Please calibrate your optical sensors.
                        </p>
                    </div>

                    <div class="bg-[#000]/80 border border-[#ff003c] p-6 relative">
                        <h3 class="text-[#ff003c] font-bold mb-2">WARNING</h3>
                        <p class="text-sm text-white">Unauthorized access attempt detected in Sector 7G.</p>
                        <button
                            class="mt-4 w-full bg-[#ff003c] text-black font-bold py-2 hover:bg-[#ff003c]/80 transition-colors uppercase clip-path-button">
                            Deploy Countermeasures
                        </button>
                    </div>
                </div>

                <!-- Right Panel: Controls -->
                <div class="lg:col-span-2">
                    <div class="bg-[#0a0a0a]/90 border-l-4 border-[#fcee0a] p-8 relative">
                        <div class="absolute -top-3 -left-[2px] text-[#fcee0a] text-xs bg-black px-2">INTERFACE_CONFIG
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <!-- Input -->
                            <div class="space-y-2">
                                <label class="block text-xs font-bold text-[#00f3ff] tracking-widest">CODENAME</label>
                                <div class="relative">
                                    <input type="text"
                                        class="w-full bg-[#050505] border border-[#00f3ff]/50 text-[#fcee0a] p-3 focus:outline-none focus:border-[#fcee0a] focus:shadow-[0_0_15px_rgba(252,238,10,0.3)] transition-all placeholder-[#00f3ff]/30"
                                        placeholder="ENTER_ALIAS">
                                    <div class="absolute right-0 bottom-0 w-2 h-2 bg-[#00f3ff]"></div>
                                </div>
                            </div>

                            <!-- Select -->
                            <div class="space-y-2">
                                <label class="block text-xs font-bold text-[#00f3ff] tracking-widest">FACTION</label>
                                <div class="relative">
                                    <select
                                        class="w-full bg-[#050505] border border-[#00f3ff]/50 text-[#fcee0a] p-3 appearance-none focus:outline-none focus:border-[#fcee0a] cursor-pointer">
                                        <option>CORPO</option>
                                        <option>NOMAD</option>
                                        <option>STREET KID</option>
                                    </select>
                                    <div
                                        class="absolute right-3 top-1/2 -translate-y-1/2 text-[#00f3ff] pointer-events-none">
                                        ▼</div>
                                </div>
                            </div>

                            <!-- Combobox -->
                            <div class="space-y-2 md:col-span-2">
                                <label class="block text-xs font-bold text-[#00f3ff] tracking-widest">CYBERWARE</label>
                                <div class="relative group">
                                    <input list="cyberware"
                                        class="w-full bg-[#050505] border border-[#00f3ff]/50 text-[#fcee0a] p-3 focus:outline-none focus:border-[#fcee0a] transition-all"
                                        placeholder="SEARCH_UPGRADES...">
                                    <datalist id="cyberware">
                                        <option value="Mantis Blades"></option>
                                        <option value="Gorilla Arms"></option>
                                        <option value="Kiroshi Optics"></option>
                                        <option value="Sandevistan"></option>
                                    </datalist>
                                    <div
                                        class="absolute left-0 bottom-0 h-[1px] w-0 bg-[#fcee0a] transition-all group-focus-within:w-full">
                                    </div>
                                </div>
                            </div>

                            <!-- Radio -->
                            <div class="space-y-2 md:col-span-2">
                                <label
                                    class="block text-xs font-bold text-[#00f3ff] tracking-widest">OPERATING_MODE</label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="cursor-pointer relative group">
                                        <input type="radio" name="mode" class="peer sr-only" checked>
                                        <div
                                            class="bg-[#050505] border border-[#00f3ff]/50 px-6 py-2 text-[#00f3ff] peer-checked:bg-[#00f3ff] peer-checked:text-black font-bold transition-all clip-path-button">
                                            STEALTH</div>
                                    </label>
                                    <label class="cursor-pointer relative group">
                                        <input type="radio" name="mode" class="peer sr-only">
                                        <div
                                            class="bg-[#050505] border border-[#00f3ff]/50 px-6 py-2 text-[#00f3ff] peer-checked:bg-[#fcee0a] peer-checked:text-black peer-checked:border-[#fcee0a] font-bold transition-all clip-path-button">
                                            COMBAT</div>
                                    </label>
                                    <label class="cursor-pointer relative group">
                                        <input type="radio" name="mode" class="peer sr-only">
                                        <div
                                            class="bg-[#050505] border border-[#00f3ff]/50 px-6 py-2 text-[#00f3ff] peer-checked:bg-[#ff003c] peer-checked:text-black peer-checked:border-[#ff003c] font-bold transition-all clip-path-button">
                                            NETRUNNER</div>
                                    </label>
                                </div>
                            </div>

                            <!-- Slider -->
                            <div class="space-y-2 md:col-span-2">
                                <div class="flex justify-between text-xs font-bold text-[#00f3ff]">
                                    <label>OVERCLOCK</label>
                                    <span>120%</span>
                                </div>
                                <input type="range"
                                    class="w-full h-2 bg-[#050505] border border-[#00f3ff]/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#fcee0a] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black">
                            </div>

                            <div class="md:col-span-2 mt-4">
                                <button
                                    class="w-full bg-[#fcee0a] text-black font-bold text-xl py-4 hover:bg-[#fff] hover:shadow-[0_0_20px_rgba(252,238,10,0.5)] transition-all clip-path-button tracking-widest">
                                    INITIATE_LINK
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.clip-path-corner {
    clip-path: polygon(0 0,
            100% 0,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0 100%);
}

.clip-path-button {
    clip-path: polygon(10px 0,
            100% 0,
            100% calc(100% - 10px),
            calc(100% - 10px) 100%,
            0 100%,
            0 10px);
}

.glitch-text {
    position: relative;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 #ff003c;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
    left: -2px;
    text-shadow: -1px 0 #00f3ff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% {
        clip: rect(31px, 9999px, 94px, 0);
    }

    20% {
        clip: rect(6px, 9999px, 4px, 0);
    }

    40% {
        clip: rect(87px, 9999px, 99px, 0);
    }

    60% {
        clip: rect(13px, 9999px, 63px, 0);
    }

    80% {
        clip: rect(55px, 9999px, 14px, 0);
    }

    100% {
        clip: rect(79px, 9999px, 36px, 0);
    }
}

@keyframes glitch-anim2 {
    0% {
        clip: rect(65px, 9999px, 96px, 0);
    }

    20% {
        clip: rect(2px, 9999px, 86px, 0);
    }

    40% {
        clip: rect(33px, 9999px, 5px, 0);
    }

    60% {
        clip: rect(98px, 9999px, 14px, 0);
    }

    80% {
        clip: rect(12px, 9999px, 58px, 0);
    }

    100% {
        clip: rect(45px, 9999px, 82px, 0);
    }
}
</style>
