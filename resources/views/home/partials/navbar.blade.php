 <ul >
    @cannot('home')
    <li><a href="/">{{trans("auth.home")}}</a></li>
    @endcan
    <li><a href="{{route('user/edition')}}">{{trans("auth.edit_user")}}</a></li>
    @can('crud-users')
    <li><a href="{{route('admin.users.index')}}">{{trans("home.users")}}</a></li>
    @endcan
    <li><a href="{{route('logout')}}">{{trans("auth.logout")}}</a></li>
 </ul>
