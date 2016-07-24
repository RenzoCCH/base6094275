{{----------------HERE WE DEFINE WICH FILES WILL BE INCLUDED IN A PAGE-----------------------    --}}
{{-------------------TO IMPROVE PERFORMANCE----------------------------------------------------------}}
{{----------------------section for all-------------------------------------}}
	{!! Html::style('assets/css/main.css') !!}
{{----------------------local enviromente-------------------------------------}}
@if(App::environment('local'))
	{!! Html::script('assets/js/modernizr.js')!!}
	@if(Request::path()=='login' ||
		Request::path()=='password/reset' ||
		Request::path()=='user/edition'
		)
		{!! Html::script('bower_components/webcomponentsjs/webcomponents.js')!!}
		<link rel="import" href="{{url()}}/elements/button-loading.html">
	@endif
	@if(Request::path()=='admin/users')
		{!! Html::style('bower_components/angular-ui-grid/ui-grid.css') !!}
	@endif
@endif
{{----------------------production enviroment-------------------------------------}}
@if(App::environment('production'))
	@if(Request::path()=='login' ||
		Request::path()=='password/reset' ||
		Request::path()=='user/edition'
		)
		{!! Html::script('assets/dist/js/modernizerWebcomponents.min.js')!!}
		<link rel="import" href="{{url()}}/elements/button-loading.html">
	@else
		{!! Html::script('assets/dist/js/modernizr.min.js')!!}
	@endif

	@if(Request::path()=='admin/users')
		{!! Html::style('bower_components/angular-ui-grid/ui-grid.css') !!}
	@endif
@endif



