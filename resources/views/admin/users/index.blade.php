
@extends('layout')

@section('content')
    <section class="row">
        <div class="col-xs-12">
            @include('home.partials.succed')
	        <table class="table table-striped">
	            <tr>
	                <th>
	                {{trans('home.number_pagination')}}
	                </th>
	                <th>
	                {{trans('validation.attributes.name')}}
	                </th>
	                <th>
	                {{trans('validation.attributes.email')}}
	                </th>
	                <th>
	                {{trans('home.roles')}}
	                </th>
	                <th>
	                {{trans('home.actions')}}
	                </th>
	            </tr>
	            @foreach($users as $user)
	            <tr>
	                <td>{{$user->id}}</td>
	                <td>{{$user->name}}</td>
	                <td>{{$user->email}}</td>
	                <td>{{$user->roles->description}}</td>
	                <td>
	                    <a class="btn btn-default" href="{{route('admin.users.edit',$user)}}">{{trans('home.buttons.edit_button')}}</a>
	                    <a class="btn btn-default" href="{{route('admin.users.delete', $user)}}">{{trans('home.buttons.delete_button')}}</a>
	                </td>
	            </tr>
	            @endforeach
	        </table>
            {!!$users->render()!!}
        </div>
    </section>
@stop
