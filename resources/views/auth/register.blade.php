@extends('layout')

@section('content')
    <main >
        @include('auth.partials.errors')
         <section >
            <form method="POST" action="{{route('register')}}">
                {!! csrf_field() !!}
                @include('auth.partials.fields')
                <button type="submit">{{trans("auth.register")}}</button>
            </form>
            <a href="{{route('login')}}">{{trans("auth.login")}}</a>
         </section>
    </main>
@stop
