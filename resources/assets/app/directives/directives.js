app
.directive('inputClear', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      $(element).val(null);
    }
  };
})
.directive('backgroundConstrant', function ($rootScope) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      if($rootScope.contrastedBackground) $(element).addClass('contrasted');
    }
  };
})
.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.which === 13) {
        scope.$apply(function(){
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});