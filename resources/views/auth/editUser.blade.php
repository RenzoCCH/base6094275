@extends('layout')

@section('content')
     <section class="row center-container" ng-controller="editUserController " ng-init="loginTab = " >
           <div class="center-container-form ">
                @include('generic.advices.errors')
                @include('generic.advices.succed')
                {!! Form::model(Auth::user(),['route'=>'user/update','method'=>'PUT']) !!}
	                 {!! csrf_field() !!}
	                 @include('auth.partials.fieldsPartials')
	                 <div class="form-group">
	                     <button type="submit" class="btn btn-primary btn-block">{{trans("home.buttons.edit_button")}}</button>
	                 </div>
	             {!! Form::close() !!}
	             {!! Form::open(['route'=>'password/update','method'=>'PUT']) !!}
                      {!! csrf_field() !!}
                      <div class="form-group">
                      {!! Form::password('current_password',['placeholder'=>trans("validation.attributes.current_password"),'class'=>'form-control']) !!}
                      </div>
                      <div class="form-group">
                      {!! Form::password('new_password',['placeholder'=>trans("validation.attributes.new_password"),'class'=>'form-control']) !!}
                      </div>
                      <div class="form-group">
                      {!! Form::password('new_password_confirmation',['placeholder'=>trans("validation.attributes.password_confirmation"),'class'=>'form-control']) !!}
                      </div>
                      <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">{{trans("home.buttons.edit_button")}}</button>
                      </div>
                  {!! Form::close() !!}
           </div>
         <ul class="center-container-options list-inline ">
             <li  ng-show="register || password">
         	    <div data-ng-click="state('login');cleanAdvice()"  class=" link-color fadein ">{{trans("auth.login")}}</div>
         	</li>
         </ul>
     </section>

@stop
