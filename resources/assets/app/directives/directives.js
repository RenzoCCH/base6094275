app
.directive('inputClear', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $(element).val(null);
        }
    };
});