

var Game2 = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('snake1', './assets/images/snake1.png');
        game.load.image('snake2', './assets/images/snake2.png');
        game.load.image('apple', './assets/images/apple.png');
        game.load.image('orange', './assets/images/orange.png');
        game.load.image('banana', './assets/images/banana.png');
        game.load.spritesheet('boom', 'assets/images/boom.png', 15, 15,7);
    },
    create : function() {
        squareSize = 15;                // The length of a side of the squares. Our image is 15x15 pixels.
        speed = 0;                      // Game speed.
        updateDelay = 0;                // A variable for control over update rates.
        countover = 20;
        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
        snake1= new Snake('Player 1','snake1',1);
        snake2= new Snake('Player 2','snake2',4);
        snake1.generateScore(textStyle_Key, textStyle_Value, 10, 10);
        snake2.generateScore(textStyle_Key, textStyle_Value, 10, 25);
        apple= new Fruit('apple',3);
        orange= new Fruit('orange',2);
        banana= new Fruit('banana',1);
        snakes = [snake1,snake2];

        cursors = game.input.keyboard.createCursorKeys();
        //-------------------------------for second player
        player2up = game.input.keyboard.addKey(Phaser.Keyboard.W);
        player2down = game.input.keyboard.addKey(Phaser.Keyboard.S);
        player2left = game.input.keyboard.addKey(Phaser.Keyboard.A);
        player2right = game.input.keyboard.addKey(Phaser.Keyboard.D);


        game.stage.backgroundColor = '#061f27';
        // Speed.

        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

    },
    update: function() {

        //----------------------------------controls

        if (cursors.right.isDown && snake1.direction!='left')
        {
            snake1.newdirection = 'right';
        }
        else if (cursors.left.isDown && snake1.direction!='right')
        {
            snake1.newdirection = 'left';
        }
        else if (cursors.up.isDown && snake1.direction!='down')
        {
            snake1.newdirection = 'up';
        }
        else if (cursors.down.isDown && snake1.direction!='up')
        {
            snake1.newdirection = 'down';
        }




        if (player2right.isDown &&  snake2.direction !='left')
        {
            snake2.newdirection = 'right';
        }
        else if (player2left.isDown && snake2.direction!='right')
        {
            snake2.newdirection = 'left';
        }
        else if (player2up.isDown && snake2.direction!='down')
        {
            snake2.newdirection = 'up';
        }
        else if (player2down.isDown && snake2.direction!='up')
        {
            snake2.newdirection = 'down';
        }


        // A formula to calculate game speed based on the score.
        // The higher the score, the higher the game speed, with a maximum of 10;
        speed = Math.min(10, Math.floor((snake1.score + snake2.score)/5));

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
            snake1.move();
            snake1.grow();
            snake2.move();
            snake2.grow();

            // Check for apple collision.
            fruitCollision(snake1,apple);
            fruitCollision(snake1,orange);
            fruitCollision(snake1,banana);

            fruitCollision(snake2,apple);
            fruitCollision(snake2,orange);
            fruitCollision(snake2,banana);

            // Check for collision with self. Parameter is the head of the snake.
            snakeCollision(snake1,snake1);
            snakeCollision(snake1,snake2);
            snakeCollision(snake2,snake2);
            snakeCollision(snake2,snake1);

            //// Check with collision with wall. Parameter is the head of the snake.
            wallCollision(snake1);
            wallCollision(snake2);

            if (!snake1.alive || !snake2.alive) {
                countover--;
                if(countover==0)
                {
                    game.state.start('Game_Over',true,true,snakes);
                }
            }

        }

    }



};