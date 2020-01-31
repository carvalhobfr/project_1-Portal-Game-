const imageUrls = [];

for (let i = 1; i <= 3; i++) {
  imageUrls.push(`./images/background/plx-${i}.png`);
}

const backgroundLayers = imageUrls.map(url => {
  const image = new Image();
  image.src = url;
  return image;
});

class Background {
  constructor(game) {
    this.game = game;
  }

  paint() {
    const context = this.game.context;
    const $canvas = context.canvas;

    const width = $canvas.width;
    const height = $canvas.height;

    const distance = this.game.player.position.x;

    for (let i = 0; i < backgroundLayers.length; i++) {
      const layer = backgroundLayers[i];
      const outset = (distance * i / 5) % width;
      context.drawImage(layer, -outset, 0, width, height);
      context.drawImage(layer, -outset + width, 0, width, height);
    }
  }
}