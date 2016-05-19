
@extends('layout')

@section('content')
    <div class="container" ng-controller="userGridController">
      <div class="col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-lg-4 col-md-4 col-xs-4 pagination-search">
        <div class="input-group">
            <input type="text" id="paginationSearch" placeholder="Name" class="form-control" maxlength="50" >
            <span aria-hidden="true" class="fontello-search input-group-addon search-button"></span>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <menuitem class="icon-item advanced-search" background-constrant>
            <figure class="icon-circle">
              <span class="fontello fontello-plus"></span>
            </figure>
            <sub class="icon-text">Advanced Search</sub>
        </menuitem>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 pagination-filter">
        <input type="text" id="paginationSearch" placeholder="Name" class="form-control" maxlength="50" >
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding-xs"><div ui-grid="gridOptions" ui-grid-pagination class="users-grid"></div></div>
      <nav class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pagination-container">
        <ul class="pagination">
          <li class="angle" ng-class="{disabled:paginationOptions.currentPage==1}">
            <a href="#" aria-label="Previous"  data-ng-click="getPage(1)">
              <span aria-hidden="true" class="fontello-angle-double-left"></span>
            </a>
          </li>
          <li class="angle" ng-class="{disabled:paginationOptions.currentPage==1}">
            <a href="#" aria-label="Previous"  data-ng-click="gridOptionsPrevious()">
              <span aria-hidden="true" class="fontello-angle-left"></span>
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
            <a href="#" aria-label="Next"  data-ng-click="gridOptionsNext()">
              <span aria-hidden="true" class="fontello-angle-right"></span>
            </a>
          </li>
          <li class="angle" ng-class="{disabled:paginationOptions.currentPage==paginationOptions.lastPage}">
            <a href="#" aria-label="Next"  data-ng-click="getPage(paginationOptions.lastPage)">
              <span aria-hidden="true" class="fontello-angle-double-right"></span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="col-lg-6 col-md-6 col-sm-6 counter-container link-color">
				{[{(paginationOptions.perPage * paginationOptions.currentPage)- paginationOptions.perPage + 1}]} - {[{(paginationOptions.perPage * paginationOptions.currentPage) > paginationOptions.total && paginationOptions.perPage * paginationOptions.currentPage - ((paginationOptions.perPage * paginationOptions.currentPage) - paginationOptions.total)  || (paginationOptions.perPage * paginationOptions.currentPage) }]} of {[{paginationOptions.total}]} users
      </div>
    </div>
@stop
