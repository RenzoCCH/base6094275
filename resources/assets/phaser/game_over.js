var Game_Over = {

    preload : function() {
        // Load the needed image for this game screen.
        game.load.image('gameover', './assets/images/gameover.png');
    },

    create : function() {

        var first = {};
        var second = {};
        var third = {};
        var maxscore=0;
        var secondmaxscore=0;
        var thirdmaxscore=0;
        for (var i = 0; i < snakes.length; i++) {
            if(!snakes[i].alive)
            {
                if(snakes[i].score>=maxscore)
                {
                    third=second;
                    second=first;
                    first = snakes[i];
                    maxscore=snakes[i].score;
                }

                else if(snakes[i].score>=secondmaxscore)
                {
                    third=second;
                    second = snakes[i];
                    secondmaxscore=snakes[i].score;
                }
                else if(snakes[i].score>=thirdmaxscore)
                {
                    third= snakes[i];
                    thirdmaxscore=snakes[i].score;
                }

            }

        }
        maxscore=0;
        secondmaxscore=0;
        thirdmaxscore=0;
        for (var i = 0; i < snakes.length; i++) {
            if(snakes[i].alive)
            {

                if(snakes[i].score>=maxscore)
                {
                    third=second;
                    second=first;
                    first = snakes[i];
                    maxscore=snakes[i].score;
                }

                else if(snakes[i].score>=secondmaxscore)
                {
                    third=second;
                    second = snakes[i];
                    secondmaxscore=snakes[i].score;
                }
                else if(snakes[i].score>=thirdmaxscore)
                {
                    third= snakes[i];
                    thirdmaxscore=snakes[i].score;
                }
            }

        }
        // Create button to start game like in Menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);


        game.add.text(235, 310, first.name+': ', { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(350, 308, first.score.toString() + ' Winner!!', { font: "bold 20px sans-serif", fill: "#fff", align: "center" });
        if(!isEmpty(second))
        {
            game.add.text(235, 330, second.name+': ', { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
            game.add.text(350, 328, second.score.toString(), { font: "bold 20px sans-serif", fill: "#fff", align: "center" });
        }
        if(!isEmpty(third))
        {
            game.add.text(235, 350, third.name+': ', { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
            game.add.text(350, 348, third.score.toString(), { font: "bold 20px sans-serif", fill: "#fff", align: "center" });
        }
    },

    startGame: function () {
        // Change the state back to Game.
        if(gameMode==1) this.state.start('Game');
        if(gameMode==2) this.state.start('Game2');
        if(gameMode==3) this.state.start('Gamem');

    }
};