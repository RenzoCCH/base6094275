{!! csrf_field() !!}
<div class="form-group">
{!! Form::text('name',null,['id'=>'name','placeholder'=>trans("validation.attributes.name"),''=>'','class'=>'form-control','required',
'data-msg'=>trans('validation.required',['attribute'=>trans("validation.attributes.name")])]) !!}
</div>
<div class="form-group">
{!! Form::email('email',null,['id'=>'email','placeholder'=>trans('validation.attributes.email'),'class'=>'form-control register-email','required',
 'data-msg-required'=>trans('validation.custom.attribute-name.email') ,
 'data-msg-remote'=>trans('validation.unique',['attribute'=>trans("validation.attributes.email")]),
 'input-clear'
 ])!!}
</div>
<div class="form-group">
{!! Form::password('password',['id'=>'password','placeholder'=>trans("validation.attributes.password"),'class'=>'form-control','required',
 'data-msg-required'=>trans('validation.required',['attribute'=>trans("validation.attributes.password")]),
 'data-msg-minlength'=>trans('validation.min.string',['attribute'=>trans("validation.attributes.password"),'min'=>'6']),
 'input-clear'
 ])!!}
</div>
<div class="form-group">
{!! Form::password('password_confirmation',['id'=>'password_confirmation','placeholder'=>trans("validation.attributes.password_confirmation"),'class'=>'form-control','required',
'data-msg-required'=>trans('validation.required',['attribute'=>trans("validation.attributes.password_confirmation")]),
'data-msg-equalto'=>trans('validation.confirmed',['attribute'=>trans("validation.attributes.password")]),
])!!}
</div>


