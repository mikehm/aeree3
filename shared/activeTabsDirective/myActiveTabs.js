angular.module('aseree').directive('myActiveTabs', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, fn) {
			element.bind('click', function(){
				scope.$apply(function(){
					element.parent().children().removeClass("active");
					element.addClass("active");
				});
			});
		}
	};
});