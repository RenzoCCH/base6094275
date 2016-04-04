var app = angular.module('app', []);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}).run(function ($rootScope) {
    //$rootScope.backgroundAllowed = true;
});
app.constant("Modernizr", Modernizr);

$.ajaxSetup({
    headers:{
        'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
    }
});
$.validator.setDefaults({
    errorElement: 'span'
});
