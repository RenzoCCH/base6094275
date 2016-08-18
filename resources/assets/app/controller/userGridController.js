app.controller('userGridController', ['$scope','$http','message','ismobile','$window',function ($scope,$http,message,ismobile,$window) {
  $scope.myData = [];
  $scope.advancedSearchActive = false;
  $scope.userRoles = [{id:0,value:'All'}];
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
  if($("#user_categories").length)
  {
    $scope.userRoles = [];
    var roles=$("#user_categories").val().split(",");
    for (var i = 0; i < roles.length; i++) {
      role = {id: i, value: roles[i]};
      $scope.userRoles.push(role);
    }
  }
  $scope.gridOptions = {
    //modifierKeysToMultiSelectCells: true,
    enableCellEditOnFocus: !ismobile,
    columnDefs: [
      { field:'name',name: gridTitles[0],allowCellFocus : !ismobile  },
      { field:'email',name: gridTitles[1],visible: !ismobile },
      { field:'roles_id'
        ,name: gridTitles[2],
        editableCellTemplate: 'ui-grid/dropdownEditor',
        editDropdownOptionsArray: $scope.userRoles.slice(1, 3),
        editDropdownIdLabel: 'id', editDropdownValueLabel: 'value',
        cellFilter:'mapRol',
        visible: !ismobile
      },
      {
        name:gridTitles[3],
        cellTemplate: '<ul class="list-inline center-block text-center">' +
                      '<li><button class="btn btn-default btn-sm" ng-click="grid.appScope.editUser(row.entity.id)"><span class="fontello fontello-cog"></span></button></li>' +
                      '<li><button class="btn btn-default btn-sm" ng-click="grid.appScope.deleteUser(row.entity.id)"><span class="fontello fontello-trash-empty"></span></button></li></ul>',
        allowCellFocus : false,
        enableCellEdit: false,
        width:(ismobile ? 100 : 130)
      }
    ],
    enableColumnMenus:false
  };

  //--------------------------------methods
  $scope.editUser = function (id) {
    $window.location.href='/admin/users/'+id+'/edit';
  }
  $scope.deleteUser = function (id) {
    $http({
      method: 'GET',
      url: '/admin/users/'+id+'/destroy'
    }).then(function successCallback(response) {
      $scope.myData = [];
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
      $scope.getPage($scope.paginationOptions.currentPage);
      message.message('warning',response.data,{cancel:'/admin/users/cancelDestroy'});
    }, function errorCallback(response) {
      message.message('warning',$('#message_no_connection').val());
    });
  }
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
          message.message('info',$('#message_no_records').val(),{advice:$('#message_info').val()});
        }
      }, function errorCallback(response) {
        message.message('warning',$('#message_no_connection').val());
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



  $scope.gridOptions.onRegisterApi = function(gridApi){
    $scope.gridApi = gridApi;
    gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
      if(newValue==''){
        rowEntity[colDef.field]=oldValue;
        message.message('success',colDef.name+$("#message_no_empty").val());
      }
      else
      {
        if(oldValue!==newValue)
        {
          $.ajax({
            url: '/admin/users/'+rowEntity.id,
            type: 'PUT',
            data: {"name":rowEntity.name,"email":rowEntity.email,"roles_id":rowEntity.roles_id},
            success: function(data) {
              message.message('success',data,{advice:$('#message_success').val(),cancel:'/admin/users/cancelUpdate'});
            },
            error: function (data) {
              message.message('warning',JSON.parse(data.responseText));
            }
          });
        }
      }
    });
  };

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
    $(document).keydown(function (e) {
      if(e.keyCode == 40 && !ismobile)
      {
        $scope.gridApi.cellNav.scrollToFocus( $scope.gridOptions.data[0], $scope.gridOptions.columnDefs[0]);
      }
    });
  });
}])
.filter('mapRol', function() {
  var roles=$("#user_categories").val().split(",");
  return function(input) {
    if (!input){
      return '';
    } else {
      return roles[input];
    }
  };
});









