angular.module('candidates').controller('ListCandidatesCtrl', function ($scope) {
    
    $scope.listAction = {};
    $scope.listActions = [
      {action: "Send Email"},
      {action: "Apply to job"}
    ];

    $scope.jobSeekers = [

      {name: 'Mamo Kilo', currentStatus: 'Employed, Full Time', joinedDate: 'Sept 23, 2013'},
      {name: 'Alemitu Birru', currentStatus: 'Employed, Full Time', joinedDate: 'Sept 1, 2012'},
      {name: 'Ketema Gorfu', currentStatus: 'Employed, Part Time', joinedDate: 'Oct 1, 2012'},
      {name: 'Demisse Abebe', currentStatus: 'Employed, Part Time', joinedDate: 'Dec 1, 2014'}

    ];

    $scope.open = function(){

    	$scope.advance = true;
    };

    $scope.cancel = function(){

    	$scope.advance = false;
    };

});