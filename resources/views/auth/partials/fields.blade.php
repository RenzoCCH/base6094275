{!! csrf_field() !!}
{!! Form::text('name',null,['placeholder'=>trans("validation.attributes.name")]) !!}
{!! Form::email('email',null,['placeholder'=>trans("email")]) !!}
{!! Form::password('password',['placeholder'=>trans("validation.attributes.password")]) !!}
{!! Form::password('password_confirmation',['placeholder'=>trans("validation.attributes.password_confirmation")]) !!}
{{--<input type="text" name="name" value="{{ old('name') }}" placeholder="{{trans("validation.attributes.name")}}">--}}
{{--<input type="email" name="email" value="{{ old('email') }}" placeholder="{{trans('email')}}">--}}
{{--<input type="password" name="password" placeholder="{{trans("validation.attributes.password")}}">--}}
{{--<input type="password" name="password_confirmation" placeholder="{{trans("validation.attributes.password_confirmation")}}">--}}
