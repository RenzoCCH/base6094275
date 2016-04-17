<header class="navbar" >
  @cannot('isphone')
  <figure class="logo-container hidden-xs">
      <img src="/img/logo.png" alt=""/>
  </figure>
  @endcan
  <ul class="icon-container float-right">
    @cannot('home')
    <li class="icon-item" background-constrant>
      <a href="/" class="icon-circle">
        <span class="fontello fontello-home" aria-hidden="true"></span>
      </a>
      <sub class="icon-text">{{trans("auth.home")}}</sub>
    </li>
    @endcan
    @can('crud-users')
    <li class="icon-item" background-constrant>
      <a href="{{route('admin.users.index')}}" class="icon-circle">
        <span class="fontello fontello-users"></span>
      </a>
      <sub class="icon-text">{{trans("home.users")}}</sub>
    </li>
    @endcan
    <li class="icon-item" background-constrant>
      <a href="{{route('user/edition')}}" class="icon-circle">
        <span class="fontello fontello-cog"></span>
      </a>
      <sub class="icon-text">{{trans("auth.edit_user")}}</sub>
    </li>
    <li class="icon-item" background-constrant>
      <a href="{{route('logout')}}" class="icon-circle">
        <span class="fontello fontello-logout" aria-hidden="true"></span>
      </a>
      <sub class="icon-text">{{trans("auth.logout")}}</sub>
    </li>
  </ul>
</header>