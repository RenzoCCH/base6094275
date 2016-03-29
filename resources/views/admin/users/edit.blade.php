
@extends('layout')

@section('content')
    <section class="row">
         <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5" >
           @include('generic.advices.errors')
           @include('generic.advices.succed')
           {!! Form::model($user, array('route' => array('admin.users.update', $user->id), 'method' => 'put')) !!}
           @include('auth.partials.fieldsPartials')
           <div class="form-group">
           {!! Form::select('roles_id',$roles, null ,array('class'=>'form-control')) !!}
           </div>
			<div class="form-group">
                <button  class="btn btn-block btn-primary" type="submit">{{trans("home.buttons.edit_button")}}</button>
			</div>
           {!! Form::close() !!}
         </div>
    </section>
@stop
