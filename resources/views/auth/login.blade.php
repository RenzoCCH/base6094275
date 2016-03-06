
<form id="login" method="POST" action="{{route('login')}}" ng-show="login" class="fadein" ng-cloak>
   {!! csrf_field()!!}

   <div class="form-group">
        <input name="email" type="email" id="email_login" class="form-control password-email" maxlength="50"  placeholder="{{trans('validation.attributes.email')}}" required  data-msg="{{trans('validation.custom.attribute-name.email')}}">
   </div>
   <div class="form-group">
        <input name='password' type="password" id="login_password" class="form-control" maxlength="40" placeholder="{{trans('validation.attributes.password')}}" required data-msg="{{trans('validation.custom.attribute-name.password')}}">
   </div>
   <div class="form-group ">
       <button id="login_button" type="submmit" class="btn btn-primary btn-block center-block"  is="button-loading" loadingHeight="100">
          {{trans('auth.login')}}
       </button>
   </div>
</form>
