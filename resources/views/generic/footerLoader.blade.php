{{----------------HERE WE DEFINE WICH FILES WILL BE INCLUDED IN A  FOOTER PAGE-----------------------    --}}
{{-------------------TO IMPROVE PERFORMANCE----------------------------------------------------------}}
{{----------------------local enviroment-------------------------------------}}
@if(App::environment('local'))
	{!! Html::script('bower_components/jquery/dist/jquery.js')!!}
	{!! Html::script('bower_components/angular/angular.js')!!}
	@if(Request::path()=='login' ||
		  Request::path()=='password/reset' ||
		  str_contains(Request::path(),'admin/users/') ||
		  Request::path()=='user/edition'
		  )
		{!! Html::script('bower_components/jquery-validation/dist/jquery.validate.js')!!}
	@endif
	@if(Request::path()=='admin/users')
		{!! Html::script('bower_components/angular-ui-grid/ui-grid.js')!!}
	@endif

	{!! Html::script('assets/dist/js/app.js')!!}
@endif

{{----------------------production enviroment-------------------------------------}}
@if(App::environment('production'))
	@if(Request::path()=='login' ||
		  Request::path()=='password/reset' ||
		  str_contains(Request::path(),'admin/users/') ||
		  Request::path()=='user/edition'
		  )
		{!! Html::script('assets/dist/js/AngularJqueryValidate.min.js')!!}
	@elseif(Request::path()=='admin/users')
		{!! Html::script('assets/dist/js/AngularJqueryUigrid.min.js')!!}
	@else
		{!! Html::script('assets/dist/js/AngularJquery.min.js')!!}
	@endif
@endif