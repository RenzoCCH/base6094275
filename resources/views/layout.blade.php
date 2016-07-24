<!DOCTYPE html>
<html class="no-js" ng-app="app">
<head unresolved>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,IE=10,IE=EmulateIE10,IE=9,IE=EmulateIE9,IE=8,IE=EmulateIE8,IE=7,IE=EmulateIE7" />
		@include('generic.headerLoader')
    <title>Base</title>
</head>
<body ng-controller="backgroundController">
    <main class="main">
    @can('auth')
      @include('home.partials.navbar')
			<div class="main-content">
	      @yield('content')
			</div>
    @endcan
    @cannot('auth')
      @yield('content')
    @endcan
    </main>
    @include('generic.footerLoader')
</body>
</html>