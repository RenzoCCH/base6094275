
app.controller('resetController', ['$scope', function($scope) {
    $("#reset-form").validate({
        rules: {
            password: {
                minlength:6
            },
            password_confirmation: {
                minlength:6,
                equalTo: "#password"
            }
        },
        submitHandler: function(form) {
            $('#register_button').attr('pressed',true);
            form.submit();
        }
    });
}]);




