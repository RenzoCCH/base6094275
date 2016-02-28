
app.controller('loginController', ['$scope', function($scope) {
    $("#login").validate({
        errorElement: 'span',
        submitHandler: function(form) {
            $('#login_button').attr('pressed',true);
            form.submit();
        }
    });

}]);




