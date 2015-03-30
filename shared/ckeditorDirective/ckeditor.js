angular.module('aseree').directive('ckEditor',function () {
    return {
        require: '?ngModel',
        link: function ($scope, elm, attr, ngModel) {        
        
            var ck = CKEDITOR.replace(elm[0]);
            ck.config.toolbar = [
              [ '-', 'Bold', 'Italic','Cut', 'Copy', 'Paste','PasteText','Underline' /*, 
             'Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor'*/]
            ]; 

            ck.config.width = '100%';
            ck.config.height= '125px';
           
            ck.on('pasteState', function () {
                $scope.$apply(function () {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function (value) {
                ck.setData(ngModel.$modelValue);
            };
        }
    };
});