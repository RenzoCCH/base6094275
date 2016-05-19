app.controller('userGridController', ['$scope','$http',function ($scope,$http) {
  $scope.myData = [];
  $scope.paginationOptions = {
    currentPage: 1,
    total: 0,
    lastPage:0,
    perPage:0,
  };
  $scope.gridOptions = {
    columnDefs: [
      { name: 'name' },
      { name: 'email' },
      { name: 'roles_id' },
    ]
  };
  $scope.gridOptionsNext = function()
  {
    if($scope.paginationOptions.currentPage!=$scope.paginationOptions.lastPage)
    {
      $scope.paginationOptions.currentPage++;
      $scope.getPage($scope.paginationOptions.currentPage);
    }
  };
  $scope.gridOptionsPrevious = function()
  {
    if($scope.paginationOptions.currentPage!=1)
    {
      $scope.paginationOptions.currentPage--;
      $scope.getPage($scope.paginationOptions.currentPage);
    }
  };
  $scope.getPage = function(page) {
    if(typeof $scope.myData[page] == 'undefined' && $scope.myData[page] == null)
    {
      console.log(console.log($scope.myData));
      $scope.paginationOptions.pagesCalled = page;
      $http({
        method: 'GET',
        url: '/admin/users/usersAjax?page='+page
      }).then(function successCallback(response) {
        $scope.myData[page]=response.data.data;
        $scope.gridOptions.data=response.data.data;
        $scope.paginationOptions.total=response.data.total;
        $scope.paginationOptions.currentPage=response.data.current_page;
        $scope.paginationOptions.lastPage=response.data.last_page;
        $scope.paginationOptions.perPage=response.data.per_page;
      }, function errorCallback(response) {
        alert('an error it couldn receive the json');
      });
    }
    else {
      console.log('entro');
      console.log($scope.myData);
      $scope.paginationOptions.currentPage=page;
      $scope.gridOptions.data = $scope.myData[page];
      //$scope.gridOptions.data=$scope.myData.slice(($scope.paginationOptions.pagesCalled*($scope.paginationOptions.currentPage-1)),($scope.paginationOptions.pagesCalled*($scope.paginationOptions.currentPage-1)+$scope.paginationOptions.perPage));
    }
  };
  $scope.getPage($scope.paginationOptions.currentPage);
}]);








