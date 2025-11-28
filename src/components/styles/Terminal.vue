<template>
    <div class="min-h-full bg-black p-8 font-mono text-[#0f0] overflow-hidden relative">

        <!-- CRT Scanlines Effect -->
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none">
        </div>
        <div class="absolute inset-0 bg-black opacity-10 animate-pulse z-10 pointer-events-none"></div>

        <div class="max-w-4xl mx-auto relative z-30">

            <!-- Header -->
            <header class="mb-12 border-b border-[#0f0] pb-4">
                <h1 class="text-4xl md:text-6xl font-bold mb-2 glitch" data-text="SYSTEM_ROOT">SYSTEM_ROOT</h1>
                <p class="text-sm md:text-base opacity-80 typing-effect">
                    > Initializing interface...<br>
                    > Loading modules... [OK]<br>
                    > Access granted.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Terminal Output -->
                <div class="border border-[#0f0] p-6 bg-black/80 shadow-[0_0_10px_#0f0]">
                    <div class="flex justify-between border-b border-[#0f0] pb-2 mb-4">
                        <span>TERMINAL_V1.0</span>
                        <span>UID: 8472</span>
                    </div>
                    <div class="space-y-2 text-sm">
                        <p>> <span class="text-white">whoami</span></p>
                        <p class="opacity-80">guest_user</p>
                        <p>> <span class="text-white">uptime</span></p>
                        <p class="opacity-80">14 days, 3:22</p>
                        <p>> <span class="text-white">cat description.txt</span></p>
                        <p class="opacity-80 leading-relaxed">
                            This interface mimics early computer terminals. High contrast, monospaced fonts, and a
                            distinct lack of graphical user interface elements. Pure function.
                        </p>
                        <p class="animate-pulse">_</p>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="border border-[#0f0] p-6 bg-black/80 shadow-[0_0_10px_#0f0]">
                    <h3 class="text-xl font-bold mb-6 border-b border-[#0f0] inline-block pb-1">> INPUT_DATA</h3>

                    <div class="space-y-6">

                        <!-- Input -->
                        <div class="space-y-1">
                            <label class="block text-xs uppercase tracking-widest opacity-70">Command:</label>
                            <div class="flex items-center border border-[#0f0] bg-black px-2">
                                <span class="mr-2">></span>
                                <input type="text"
                                    class="w-full bg-transparent border-none py-2 text-[#0f0] focus:outline-none font-mono placeholder-[#0f0]/30"
                                    placeholder="enter_cmd">
                            </div>
                        </div>

                        <!-- Select -->
                        <div class="space-y-1">
                            <label class="block text-xs uppercase tracking-widest opacity-70">Protocol:</label>
                            <div class="relative border border-[#0f0] bg-black">
                                <select
                                    class="w-full bg-black text-[#0f0] py-2 px-2 appearance-none focus:outline-none cursor-pointer font-mono">
                                    <option>SSH (Secure Shell)</option>
                                    <option>FTP (File Transfer)</option>
                                    <option>TELNET (Insecure)</option>
                                </select>
                                <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#0f0]">v
                                </div>
                            </div>
                        </div>

                        <!-- Combobox -->
                        <div class="space-y-1">
                            <label class="block text-xs uppercase tracking-widest opacity-70">Target System:</label>
                            <div class="flex items-center border border-[#0f0] bg-black px-2">
                                <span class="mr-2">@</span>
                                <input list="systems"
                                    class="w-full bg-transparent border-none py-2 text-[#0f0] focus:outline-none font-mono placeholder-[#0f0]/30"
                                    placeholder="192.168.0.1">
                            </div>
                            <datalist id="systems">
                                <option value="Mainframe"></option>
                                <option value="Proxy_Server"></option>
                                <option value="Gateway"></option>
                            </datalist>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-2">
                            <label class="block text-xs uppercase tracking-widest opacity-70">Mode:</label>
                            <div class="flex flex-col gap-2">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <div class="w-4 h-4 border border-[#0f0] flex items-center justify-center">
                                        <input type="radio" name="mode" class="peer sr-only" checked>
                                        <div class="w-2 h-2 bg-[#0f0] hidden peer-checked:block shadow-[0_0_5px_#0f0]">
                                        </div>
                                    </div>
                                    <span class="group-hover:bg-[#0f0] group-hover:text-black px-1 transition-colors">[
                                        READ_ONLY ]</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <div class="w-4 h-4 border border-[#0f0] flex items-center justify-center">
                                        <input type="radio" name="mode" class="peer sr-only">
                                        <div class="w-2 h-2 bg-[#0f0] hidden peer-checked:block shadow-[0_0_5px_#0f0]">
                                        </div>
                                    </div>
                                    <span class="group-hover:bg-[#0f0] group-hover:text-black px-1 transition-colors">[
                                        WRITE ]</span>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-1">
                            <div class="flex justify-between text-xs uppercase tracking-widest opacity-70">
                                <label>Processing_Power</label>
                                <span>100%</span>
                            </div>
                            <input type="range"
                                class="w-full h-2 bg-[#333] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#0f0] [&::-webkit-slider-thumb]:shadow-[0_0_10px_#0f0] [&::-webkit-slider-thumb]:border border-black">
                        </div>

                        <button
                            class="w-full border border-[#0f0] py-3 uppercase tracking-widest hover:bg-[#0f0] hover:text-black hover:shadow-[0_0_15px_#0f0] transition-all font-bold mt-4">
                            EXECUTE
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.glitch {
    position: relative;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
}

.glitch::before {
    left: 2px;
    text-shadow: -1px 0 red;
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: -1px 0 blue;
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% {
        clip: rect(17px, 9999px, 94px, 0);
    }

    20% {
        clip: rect(59px, 9999px, 42px, 0);
    }

    40% {
        clip: rect(29px, 9999px, 86px, 0);
    }

    60% {
        clip: rect(78px, 9999px, 12px, 0);
    }

    80% {
        clip: rect(12px, 9999px, 56px, 0);
    }

    100% {
        clip: rect(65px, 9999px, 34px, 0);
    }
}

@keyframes glitch-anim-2 {
    0% {
        clip: rect(12px, 9999px, 56px, 0);
    }

    20% {
        clip: rect(65px, 9999px, 34px, 0);
    }

    40% {
        clip: rect(17px, 9999px, 94px, 0);
    }

    60% {
        clip: rect(59px, 9999px, 42px, 0);
    }

    80% {
        clip: rect(29px, 9999px, 86px, 0);
    }

    100% {
        clip: rect(78px, 9999px, 12px, 0);
    }
}
</style>
