app.controller('backgroundController', ['$scope', function($scope) {
    function changeLetterColor() {
        var cols = $('.link-color');
        var length = cols.length;
        for(i=0; i<length; i++) {
            cols[i].className = 'link-color-black';
        }
    }
    function makerainthunderday()
    {
        $('html').addClass("dialluvioso");
        var cloudsnumber;
        if(979<$( window ).width()){ cloudsnumber=8;var rain= new Rain(150,'dropstorm');}
        else if (767<$( window ).width()<980){ cloudsnumber=6;var rain= new Rain(100,'dropstorm');}
        else {cloudsnumber=4;var rain= new Rain(50,'dropstorm');}
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudRain();
            $('body').append(cloud.getCloud());
        }
        addThunder(cloudsnumber);
        changeLetterColor();
    }



    function makerainthundernight()
    {
        $('html').addClass("noche");
        var cloudsnumber;
        if(979<$( window ).width()){ cloudsnumber=8;var rain= new Rain(150,'dropstorm');}
        else if (767<$( window ).width()<980){ cloudsnumber=6;var rain= new Rain(100,'dropstorm');}
        else {cloudsnumber=4;var rain= new Rain(50,'dropstorm');}
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudRain();
            $('body').append(cloud.getCloud());
        }
        var  moon= new Moon();
        $('body').append(moon.getSun());
        addThunder(cloudsnumber);
    }
    function makerainnight()
    {
        $('html').addClass("noche");
        var cloudsnumber;
        if(979<$( window ).width()){ cloudsnumber=12;var rain= new Rain(200,'drop');}
        else if (767<$( window ).width()<980){ cloudsnumber=8;var rain= new Rain(100,'drop');}
        else {cloudsnumber=4;var rain= new Rain(50,'drop');}
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudRain();
            $('body').append(cloud.getCloud());
        }
        var  moon= new Moon();
        $('body').append(moon.getSun());
    }
    function makerainday()
    {
        $('html').addClass("dialluvioso");


        var cloudsnumber;
        if(979<$( window ).width()){ cloudsnumber=12;var rain= new Rain(200,'drop');}
        else if (767<$( window ).width()<980){ cloudsnumber=8;var rain= new Rain(100,'drop');}
        else {cloudsnumber=4;var rain= new Rain(50,'drop');}
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudRain();
            $('body').append(cloud.getCloud());
        }
        changeLetterColor();
    }
    function makesnownight()
    {
        $('html').addClass("noche");
        var snownumber;
        var cloudsnumber;
        if(979<$( window ).width()){ snownumber=150;cloudsnumber=12;}
        else if (767<$( window ).width()<980){ snownumber=100;cloudsnumber=8;}
        else {snownumber=60;cloudsnumber=4;}
        for (i = 0; i < snownumber; i++) {
            var  snow= new Snow();
            $('body').append(snow.getSnow());
        }
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudSnowNight();
            $('body').append(cloud.getCloud());
        }
        var  moon= new Moon();
        $('body').append(moon.getSun());
    }
    function makesnowday()
    {
        $('html').addClass("dia");
        var snownumber;
        var cloudsnumber;
        if(979<$( window ).width()){ snownumber=150;cloudsnumber=12;}
        else if (767<$( window ).width()<980){ snownumber=100;cloudsnumber=8;}
        else {snownumber=60;cloudsnumber=4;}
        for (i = 0; i < snownumber; i++) {
            var  snow= new Snow();
            $('body').append(snow.getSnow());
        }
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudSnow();
            $('body').append(cloud.getCloud());
        }
        var  sun= new Sun();
        $('body').append(sun.getSun());
        changeLetterColor();
    }
    //------for night--------------------
    function makenight()
    {
        $('html').addClass("noche");
        var starnumber;
        var cloudsnumber;
        if(979<$( window ).width()){ starnumber=80;cloudsnumber=5;}
        else if (767<$( window ).width()<980){ starnumber=60;cloudsnumber=3;}
        else {starnumber=40;cloudsnumber=2;}
        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new CloudNight();
            $('body').append(cloud.getCloud());
        }
        for (i = 0; i < starnumber; i++) {
            var  star= new Star();
            $('body').append(star.getStar());
        }
        var  moon= new Moon();
        $('body').append(moon.getSun());
    }
    //-----------for day----------
    function makeday()
    {
        $('html').addClass("dia");
        var cloudsnumber;
        if(979<$( window ).width()) cloudsnumber=10;
        else if (767<$( window ).width()<980) cloudsnumber=7;
        else cloudsnumber=5;


        for (i = 0; i < cloudsnumber; i++) {
            var  cloud= new Cloud();
            $('body').append(cloud.getCloud());
        }
        var  sun= new Sun();
        $('body').append(sun.getSun());
        changeLetterColor();
    }

    var Cloud = function ()
    {
        this.type=randomIntFromInterval(1,3);
        this.move=randomIntFromInterval(100,150);
        this.left=randomIntFromInterval(1,100);
        this.top=randomIntFromInterval(1,50);
        this.scale=randomIntFromInterval(30,99);
        this.div = document.createElement('div');
        this.div.className='cloud'+this.type;
        this.getCloud = function(){
            this.div.setAttribute('style',
                '-webkit-animation: moveclouds '+this.move+'s linear infinite;'+
                '-moz-animation: moveclouds '+this.move+'s linear infinite;'+
                '-o-animation: moveclouds '+this.move+'s linear infinite;'+
                '-webkit-animation-delay:'+ this.delay+'s;'+
                '-moz-animation-delay:'+ this.delay+'s;'+
                '-o-animation-delay:'+ this.delay+'s;'+
                'left: '+this.left+'%;'+
                'top:'+this.top+'%;'+
                '-webkit-transform: scale(0.'+this.scale+');'+
                '-moz-transform: scale(0.'+this.scale+');'+
                'transform: scale(0.'+this.scale+');'
            );
            return this.div;
        };
    }
    var Sun = function ()
    {
        this.div = document.createElement('div');
        this.div.className='sun';
        this.getSun = function(){
            return this.div;
        };
    }
    var Moon= function ()
    {
        Sun.call(this);
        this.div.className='moon';
    }
    var Star= function ()
    {
        this.div = document.createElement('div');
        this.div.className='star';
        this.left=randomIntFromInterval(1,199);
        this.top=randomIntFromInterval(5,80);
        this.scale=randomIntFromInterval(30,99);
        this.div.setAttribute('style',
            'left: '+this.left+'%;'+
            'top:'+this.top+'%;'+
            '-webkit-transform: scale(0.'+this.scale+');'+
            '-moz-transform: scale(0.'+this.scale+');'+
            'transform: scale(0.'+this.scale+');'
        );
        this.getStar = function(){
            return this.div;
        };
    }
    var CloudNight = function ()
    {
        Cloud.call(this);
        this.div.className='cloud'+this.type+' cloudnight';

    }
    var Snow= function ()
    {
        this.type=randomIntFromInterval(1,3);
        this.delay=randomIntFromInterval(1,40);
        this.move=randomIntFromInterval(40,45);
        this.left=randomIntFromInterval(1,100);
        this.top=randomIntFromInterval(10,20);
        this.ketframe=randomIntFromInterval(1,2);
        this.div = document.createElement('div');
        this.div.innerHTML = '*';
        this.div.className='snow'+this.type;
        this.div.setAttribute('style',
            '-webkit-animation: snowfall'+this.ketframe+' '+this.move+'s linear infinite;'+
            '-moz-animation: snowfall'+this.ketframe+' '+this.move+'s  linear infinite;'+
            '-o-animation: snowfall'+this.ketframe+' '+this.move+'s  linear infinite;'+
            '-webkit-animation-delay:'+ this.delay+'s;'+
            '-moz-animation-delay:'+ this.delay+'s;'+
            '-o-animation-delay:'+ this.delay+'s;'+
            'left: '+this.left+'%;'+
            'top:'+this.top+'%;'
        );
        this.getSnow = function(){
            return this.div;
        };
    }
    var CloudSnow= function ()
    {
        Cloud.call(this);
        this.top=randomIntFromInterval(1,20);
    }
    var CloudSnowNight= function ()
    {
        CloudNight.call(this);
        this.top=randomIntFromInterval(1,20);
    }
    var CloudRain= function ()
    {

        CloudSnow.call(this);
        this.div.className='cloud'+this.type+' cloudrain';
    }
    var Rain= function (dropsnumber,clase)
    {
        for( i=1;i<dropsnumber;i++) {
            this.div = document.createElement('div');
            this.div.className=clase;
            this.delay=randomIntFromInterval(1,999);
            this.left=randomIntFromInterval(1,100);
            this.top=randomIntFromInterval(10,20);
            this.div.setAttribute('style',
                '-webkit-animation-delay:'+ this.delay+'ms;'+
                '-moz-animation-delay:'+ this.delay+'ms;'+
                '-o-animation-delay:'+ this.delay+'ms;'+
                'left: '+this.left+'%;'+
                'top:'+this.top+'%;'
            );
            $('body').append(this.div);
        }
    }
    var Thunder= function (x,y)
    {
        this.numberrain=10;
        this.width=5;
        for( i=1;i<=this.numberrain;i++)
        {
            this.angule=randomIntFromInterval(-40,40);
            this.div = document.createElement('div');
            this.div.className='trueno';
            this.height=randomIntFromInterval(2,10);
            if(i % 2 == 0)
            {
                this.width--;
                this.angule2=randomIntFromInterval(-40,40);
                this.div2 = document.createElement('div');
                this.div2.className='trueno';
                this.height2=randomIntFromInterval(1,5);
                this.div2.setAttribute('style',
                    /*'-webkit-animation: snowfall '+move+'s linear infinite;'+
                     '-moz-animation: snowfall '+move+'s  linear infinite;'+
                     '-o-animation: snowfall '+move+'s  linear infinite;'+*/
                    '-webkit-transform-origin: top left;-moz-transform-origin: top left;transform-origin: top left;'+
                    '-moz-transform: rotate('+this.angule2+'deg);'+
                    '-webkit-transform: rotate'+this.angule2+'deg);'+
                    'transform: rotate('+this.angule2+'deg);'+
                    'left: 0%;'+
                    'top:90%;'+
                    'width:'+this.width+'px;'+
                    'height:'+this.height2+'vh;'
                );
                this.lastdiv.appendChild(this.div2);
            }
            this.div.setAttribute('style',
                /*'-webkit-animation: thunder '+move+'s linear infinite;'+
                 '-moz-animation: thunder '+move+'s  linear infinite;'+
                 '-o-animation: thunder '+move+'s  linear infinite;'+*/
                '-webkit-transform-origin: top left;-moz-transform-origin: top left;transform-origin: top left;'+
                '-moz-transform: rotate('+this.angule+'deg);'+
                '-webkit-transform: rotate'+this.angule+'deg);'+
                'transform: rotate('+this.angule+'deg);'+
                'left: '+x+'%;'+
                'top:'+y+'%;'+
                'width:'+this.width+'px;'+
                'height:'+this.height+'vh;'
            );
            if(i==1){this.firstdiv=this.div;x=0;y=90;}
            else {
                this.lastdiv.appendChild(this.div);
            }
            this.lastdiv=this.div;
        }
        this.getThunder = function(){
            return this.firstdiv;
        };
    }
    function addThunder(cloudsnumber) {
        var  thunder= new Thunder(50,95);
        var nubes=$( ".cloudrain" ).toArray();
        var nube = randomIntFromInterval(0,cloudsnumber-1);
        nubes[nube].appendChild(thunder.getThunder());
        setTimeout(function(){
            thunder.getThunder().remove();
        }, 900);
        var rand = randomIntFromInterval(3000,5000);
        setTimeout(function() {
            addThunder(cloudsnumber);
        }, rand);
    };
    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    function backgroundController()
    {
        switch(randomIntFromInterval(1,8)) {
            case 1:
                makeday();
                break;
            case 2:
                makenight();
                break;
            case 3:
                makesnowday();
                break;
            case 4:
                makesnownight();
                break;
            case 5:
                makerainday();
                break;
            case 6:
                makerainnight();
                break;
            case 7:
                makerainthundernight();
                break;
            case 8:
                makerainthunderday();
                break;

            default:
                makeday();
        }
    }
    backgroundController();
}]);




