{!! csrf_field() !!}
<div class="form-group">
{!! Form::text('name',null,['placeholder'=>trans("validation.attributes.name"),'class'=>'form-control']) !!}
</div>
<div class="form-group">
{!! Form::email('email',null,['placeholder'=>trans("email"),'class'=>'form-control']) !!}
</div>
<div class="form-group">
{!! Form::password('password',['placeholder'=>trans("validation.attributes.password"),'class'=>'form-control']) !!}
</div>
<div class="form-group">
{!! Form::password('password_confirmation',['placeholder'=>trans("validation.attributes.password_confirmation"),'class'=>'form-control']) !!}
</div>