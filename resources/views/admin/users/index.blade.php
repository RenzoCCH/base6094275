
@extends('layout')

@section('content')

	<div class="container" ng-controller="userGridController">
		@include('generic.messages')
		<div class="pagination-filter" ng-class="{active:advancedSearchActive}">
			<div class="col-lg-12 col-md-12 col-sm-12 pagination-advanced-filter fadein">
				<input type="hidden" id="user_categories" value="{{trans('pagination.search.user_categories')}}"/>
				<input type="hidden" id="grid_titles" value="{{trans('pagination.search.grid_titles')}}"/>
				<input id="message_info" value="{{trans('messages.messages_advice.message_info')}}" type="hidden"/>
				<input id="message_warning" value="{{trans('messages.messages_advice.message_warning')}}" type="hidden"/>
				<input id="message_success" value="{{trans('messages.messages_advice.message_success')}}" type="hidden"/>
				<input id="message_no_records" value="{{trans('messages.message_no_records')}}" type="hidden"/>
				<input id="message_no_connection" value="{{trans('messages.message_no_connection')}}" type="hidden"/>
				<input id="message_no_empty" value="{{trans('messages.message_no_empty')}}" type="hidden"/>
        <div class="pagination-filter-field">
          <input type="text" id="nameAdvancedSearch" placeholder="{{trans('validation.attributes.name')}}" class="form-control" maxlength="50" ng-model="paginationOptions.name">
        </div>
        <div class="pagination-filter-field">
          <input type="text" id="emailAdvancedSearch" placeholder="{{trans('validation.attributes.email')}}" class="form-control" maxlength="50" ng-model="paginationOptions.email">
        </div>
        <div class="pagination-filter-field" >
          <select id="roleAdvancedSearch" class="select" data-ng-options="role.value for role in userRoles" data-ng-model="paginationOptions.role">
          </select>
        </div>
        <button class="btn btn-primary" type="submit" ng-click="filter(false)">
          <span class="fontello fontello-search"></span>
        </button>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 pagination-normal-filter fadein nopadding-xs">
        <div class="search-name">
          <div class="input-group">
            <input type="text" id="nameSearch" placeholder="{{trans('validation.attributes.name')}}" class="form-control" maxlength="50" ng-model="paginationOptions.name">
            <span aria-hidden="true" class="fontello-search input-group-addon search-button" ng-click="filter(false)"></span>
          </div>
        </div>
      </div>
			<menuitem class="icon-item menu-icon" ng-click="advancedSearchActive = !advancedSearchActive;resetAdvancedSearch()" ng-class="{contrasted:advancedSearchActive}" background-constrant>
        <figure class="icon-circle">
          <span class="fontello fontello-search"></span>
        </figure>
        <sub class="icon-text">
        {[{advancedSearchActive && '{{trans('pagination.search.normal')}}' || '{{trans('pagination.search.advanced')}}'}]}
        </sub>
      </menuitem>
		</div>
	  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding-xs"><div ui-grid="gridOptions" ui-grid-pagination ui-grid-edit class="users-grid"></div></div>
	  <nav class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pagination-container" ng-hide="paginationOptions.lastPage<=1">
	    <ul class="pagination">
	      <li class="angle" ng-class="{disabled:paginationOptions.currentPage==1}">
	        <a href="#" aria-label="Previous"  data-ng-click="getPage(1)">
	          <span aria-hidden="true" class="fontello-angle-double-left"></span>
	        </a>
	      </li>

	      <li ng-hide="paginationOptions.currentPage==1">
	        <a href="#" ng-click="getPage(paginationOptions.currentPage - 1)">
	          {[{paginationOptions.currentPage - 1}]}
	        </a>
	      </li>
	      <li class="active"><a href="#">{[{paginationOptions.currentPage}]}</a></li>
	      <li ng-hide="paginationOptions.currentPage==paginationOptions.lastPage">
	        <a href="#" ng-click="getPage(paginationOptions.currentPage + 1)">
	          {[{paginationOptions.currentPage + 1}]}
	        </a>
	      </li>

	      <li class="angle" ng-class="{disabled:paginationOptions.currentPage==paginationOptions.lastPage}">
	        <a href="#" aria-label="Next"  data-ng-click="getPage(paginationOptions.lastPage)">
	          <span aria-hidden="true" class="fontello-angle-double-right"></span>
	        </a>
	      </li>
	    </ul>
	  </nav>
	  <div class="col-lg-6 col-md-6 col-sm-6 counter-container link-color" ng-hide="paginationOptions.total==0">
			{[{(paginationOptions.perPage * paginationOptions.currentPage)- paginationOptions.perPage + 1}]} - {[{(paginationOptions.perPage * paginationOptions.currentPage) > paginationOptions.total && paginationOptions.perPage * paginationOptions.currentPage - ((paginationOptions.perPage * paginationOptions.currentPage) - paginationOptions.total)  || (paginationOptions.perPage * paginationOptions.currentPage) }]} {{trans('pagination.search.of')}} {[{paginationOptions.total}]} {{trans('pagination.search.users')}}
	  </div>
	</div>
@stop
