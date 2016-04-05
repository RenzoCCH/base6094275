
var Snake= function (player,skin,startPosition)
{
        this.name=player || 'player',
        this.body=[],
        this.initialBody=8,
        this.bodySkin=skin || 'snake',
        this.score=0,
        this.direction='',
        this.newdirection=null,
        this.addNew=0,
        this.scoreTextValue='',
        this.oldLastCellx=0,
        this.oldLastCelly=0;
        this.startPosition=startPosition || 1;
        this.alive=true;

        switch (this.startPosition)
        {
            case 1:
                this.startPositiony=90;
                this.direction= 'right';
                break;
            case 2:
                this.startPositiony=180;
                this.direction= 'right';
                break;
            case 3:
                this.startPositiony=270;
                this.direction= 'right';
                break;
            case 4:
                this.startPositiony=360;
                this.direction= 'right';
                break;
            case 5:
                this.startPositiony=90;
                this.direction= 'left';
                break;
            case 6:
                this.startPositiony=180;
                this.direction= 'left';
                break;
            case 7:
                this.startPositiony=270;
                this.direction= 'left';
                break;
            case 8:
                this.startPositiony=360;
                this.direction= 'left';
                break;
        }

    this.getFirstCell = function()
    {
        return this.body[this.body.length - 1];
    }
    this.getLastCell =function ()
    {
        return this.body.shift();
    }

    this.move = function()
    {
        if(this.alive)
        {
            lastCell = this.getLastCell(),
                firstCell = this.getFirstCell();
            this.oldLastCellx=lastCell.x,
                this.oldLastCelly=lastCell.y;
            if(this.direction == 'right'){

                lastCell.x = firstCell.x + 15;
                lastCell.y = firstCell.y;
            }
            else if(this.direction == 'left'){
                lastCell.x = firstCell.x - 15;
                lastCell.y = firstCell.y;
            }
            else if(this.direction== 'up'){
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y - 15;
            }
            else if(this.direction == 'down'){
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y + 15;
            }

            if(this.newdirection){
                this.direction = this.newdirection;
                this.newdirection = null;
            }

            if(this.direction == 'right'){

                lastCell.x = firstCell.x + 15;
                lastCell.y = firstCell.y;
            }
            else if(this.direction == 'left'){
                lastCell.x = firstCell.x - 15;
                lastCell.y = firstCell.y;
            }
            else if(this.direction == 'up'){
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y - 15;
            }
            else if(this.direction == 'down'){
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y + 15;
            }


            // Place the last cell in the front of the stack.
            // Mark it the first cell.

            this.body.push(lastCell);
            firstCell = lastCell;
        }


    }

    this.generateBody = function ()
    {
        for(var i = 0; i < this.initialBody; i++){
            if(this.direction=='right')
            {
                this.body[i] = game.add.sprite(15+i*squareSize, this.startPositiony, this.bodySkin);
            }
            else
            {
                this.body[i] = game.add.sprite(570-i*squareSize, this.startPositiony, this.bodySkin);
            }
        }
    }
    this.generateScore = function (styleKey,styleValue,x,y)
    {
        game.add.text(x, y, this.name+': ' , styleKey);
        this.scoreTextValue = game.add.text(x+70, y-2, this.score.toString(), styleValue);
    }

    this.grow = function ()
    {
        if(this.addNew>0){
            this.body.unshift(game.add.sprite(this.oldLastCellx, this.oldLastCelly, this.bodySkin));
            this.addNew--;
        }
    }
    this.snakeDie = function ()
    {

        var length=this.body.length;
        for(var i = 0; i < length; i++){

            //if(this.body[i].alive) alert(this.body[i].alive);
            this.body[i].loadTexture('boom', 0);

            var cellkill=this.body[i].animations.add('explode');
            cellkill.killOnComplete = true;
            this.body[i].animations.play('explode', 7, false);
            cellkill.onComplete.add(function() {
                this.kill();

            },this.body[i]);
        }
        this.alive=false;
    }
    this.generateBody();

}

var Fruit = function (name, value)
{
    this.name = name || 'apple';
    this.value = value || 1;
    this.posx =  0,
        this.posy  = 0;
    this.fruitInstance;

    // Add a new apple.
    this.createFruit = function()
    {
        this.posx =  Math.floor(Math.random() * 40 ) * squareSize,
            this.posy  = Math.floor(Math.random() * 30 ) * squareSize;
        this.fruitInstance = game.add.sprite(this.posx, this.posy, this.name);
    }
    this.createFruit();
    this.destroyFruit = function ()
    {
        this.fruitInstance.destroy();
    }
}

function snakeCollision(snake,snake2) {
    if(snake.alive)
    {
        head=snake.getFirstCell();
        // Check if the head of the snake overlaps with any part of the snake.
        for(var i = 0; i < snake2.body.length - 1; i++){
            if(head.x == snake2.body[i].x && head.y == snake2.body[i].y){

                //game.state.start('Game_Over');
                snake.snakeDie();
            }
        }
    }
}
function fruitCollision(snake,fruit) {
    if(snake.alive) {
        // Check if any part of the snake is overlapping the apple.
        // This is needed if the apple spawns inside of the snake.
        for (var i = 0; i < snake.body.length; i++) {
            if (snake.body[i].x == fruit.fruitInstance.x && snake.body[i].y == fruit.fruitInstance.y) {

                // Next time the snake moves, a new block will be added to its length.
                snake.addNew = snake.addNew + fruit.value;

                // Destroy the old apple.
                fruit.destroyFruit();
                fruit.createFruit();
                // Make a new one.

                // Increase score.
                if(fruit.name=='apple') snake.score=snake.score+3;
                else if(fruit.name=='orange') snake.score=snake.score+2;
                else if(fruit.name=='banana') snake.score++;

                // Refresh scoreboard.

                snake.scoreTextValue.text = snake.score.toString();

            }
        }
    }
}
function wallCollision(snake) {
    if(snake.alive) {
        head = snake.getFirstCell();
        // Check if the head of the snake is in the boundaries of the game field.

        if (head.x >= 600 || head.x < 0 || head.y >= 450 || head.y < 0) {
            snake.snakeDie();
        }
    }
}
function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}
