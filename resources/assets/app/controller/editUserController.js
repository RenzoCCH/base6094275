
app.controller('loginController', ['$scope', function($scope) {
    //$scope.login=false;
    //$scope.register=false;
    //$scope.password=false;
    //$scope.$watch('loginTab', function () {
    //    $scope.state($scope.loginTab);
    //});
    //$scope.state = function(flag) {
    //    //
    //    switch(flag) {
    //        case 'login':
    //            loginValidator.resetForm();
    //            $scope.login=true;
    //            $scope.register=false;
    //            $scope.password=false;
    //            break;
    //        case 'register':
    //            registerValidator.resetForm();
    //            $scope.login=false;
    //            $scope.register=true;
    //            $scope.password=false;
    //            break;
    //        case 'password':
    //            passwordValidator.resetForm();
    //            $scope.login=false;
    //            $scope.register=false;
    //            $scope.password=true;
    //            break;
    //        default:
    //            loginValidator.resetForm();
    //            $scope.login=true;
    //            $scope.register=false;
    //            $scope.password=false;
    //            break;
    //    }
    //};
    //$scope.cleanAdvice = function() {
    //    $('.advice').remove()
    //};
    //
    //var loginValidator=$("#login").validate({
    //    submitHandler: function(form) {
    //        $('#login_button').attr('pressed',true);
    //        form.submit();
    //    }
    //});
    //var registerValidator=$("#register-form").validate({
    //    rules: {
    //        email:{
    //         //check_email:true
    //         remote:
    //         {
    //             type: "POST",
    //             url: 'register/emailverification',
    //             data: {
    //                 email: function() {
    //                     return $( ".register-email" ).val();
    //                 }
    //             }
    //         }
    //        },
    //        password: {
    //            minlength:6
    //        },
    //        password_confirmation: {
    //            minlength:6,
    //            equalTo: "#password"
    //        }
    //    },
    //    submitHandler: function(form) {
    //        $('#register_button').attr('pressed',true);
    //        form.submit();
    //    }
    //});
    //var passwordValidator=$("#password-form").validate({
    //    submitHandler: function(form) {
    //        $('#password_button').attr('pressed',true);
    //        form.submit();
    //    }
    //});
}]);




