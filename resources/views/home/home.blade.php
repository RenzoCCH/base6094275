
@extends('layout')

@section('content')

    <main class="row">
		<div class="col-xs-12">
            @include('generic.advices.succed')
			{{trans('home.welcome', ['name' => Auth::user()->name])}}
		</div>
    </main>
@stop
