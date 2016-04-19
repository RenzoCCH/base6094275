var app = angular.module('app', [])
  .config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  })
  .run(function ($rootScope) {
    $rootScope.randomBackground = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    if($rootScope.randomBackground == 1 || $rootScope.randomBackground == 3) $rootScope.contrastedBackground = true;
    else $rootScope.contrastedBackground = false;
  })
  .constant("Modernizr", Modernizr);

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
$.validator.setDefaults({
  errorElement: 'span'
});
