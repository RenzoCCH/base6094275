
app.controller('chatController', ['$scope','$rootScope','Modernizr', function($scope,$rootScope  , Modernizr) {
    //var chat = $("#chatwindow");
    //var msg = $("#messagebox");
    //
    //var socket = new WebSocket("ws://127.0.0.1:2000");
    //var open=false;
    //
    //function addMessage(msg)
    //{
    //    chat.html( chat.html()+"<p>"+msg+"</p>");
    //}
    //
    //msg.keypress( function (event) {
    //    if (event.charCode != 13)
    //        return;
    //    if (msg.val() == "" || !open)
    //        return;
    //
    //    event.preventDefault();
    //    socket.send(JSON.stringify({
    //        id:'2',
    //        msg: msg.val(),
    //        chatroom:'22'
    //    }));
    //    conn.send(JSON.stringify({command: "subscribe", channel: "mychannel"}));
    //
    //    addMessage(msg.val());
    //    msg.val("");
    //});
    //
    //socket.onopen=function()
    //{
    //    open = true;
    //    addMessage("Connected");
    //
    //}
    //socket.onmessage=function(evt)
    //{
    //    var data = JSON.parse(evt.data);
    //    addMessage(data.msg);
    //}
    //socket.onclose=function()
    //{
    //    open = false;
    //    addMessage("Disconnected");
    //}



}]);




