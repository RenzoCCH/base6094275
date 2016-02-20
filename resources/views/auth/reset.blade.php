
@extends('layout')

@section('content')
    <section class="row">
        <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5">
             @include('auth.partials.errors')
             <form method="POST" action="/password/reset">
                 {!! csrf_field() !!}
                 <input type="hidden" name="token" value="{{ $token }}">
                 <div class="form-group">
                 <input type="email" name="email" class="form-control" value="{{ old('email') }}" placeholder="{{trans('email')}}">
                 </div>
                 <div class="form-group">
                 <input type="password" name="password" class="form-control" placeholder="{{trans("validation.attributes.password")}}">
                 </div>
                 <div class="form-group">
                 <input type="password" name="password_confirmation" class="form-control" placeholder="{{trans("validation.attributes.password_confirmation")}}">
                 </div>
                 <div class="form-group">
                 <button type="submit" class="btn btn-primary btn-block">{{trans('auth.reset_password')}}</button>
                 </div>
             </form>
             <a href="{{route('login')}}">{{trans("auth.login")}}</a>
         </div>
    </section>
@stop
