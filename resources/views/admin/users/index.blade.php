
@extends('layout')

@section('content')
    <div class="users-grid-container" ng-controller="userGridController">
      <div ui-grid="gridOptions" ui-grid-pagination class="users-grid"></div>
    </div>
@stop
