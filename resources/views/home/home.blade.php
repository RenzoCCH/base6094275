
@extends('layout')

@section('content')
    @if(Session::has('edit_success'))
            {{ Session::get('edit_success') }}
    @endif
    <main >
         <section >
            {{trans('home.welcome', ['name' => Auth::user()->name])}}
            <a href="{{route('logout')}}">{{trans("auth.logout")}}</a>
            <a href="{{route('user/edition')}}">{{trans("auth.edit_user")}}</a>
         </section>
         @can('crud-users')
         <section>
            <a href="{{route('admin.users.index')}}">{{trans("home.users")}}</a>
         </section>
         @endcan
    </main>
@stop
