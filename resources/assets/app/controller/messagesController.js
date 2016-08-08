app.controller('messagesController', ['$scope','$timeout',function ($scope,$timeout) {
  $scope.mcontainer=$('.messages');
  $scope.message=$scope.mcontainer.find(".alert");
  $scope.mode='';
  $scope.content='';
  $scope.advice='';
  $scope.cancel = '';
  var timer;
  $scope.displayMessage = function () {
    if($scope.mcontainer.length)
    {
      $scope.message.removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
      switch ($scope.mode) {
        case 'success':
          $scope.message.addClass('alert-success');
          break;
        case 'info':
          $scope.message.addClass('alert-info');
          break;
        case 'warning':
          $scope.message.addClass('alert-warning');
          break;
      }
      $scope.message.find('#messageContent').html($scope.content);
      $scope.message.find('#messageAdvice').html($scope.advice);
      if($scope.cancel) $("#messageCancel").show();
      else $("#messageCancel").hide()
      $scope.message.fadeIn();
      $timeout.cancel(timer);
      timer=$timeout(function(){
        $scope.hideMessage();
        $scope.timer=null;
      },8000);
    }
  }
  $scope.hideMessage= function () {
    $scope.message.fadeOut('slow', function () {
      $timeout.cancel(timer);
      $scope.mode='';
      $scope.content='';
      $scope.advice='';
      $scope.cancel = '';
      $scope.message.removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning');
      $scope.message.find('#messageContent').html('');
      $scope.message.find('#messageAdvice').html('');
    });
  }
  $scope.cancelAction= function () {
    $.ajax({
      url: $scope.cancel,
      type: 'PUT',
      success: function(data) {
        location.reload();
      },
      error: function (data) {
        $scope.noConnection();
      }
    })
  }
  $scope.noConnection = function () {
    $scope.mode='warning';
    $scope.content=$('#message_no_connection').val();
    $scope.advice='';
    $scope.cancel='';
    $scope.displayMessage();
  }
  $scope.$on('messageCalled', function(event, data) {
    $scope.mode=data.mode;
    if(data.content !== null && typeof data.content === 'object')
    {
      var requirements = '';
      $.each( data.content, function( key, value ) {
        requirements+=value+' ';
      });
      $scope.content=requirements;
    }
    else{
      $scope.content=data.content;
    }
    if(typeof data.properties !== 'undefined')
    {
      $scope.advice=(typeof data.properties.advice === 'undefined')? '':data.properties.advice;
      $scope.cancel=(typeof data.properties.cancel === 'undefined')? '':data.properties.cancel;
    }
    $scope.displayMessage();
  });
  $scope.$on('hideMessage', function() {
    if($scope.isdiplayed)  $scope.hideMessage();
  });
}]);









