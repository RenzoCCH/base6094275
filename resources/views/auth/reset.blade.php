
@extends('layout')

@section('content')
<section class="row center-container " ng-controller="resetController " >
      <div class="center-container-form ">
        @include('generic.advices.errors')
        @include('generic.advices.succed')
		<form id="reset-form" method="POST" action="/password/reset">
	         {!! csrf_field() !!}
	         <input type="hidden" name="token" value="{{ $token }}">
	         <div class="form-group">
	         <input type="email" name="email" id="email"  class="form-control" value="{{ old('email') }}" placeholder="{{trans('validation.attributes.email')}}" required
	         data-msg-required="{{trans('validation.custom.attribute-name.email')}}">
	         </div>
	         <div class="form-group">
	         <input type="password" name="password" id="password"  class="form-control" placeholder="{{trans("validation.attributes.password")}}" required
	         data-msg-required="{{trans('validation.custom.attribute-name.email')}}"
	         data-msg-minlength="{{trans('validation.min.string',['attribute'=>trans("validation.attributes.password"),'min'=>'6'])}}"
	         >
	         </div>
	         <div class="form-group">
	         <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="{{trans("validation.attributes.password_confirmation")}}"
	         data-msg-equalto="{{trans('validation.confirmed',['attribute'=>trans('validation.attributes.password')])}}"
	         >
	         </div>
	         <div class="form-group">
	         <button type="submit" class="btn btn-primary btn-block">{{trans('auth.reset_password')}}</button>
	         </div>
	     </form>
      </div>
</section>

@stop
