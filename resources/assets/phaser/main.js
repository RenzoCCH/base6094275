var game,squareSize, speed,updateDelay,cursors, speedTextValue;
var gameMode=2;

var Menu = {
    preload: function()
    {
        game.load.image('menu','./assets/images/menu.png');
    },
    create:function()
    {
        this.add.button(0, 0, 'menu',this.startGame,this);
    },
    startGame: function()
    {
        if(gameMode==1) this.state.start('Game');
        if(gameMode==2) this.state.start('Game2');
        if(gameMode==3) this.state.start('Gamem');
    }
};


game = new Phaser.Game(600, 450, Phaser.AUTO, 'snake-container');

game.state.add('Menu',Menu);
//game.state.add('Game', Game);
if(gameMode==1) game.state.add('Game', Game);
if(gameMode==2) game.state.add('Game2', Game2);
if(gameMode==3) game.state.add('Gamem', Gamem);

game.state.add('Game_Over', Game_Over);

game.state.start('Menu');






