
app.controller('userEditController', ['$scope','message', function($scope,message) {
    editForm=$("#edit-form");
    editFormOldValues=editForm.serialize();
    var editValidator=editForm.validate({
        rules: {
          email:{
             remote:
             {
                 type: "POST",
                 url: '/register/emailverification',
                 data: {
                     email: function() {
                       return $( "#email" ).val();
                     },
                     id:$("#edit-form").attr('data-id')
                 }
             }
          }
        },
        submitHandler: function(form) {
          if(editFormOldValues==$('#edit-form').serialize())
          {
            message.message('warning',$('#message_no_modifications').val());
          }
          else{
            $('.edit-buttons').addClass('loading');
            $('#edit_button').attr('pressed',true);
            form.submit();
          }
        }

    });
}]);




