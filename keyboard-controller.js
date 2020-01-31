class KeyboardController {
  constructor (game) {
    this.game = game;
  }

  setKeyBindings () {
    const reactToKeyPress = this.reactToKeyPress.bind(this);

    window.addEventListener('keydown', reactToKeyPress);
  }

  reactToKeyPress (event) {
    const key = event.key;
    
    switch (key) {
      case 'ArrowUp':
        event.preventDefault();
        this.game.control('up');
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.game.control('down');
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.game.control('left');
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.game.control('right');
        break;
      case 'F':
        event.preventDefault();
        this.game.control('shoot');
        break;

    }
  }
}
