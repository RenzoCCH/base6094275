
@extends('layout')

@section('content')

    <main class="row" ng-controller="homeController">
		<div class="col-xs-12">
            @include('generic.advices.succed')
			<span class="link-color">{{trans('home.welcome', ['name' => Auth::user()->name])}}</span>
		</div>

		<div style="margin:auto;width: 600px;" id="snake-container">

		</div>

    </main>
@stop
