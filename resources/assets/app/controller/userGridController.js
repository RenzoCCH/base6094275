app.controller('userGridController', ['$scope','$http',function ($scope,$http) {
  $scope.myData = [];
  var paginationOptions = {
    pageNumber: 1,
    //pageSize: 10,
    sort: null
  };
  $scope.gridOptions = {
    paginationPageSizes: [10, 20,30,40],
    paginationPageSize: 10,
    useExternalPagination: true,
    useExternalSorting: true,
    columnDefs: [
      { name: 'id' },
      { name: 'name' },
      { name: 'email' },
      { name: 'roles_id' },
      //{ name: 'created_at' },
      //{ name: 'updated_at' },
    ],
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
      //$scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
      //  if (sortColumns.length == 0) {
      //    paginationOptions.sort = null;
      //  } else {
      //    paginationOptions.sort = sortColumns[0].sort.direction;
      //  }
      //  getPage();
      //});
      gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
        //alert($scope.gridOptions.totalItems );
        paginationOptions.pageNumber = newPage;
      //  paginationOptions.pageSize = pageSize;
        getPage();
      });
    }
  };

  var getPage = function() {
    $http({
      method: 'GET',
      url: '/admin/users/usersAjax?page='+paginationOptions.pageNumber
    }).then(function successCallback(response) {
      $scope.myData=response.data.data;
      $scope.gridOptions.data=$scope.myData;
    }, function errorCallback(response) {
      alert('an error');
    });
  };
  getPage();
}]);








