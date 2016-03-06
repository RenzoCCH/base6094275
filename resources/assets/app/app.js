var app= angular.module('app', [])
angular.module('myApp', []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
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
