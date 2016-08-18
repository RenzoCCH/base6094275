
@extends('layout')

@section('content')
	<section class="container" ng-controller='userEditController'>
		<div class="row">
			<div class="col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-4 col-lg-offset-4 nopadding">
			@include('generic.messages')
			</div>
		</div>
		<div class="row">
		  <div class="col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-4 col-lg-offset-4">
		    {!! Form::model($user, array('route' => array('admin.users.update', $user->id), 'method' => 'put','id'=>'edit-form','data-url'=>url(),'data-id'=>$user->id)) !!}
		    <input id="message_no_modifications" value="{{trans('messages.message_no_modifications')}}" type="hidden"/>
        @include('auth.partials.fieldsPartials')
        <div class="form-group">
	        {!! Form::select('roles_id',$roles, null ,array('id'=>'roles_id','class'=>'form-control')) !!}
        </div>
        <ul class="edit-buttons form-group list-inline form-list-3">
          <li id="edit-button-delete">
            <a  href="{{route('admin.users.delete', $user)}}" class="btn btn-block btn-default">{{trans("home.buttons.delete_button")}}</a>
          </li>
					<li id="edit-button-cancel">
            <a href="{{route('admin.users.index')}}" class="btn btn-block btn-default" type="submit">{{trans("home.buttons.cancel_button")}}</a>
          </li>
          <li class="text-center">
            <button id="edit_button" class="btn btn-block btn-primary" type="submit" is="button-loading" loadingHeight="100" color="red">{{trans("home.buttons.edit_button")}}</button>
          </li>

        </ul>
        {!! Form::close() !!}
		  </div>
		</div>
  </section>
@stop
