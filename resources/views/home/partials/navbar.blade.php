<header class="header" >
  <figure class="logo-container">
      <img src="/img/logo_title.png" alt=""/>
  </figure>
  @if(isset($title))
    <h1 class="header-title">{{$title}}</h1>
  @endif
  <button class="reset-button float-right icon-item icon-menu-small visible-xs" ng-controller="smallNavBarController" background-constrant>
      <figure class="icon-circle">
        <span class="fontello fontello-menu" aria-hidden="true"></span>
      </figure>
  </button>
  <ul class="navbar-icon-container icon-container">
    @cannot('home')
    <li class="icon-item">
      <a href="/">
        <figure class="icon-circle">
				  <span class="fontello fontello-home" aria-hidden="true"></span>
        </figure>
        <sub class="icon-text">{{trans("auth.home")}}</sub>
      </a>
    </li>
    @endcan
    @can('crud-users')
			@can('admin/users')
    <li class="icon-item">
      <a href="{{route('admin.users.index')}}">
        <figure class="icon-circle">
          <span class="fontello fontello-users"></span>
        </figure>
        <sub class="icon-text">{{trans("home.users")}}</sub>
      </a>
    </li>
      @endcan
    @endcan
    <li class="icon-item">
      <a href="{{route('user/edition')}}">
        <figure class="icon-circle">
          <span class="fontello fontello-user"></span>
        </figure>
        <sub class="icon-text">{{trans("auth.edit_profile")}}</sub>
      </a>
    </li>
    <li class="icon-item">
      <a href="{{route('logout')}}">
        <figure class="icon-circle">
	        <span class="fontello fontello-logout" aria-hidden="true"></span>
        </figure>
        <sub class="icon-text">{{trans("auth.logout")}}</sub>
      </a>
    </li>
  </ul>
</header>