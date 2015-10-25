@extends('layout')

@section('content')
    <main >
        @if (count($errors) > 0)
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
        @endif
         <section >
             <form method="POST" action="/password/email">
                {!! csrf_field()!!}
                <input name="email" type="email" id="email" placeholder="{{trans('validation.attributes.email')}}" value="{{old('email')}}">
                <button type="submmit" >
                    {{trans('auth.send_password_reset')}}
                </button>
             </form>
             <a href="{{route('login')}}">{{trans("auth.login")}}</a>
         </section>
    </main>
@stop
