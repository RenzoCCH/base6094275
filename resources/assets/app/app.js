///////////////////////////////////////////LOCALIZATION///////////////////////////////////////////////////
var components = [];
if(window.location.pathname == "/login" || window.location.pathname.startsWith('/password'))
{
  $.validator.setDefaults({
    errorElement: 'span'
  });
}
if(window.location.pathname == "/admin/users")
{
  components = ['ui.grid'];
}
////////////////////////////////////////////ANGULAR////////////////////////////////////////////////////////
var app = angular.module('app', components)
  .config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  }])
  .run(function ($rootScope) {
    $rootScope.randomBackground = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    if($rootScope.randomBackground == 1 || $rootScope.randomBackground == 3) $rootScope.contrastedBackground = true;
    else $rootScope.contrastedBackground = false;
  })
  .constant("Modernizr", Modernizr);
///////////////////////////////////////////JQUERY/////////////////////////////////////////////////////////////
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
