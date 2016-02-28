@extends('layout')

@section('content')
    <section class="row login" ng-controller="loginController ">
        <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5 nopadding">
           @include('auth.partials.errors')
            <form id="login" method="POST" action="{{route('login')}}">
               {!! csrf_field()!!}
               <div class="form-group">
                    <input name="email" type="email" id="email" class="form-control" placeholder="{{trans('validation.attributes.email')}}" required  data-msg="{{trans('validation.custom.attribute-name.email')}}">
               </div>
               <div class="form-group">
                    <input name='password' type="password" id="password" class="form-control" placeholder="{{trans('validation.attributes.password')}}" required data-msg="{{trans('validation.custom.attribute-name.password')}}">
               </div>
               <div class="form-group ">
                   <button id="login_button" type="submmit" class="btn btn-primary btn-block center-block" is="button-loading">
                      {{trans('auth.login')}}
                   </button>
               </div>
            </form>
            <ul class="list-inline">
                <li>
                    <a href="{{route('register')}}" class="link-color">{{trans('auth.register')}}</a>
                </li>
                <li>
                    <a href="password/email" class="link-color">{{trans('auth.forgot_password')}}</a>
                </li>
            </ul>

        </div>
    </section>
@stop
