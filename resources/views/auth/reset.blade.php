@extends('layout')

@section('content')
    <main >
         @include('auth.partials.errors')
         <section >
            <form method="POST" action="/password/reset">
                {!! csrf_field() !!}
                <input type="hidden" name="token" value="{{ $token }}">
                <input type="email" name="email" value="{{ old('email') }}" placeholder="{{trans('email')}}">
                <input type="password" name="password" placeholder="{{trans("validation.attributes.password")}}">
                <input type="password" name="password_confirmation" placeholder="{{trans("validation.attributes.password_confirmation")}}">
                <button type="submit">{{trans('auth.reset_password')}}</button>
            </form>
         </section>
    </main>
@stop
