
@extends('layout')

@section('content')
    <main >
         <section >
           @include('auth.partials.errors')
           {!! Form::model($user, array('route' => array('admin.users.update', $user->id), 'method' => 'put')) !!}
               @include('auth.partials.fieldsPartials')
               {!! Form::select('roles_id', $roles) !!}
               <button type="submit">{{trans("home.buttons.edit_button")}}</button>
           {!! Form::close() !!}
           <a href="{{route('login')}}">{{trans("auth.home")}}</a>
         </section>
    </main>
@stop
