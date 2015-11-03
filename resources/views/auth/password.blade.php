@extends('layout')

@section('content')
    <section class="row">
        <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5">
             @include('auth.partials.errors')
             <form method="POST" action="/password/email">
                {!! csrf_field()!!}
                <div class="form-group">
                    <input name="email" type="email" class="form-control" id="email" placeholder="{{trans('validation.attributes.email')}}" value="{{old('email')}}">
                   </div>
                <div class="form-group">
                    <button type="submmit" class="btn btn-primary btn-block">
                        {{trans('auth.send_password_reset')}}
                    </button>
                </div>
             </form>
             <a href="{{route('login')}}">{{trans("auth.login")}}</a>
         </div>
    </section>
@stop
