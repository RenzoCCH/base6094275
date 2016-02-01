<!DOCTYPE html>
<html class="no-js" ng-app="app">
<head unresolved>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,IE=10,IE=EmulateIE10,IE=9,IE=EmulateIE9,IE=8,IE=EmulateIE8,IE=7,IE=EmulateIE7" />

    <title>Base</title>
    {!! Html::style('assets/css/main.css') !!}
    {!! Html::script('assets/js/modernizr-custom.js')!!}
    {!! Html::script('bower_components/webcomponentsjs/webcomponents.js')!!}
    {{--adding polymeer dom--}}
    <link rel="import" href="{{url()}}/elements/button-loading.html">
</head>
<body>

    <main class="container-fluid">
      @can('auth')
      @include('home.partials.navbar')
      @endcan
      @yield('content')
    </main>

     {!! Html::script('bower_components/jquery/dist/jquery.min.js')!!}
     {!! Html::script('bower_components/angular/angular.js')!!}

     {!! Html::script('assets/app/app.js')!!}
</body>
</html>