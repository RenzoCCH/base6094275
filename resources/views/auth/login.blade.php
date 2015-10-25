@extends('layout')

@section('content')
    <main >
        @include('auth.partials.errors')
         <section >
             <form method="POST" action="{{route('login')}}">
                {!! csrf_field()!!}
                <input name="email" type="email" id="email" placeholder="{{trans('validation.attributes.email')}}">

                <input name='password' type="password" id="exampleInputPassword" placeholder="{{trans('validation.attributes.password')}}">
                <button type="submmit" >
                       {{trans('auth.login')}}
                    </button>
             </form>
             <a href="{{route('register')}}">{{trans('auth.register')}}</a>
             <a href="password/email">{{trans('auth.forgot_password')}}</a>
         </section>
    </main>
@stop
