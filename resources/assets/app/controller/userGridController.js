app.controller('userGridController', ['$scope','$http','message',function ($scope,$http,message) {
  $scope.myData = [];
  $scope.advancedSearchActive = false;
  $scope.userRoles = [{id:0,description:'All'}];
  $scope.paginationOptions = {
    currentPage: 1,
    total: 0,
    lastPage:0,
    perPage:0,
    name:'',
    email:'',
    role:$scope.userRoles[0]
  };
  $scope.paginationOptionsStorage = {
    total: 0,
    lastPage:0,
    digest:false
  };
  if($("#grid_titles").length)
  {
    var gridTitles=$("#grid_titles").val().split(",");
  }
  $scope.gridOptions = {
    columnDefs: [
      { field:'name',name: gridTitles[0] },
      { field:'email',name: gridTitles[1] },
      { field:'roles_id',name: gridTitles[2]},
    ],
    enableColumnMenus:false
  };
  if($("#user_categories").length)
  {
    $scope.userRoles = [];
    var roles=$("#user_categories").val().split(",");
    for (var i = 0; i < roles.length; i++) {
      role = {id: i, description: roles[i]};
      $scope.userRoles.push(role);
      console.log($scope.userRoles[i]);
    }
  }
  //--------------------------------methods
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
    if((typeof $scope.myData[page] == 'undefined' && $scope.myData[page] == null) || $scope.paginationOptions.name !== '' || $scope.paginationOptions.email !== '' || $scope.paginationOptions.role.id != 0)
    {
      var url= '/admin/users/usersAjax?page='+page;
      if($scope.paginationOptions.name !== '')  url+='&name='+$scope.paginationOptions.name;
      if($scope.paginationOptions.email !== '') url+='&email='+$scope.paginationOptions.email;
      if($scope.paginationOptions.role.id != 0) url+='&role='+$scope.paginationOptions.role.id;
      $http({
        method: 'GET',
        url:url
       }).then(function successCallback(response) {
        if($scope.paginationOptions.name == '' && $scope.paginationOptions.email == '' && $scope.paginationOptions.role.id == 0)
        {
          $scope.myData[page]=response.data.data;
          $scope.paginationOptionsStorage.total = response.data.total;
          $scope.paginationOptionsStorage.lastPage = response.data.last_page;
        }
        $scope.gridOptions.data=response.data.data;
        $scope.paginationOptions.total=response.data.total;
        $scope.paginationOptions.currentPage=response.data.current_page;
        $scope.paginationOptions.lastPage=response.data.last_page;7
        $scope.paginationOptions.perPage=response.data.per_page;
        if(!response.data.total)// to set the messsage....
        {
          message.message('info','No reigster were found','Information:');
        }
      }, function errorCallback(response) {
        message.message('warning',"Sorry, we could not connect to te server.",'');
      });
    }
    else {
      $scope.paginationOptions.currentPage=page;
      $scope.gridOptions.data = $scope.myData[page]
      $scope.paginationOptions.total = $scope.paginationOptionsStorage.total;
      $scope.paginationOptions.lastPage = $scope.paginationOptionsStorage.lastPage;
      if($scope.paginationOptionsStorage.digest)
      {
        $scope.paginationOptionsStorage.digest=false;
        $scope.$digest()
      }
    }
    message.hideMessage();
  };
  $scope.filter = function(digest)
  {
    if(!$scope.paginationOptions.name.trim().length && digest) $scope.paginationOptionsStorage.digest=true;
    if($scope.paginationOptions.email.trim().length) $scope.paginationOptions.email=$scope.paginationOptions.email.trim();
    $scope.paginationOptions.name=$scope.paginationOptions.name.trim();
    $scope.paginationOptions.currentPage=1;
    $scope.getPage($scope.paginationOptions.currentPage);
  }
  $scope.resetAdvancedSearch= function () {
    $scope.paginationOptions.email='';
    $scope.paginationOptions.role=$scope.userRoles[0];
  }

  $scope.getPage($scope.paginationOptions.currentPage);
  //-------------------jquery implementatiaons--------
  $(function(){
    $('#nameSearch').val('');
    $('#nameSearch').focus();
    $('#nameSearch').keyup(function(e){
      if(e.keyCode == 13)
      {
        $scope.filter(true);
      }
    });
  });
}]);








