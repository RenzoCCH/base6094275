<form id="password-form" method="POST" action="/password/email" ng-show="password" class="fadein" ng-cloak >
{!! csrf_field()!!}
<div class="form-group">
    <input name="email" type="email" class="form-control" id="email" required placeholder="{{trans('validation.attributes.email')}}" value="{{old('email')}}"
    data-msg-required="{{trans('validation.custom.attribute-name.email')}}"
    data-msg-remote="{{trans('passwords.user')}}"
    >
   </div>
<div class="form-group">
    <button id="password_button" type="submmit" class="btn btn-primary btn-block center-block"  is="button-loading">
        {{trans('auth.send_password_reset')}}
    </button>
</div>
</form>


