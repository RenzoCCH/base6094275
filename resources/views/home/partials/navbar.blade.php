<nav class="navbar navbar-default">
 <div class="container-fluid">
		<div class="navbar-header">
          <a class="navbar-brand" href="#">Page Title</a>
        </div>
         <ul class="nav navbar-nav navbar-right">
            @cannot('home')
            <li><a href="/">{{trans("auth.home")}}</a></li>
            @endcan
            <li><a href="{{route('user/edition')}}">{{trans("auth.edit_user")}}</a></li>
            @can('crud-users')
            <li><a href="{{route('admin.users.index')}}">{{trans("home.users")}}</a></li>
            @endcan
            <li><a href="{{route('logout')}}">{{trans("auth.logout")}}</a></li>
         </ul>
 </div>
</nav>