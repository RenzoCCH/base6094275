@extends('layout')

@section('content')
    <main >
         <section >
            @include('auth.partials.errors')
            {!! Form::model(Auth::user(),['route'=>'user/update','method'=>'PUT']) !!}
                {!! csrf_field() !!}
                @include('auth.partials.fieldsPartials')
                <button type="submit">{{trans("home.buttons.edit_button")}}</button>
            {!! Form::close() !!}
            <a href="{{route('login')}}">{{trans("auth.home")}}</a>
         </section>
    </main>
    <main >
         <section >
            @include('auth.partials.errors',['errors' => $errors->password])

            {!! Form::open(['route'=>'password/update','method'=>'PUT']) !!}
                {!! csrf_field() !!}
                {!! Form::password('current_password',['placeholder'=>trans("validation.attributes.current_password")]) !!}
                {!! Form::password('new_password',['placeholder'=>trans("validation.attributes.new_password")]) !!}
                {!! Form::password('new_password_confirmation',['placeholder'=>trans("validation.attributes.password_confirmation")]) !!}
                <button type="submit">{{trans("home.buttons.edit_button")}}</button>
            {!! Form::close() !!}
         </section>
    </main>
@stop
