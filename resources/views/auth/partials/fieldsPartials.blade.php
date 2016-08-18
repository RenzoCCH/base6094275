<div class="form-group">
{!! Form::text('name',null,['id'=>'name','placeholder'=>trans("validation.attributes.name"),''=>'','class'=>'form-control','required',
'data-msg'=>trans('validation.required',['attribute'=>trans("validation.attributes.name")])]) !!}
</div>
<div class="form-group">
{!! Form::email('email',null,['id'=>'email','placeholder'=>trans('validation.attributes.email'),'class'=>'form-control edition-email','required',
 'data-msg-required'=>trans('validation.custom.attribute-name.email') ,
 'data-msg-remote'=>trans('validation.unique',['attribute'=>trans("validation.attributes.email")])
 ])!!}
</div>