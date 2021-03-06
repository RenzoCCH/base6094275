@extends('layout')

@section('content')
<section class="row center-container " ng-controller="loginController " ng-init="loginTab = '@if(Session::has('loginTab')){{ Session::get('loginTab')}}@endif'" >
		<figure class="container-logo-title">
				<img src="img/logo_title.png" alt=""/>
		</figure>
    <div class="center-container-form ">
        @include('generic.advices.errors')
        @include('generic.advices.succed')
        @include('auth.login')
        @include('auth.register')
        @include('auth.password')
    </div>
    <ul class="center-container-options list-inline ">
        <li  ng-show="register || password">
    	    <div data-ng-click="state('login');cleanAdvice()"  class=" link-color fadein" background-constrant>{{trans("auth.login")}}</div>
      	</li>
        <li ng-show="login">
            <div data-ng-click="state('register');cleanAdvice()"  class=" link-color fadein" background-constrant>{{trans('auth.register')}}</div>
        </li>
        <li ng-show="login">
            <div data-ng-click="state('password');cleanAdvice()"  class=" link-color fadein" background-constrant>{{trans('auth.forgot_password')}}</div>
        </li>
    </ul>
</section>
@stop
