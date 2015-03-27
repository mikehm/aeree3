angular.module('aseree').factory('userproService',function() {

	var userproService = {};

	var userProfile = null;
	userproService.save = function(user){

		userProfile = user;
	};

	return userproService;
});