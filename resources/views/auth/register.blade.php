@extends('layout')

@section('content')
    <section class="row">
         <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5">
            @include('auth.partials.errors')
            <form method="POST" action="{{route('register')}}">
                {!! csrf_field() !!}
                @include('auth.partials.fields')
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">{{trans("auth.register")}}</button>
                </div>
            </form>
            <a href="{{route('login')}}">{{trans("auth.login")}}</a>
         </div>
    </section>
@stop
