<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,IE=10,IE=EmulateIE10,IE=9,IE=EmulateIE9,IE=8,IE=EmulateIE8,IE=7,IE=EmulateIE7" />

    <title>Base</title>
    {!! Html::style('assets/css/styles.css') !!

    {!! Html::js('assets/js/')!!}
</head>
<body>

    <main class="container-fluid">
      @can('auth')
      @include('home.partials.navbar')
      @endcan
      @yield('content')
    </main>
</body>
</html>