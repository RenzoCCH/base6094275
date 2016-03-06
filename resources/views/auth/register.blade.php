
<form id="register-form" method="POST" action="{{route('register')}}" ng-show="register" class="fadein" ng-cloak >
    {!! csrf_field() !!}
    @include('auth.partials.fields', ['id' => 'register'])
    <div class="form-group">
        <button id="register_button" type="submit" class="btn btn-primary btn-block center-block" is="button-loading">{{trans("auth.register")}}</button>
    </div>
</form>


