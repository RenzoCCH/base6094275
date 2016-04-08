
@extends('layout')

@section('content')
    <main class="row" ng-controller="homeController">
		<div class="col-xs-12">
            @include('generic.advices.succed')
			<span class="link-color">{{trans('home.welcome', ['name' => Auth::user()->name])}}</span>
		</div>
		{{--@include('games.snake.snake')--}}
    </main>
@stop
