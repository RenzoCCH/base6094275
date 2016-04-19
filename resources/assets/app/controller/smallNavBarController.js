app.controller('smallNavBarController', ['$scope', function ($scope) {
  var headerHeight = $('.header').height();
  $('.icon-menu-small').click(function(){
    if($(this).hasClass('active'))
    {
      $('.header').height( headerHeight);
    }
    else
    {
      $('.header').height( headerHeight + $(".navbar-icon-container").outerHeight());
    }
    $(this).toggleClass('active');
  });
}]);




