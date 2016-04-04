

var Gamem = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('snake1', './assets/images/snake1.png');
        game.load.image('snake2', './assets/images/snake2.png');
        game.load.image('snake3', './assets/images/snake3.png');
        game.load.image('snake4', './assets/images/snake4.png');
        game.load.image('snake5', './assets/images/snake5.png');
        game.load.image('snake6', './assets/images/snake6.png');
        game.load.image('snake7', './assets/images/snake7.png');
        game.load.image('snake8', './assets/images/snake8.png');
        game.load.image('apple', './assets/images/apple.png');
        game.load.image('orange', './assets/images/orange.png');
        game.load.image('banana', './assets/images/banana.png');
        game.load.spritesheet('boom', 'assets/images/boom.png', 15, 15,7);
    },
    create : function() {
        squareSize = 15;                // The length of a side of the squares. Our image is 15x15 pixels.
        speed = 0;                      // Game speed.
        updateDelay = 0;                // A variable for control over update rates.
        numberplayers=8;
        player=1;
        countover = 20;
        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
        snakes = [];
        scorespace=10;

        for(var i=0; i<numberplayers;i++)
        {
            snakes[i]= new Snake('Player '+ (i+1),'snake'+(i+1),(i+1));
            //snakes[i].generateScore(textStyle_Key, textStyle_Value, 10, scorespace);
            scorespace=scorespace+15;
        }
        apple= new Fruit('apple',3);
        orange= new Fruit('orange',2);
        banana= new Fruit('banana',1);


        cursors = game.input.keyboard.createCursorKeys();

        game.stage.backgroundColor = '#061f27';
        // Speed.

        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

        player--;

    },
    update: function() {

        //----------------------------------controls

        if (cursors.right.isDown && snakes[player].direction!='left')
        {
            snakes[player].newdirection = 'right';
        }
        else if (cursors.left.isDown && snakes[player].direction!='right')
        {
            snakes[player].newdirection = 'left';
        }
        else if (cursors.up.isDown && snakes[player].direction!='down')
        {
            snakes[player].newdirection = 'up';
        }
        else if (cursors.down.isDown && snakes[player].direction!='up')
        {
            snakes[player].newdirection = 'down';
        }

        // A formula to calculate game speed based on the score.
        // The higher the score, the higher the game speed, with a maximum of 10;
        speed = Math.min(10, Math.floor(snakes[0].score/5));

        // Update speed value on game screen.
        speedTextValue.text = '' + speed;

        // Since the update function of Phaser has an update rate of around 60 FPS,
        // we need to slow that down make the game playable.

        // Increase a counter on every update call.
        updateDelay++;

        // Do game stuff only if the counter is aliquot to (10 - the game speed).
        // The higher the speed, the more frequently this is fulfilled,
        // making the snake move faster.
        if (updateDelay % (10 - speed) == 0) {
            var survivors = 0;
            for(var i=0; i<numberplayers;i++)
            {
                snakes[i].move();
                snakes[i].grow();
                fruitCollision(snakes[i],apple);
                fruitCollision(snakes[i],orange);
                fruitCollision(snakes[i],banana);
                wallCollision(snakes[i]);
                for(var j=0; j<numberplayers;j++) {
                    snakeCollision(snakes[i],snakes[j]);
                }
                if (snakes[i].alive) survivors++;
            }
            if(survivors<2)
            {
                countover--;
                if(countover==0)
                {
                    game.state.start('Game_Over',true,true,snakes);
                }
            }
        }

    }



};