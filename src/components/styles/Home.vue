<template>
  <div class="home-container">
    <h1>Web Design Style Templates</h1>
    <p>Select a style from the sidebar to view the template.</p>
    <div class="style-grid">
      <router-link to="/y2k" class="style-card y2k">Y2K</router-link>
      <router-link to="/bento" class="style-card bento">Bento Box</router-link>
      <router-link to="/pixel" class="style-card pixel">Pixel Art</router-link>
      <router-link to="/bauhaus" class="style-card bauhaus">Bauhaus</router-link>
      <router-link to="/cyberpunk" class="style-card cyberpunk">Cyberpunk</router-link>
      <router-link to="/retro" class="style-card retro">Retro Futurism</router-link>
      <router-link to="/swiss" class="style-card swiss">Swiss Style</router-link>
      <router-link to="/ios" class="style-card ios">iOS Style</router-link>
      <router-link to="/material" class="style-card material">Material Design</router-link>
      <router-link to="/neumorphism" class="style-card neumorphism">Neumorphism</router-link>
      <router-link to="/brutalism" class="style-card brutalism">Brutalism</router-link>
      <router-link to="/art-deco" class="style-card art-deco">Art Deco</router-link>
      <router-link to="/nature" class="style-card nature">Nature</router-link>
      <router-link to="/magazine" class="style-card magazine">Magazine</router-link>
      <router-link to="/hand-drawn" class="style-card hand-drawn">Hand Drawn</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem;
  text-align: center;
}

.style-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.style-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background: #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.2s;
}

.style-card:hover {
  transform: scale(1.05);
}

/* Quick previews of styles */
.y2k {
  background: #ff00ff;
  color: #fff;
  font-family: 'Courier New', monospace;
}

.bento {
  background: #f4f4f4;
  border: 2px solid #ddd;
}

.pixel {
  background: #000;
  color: #0f0;
  font-family: monospace;
  border: 4px solid #0f0;
}

.bauhaus {
  background: #d22630;
  color: #fff;
  border-radius: 0;
}

.cyberpunk {
  background: #0b0b0b;
  color: #0ff;
  border: 1px solid #0ff;
}

.retro {
  background: linear-gradient(45deg, #ff00cc, #3333ff);
  color: #fff;
}

.swiss {
  background: #fff;
  color: #000;
  border: 1px solid #000;
  text-align: left;
  padding: 1rem;
  align-items: flex-start;
}

.ios {
  background: #f2f2f7;
  color: #007aff;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.material {
  background: #6200ee;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.neumorphism {
  background: #e0e5ec;
  color: #4d4d4d;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.brutalism {
  background: #ff0000;
  color: #000;
  font-weight: 900;
  border: 4px solid #000;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
}

.art-deco {
  background: #000;
  color: #d4af37;
  border: 2px solid #d4af37;
  font-family: serif;
}

.nature {
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 20px 0 20px 0;
}

.magazine {
  background: #fff;
  color: #000;
  font-family: 'Times New Roman', serif;
  font-style: italic;
  border-bottom: 4px solid #000;
}

.hand-drawn {
  background: #fff;
  color: #333;
  font-family: 'Comic Sans MS', cursive;
  border: 2px dashed #333;
  transform: rotate(-2deg);
}
</style>
