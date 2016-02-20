@extends('layout')

@section('content')
     <section class="row">
        <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5">
            @include('auth.partials.errors')
            {!! Form::model(Auth::user(),['route'=>'user/update','method'=>'PUT']) !!}
                {!! csrf_field() !!}
                @include('auth.partials.fieldsPartials')
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">{{trans("home.buttons.edit_button")}}</button>
                </div>
            {!! Form::close() !!}
        </div>
     </section>
     <section class="row">
        <div class="col-xs-8 col-sm-6 col-md-4 col-lg-2 col-xs-offset-2 col-sm-offset-3 col-md-offset-4 col-lg-offset-5">
             @include('auth.partials.errors',['errors' => $errors->password])
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

     </section>

@stop
