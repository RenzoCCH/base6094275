<header class="navbar" >
  <a class="" href="#">Page Title</a>
  <ul class="icon-container float-right">
    @cannot('home')
    <li class="icon-item">
      <a href="/" class="icon-circle">
        <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
      </a>
      <sub class="icon-text">{{trans("auth.home")}}</sub>
    </li>
    @endcan
    @can('crud-users')
    <li class="icon-item">
      <a href="{{route('admin.users.index')}}" class="icon-circle">
        <span class="fontello fontello-users"></span>
      </a>
      <sub class="icon-text">{{trans("home.users")}}</sub>
    </li>
    @endcan
    <li class="icon-item">
      <a href="{{route('user/edition')}}" class="icon-circle">
        <span class="fontello fontello-cog"></span>
      </a>
      <sub class="icon-text">{{trans("auth.edit_user")}}</sub>
    </li>
    <li class="icon-item">
      <a href="{{route('logout')}}" class="icon-circle">
        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
      </a>
      <sub class="icon-text">{{trans("auth.logout")}}</sub>
    </li>
  </ul>
</header>