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
});