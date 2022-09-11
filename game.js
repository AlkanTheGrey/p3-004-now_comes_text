const COLORS = {
  rich_black_fogra_29: 0x0d1b2a,
  oxford_blue: 0x1b263b,
  bdazzled_blue: 0x415a77,
  shadow_blue: 0x778da9,
  platinum: 0xe0e1dd,
  orange_pantone: 0xff9662
  
}
const GAME_CONFIG = {
  type: Phaser.AUTO,
  width: 512,
  height: 256,
  backgroundColor: COLORS.rich_black_fogra_29,
  parent:  document.getElementById( "game-container" ),
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  pixelArt: true,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

let game = new Phaser.Game( GAME_CONFIG );

/**Handles code that is executed before the scene's Ready
 * state. Includes actions such as fetching resources to
 * be used in the scene.
 */
function preload(){

  return;
}

/**Handles code executed once all external resources have
 * been acquired, it is run once at the start of the scene
 * once the scene is in the ready state.
 */
function create(){

  // add text game object to our game
  let header = "Click W to increment counter";
  this.header_text = this.add.text( 256, 64, header, { fontFamily: 'Rampart One, cursive', fontSize: "42px" } );
  this.header_text.setOrigin( 0.5, 0.5 );

  // keep track of how many times w is pressed
  this.click_count = 0;

  // text to display the click count
  this.click_count_text = this.add.text( 256, 128, "0", { fontFamily: 'Rampart One, cursive', fontSize: "64px" } );
  this.click_count_text.setOrigin( 0.5, 0.5 );

  // set up the w key and set an event listener for every time
  // w is pressed.
  this.key_w = this.input.keyboard.addKey( "W" );
  this.key_w.on(
    "down",
    function( ){
      this.click_count += 1;
      this.click_count_text.setText( this.click_count.toString() );
    },
    this
  )

  return;
}

/**This is the code executed on the main game loop, it is executed
 * once per update.
 */
function update(){

  return;
}