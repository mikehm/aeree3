angular.module('candidates').controller('ListCandidatesCtrl', function ($scope) {
  
  $scope.name = '';
  $scope.location = '';  
  
 $scope.positions = null;
   $scope.positionConfig = {
    options: [{value: "Doctor", text: 'Doctor', id:1}, 
    {value: "Tech Director", text:'Tech Director', id:2},
    {value: "Lawyer", text:'Lawyer', id:3},
    {value: "Teacher", text:'Teacher', id:4}
  
    ],
    persist: true,
    create: true,
    labelField:"id",
    sortField: 'text',
    maxItems: 3,
  }

 $scope.anotherCategory = null;
   $scope.another_categoryConfig = {
    options: [{value: "Doctor", text: 'Doctor', id:1}, 
    {value: "Tech Director", text:'Tech Director', id:2},
    {value: "Lawyer", text:'Lawyer', id:3},
    {value: "Teacher", text:'Teacher', id:4}
  
    ],
    persist: true,
    create: true,
    labelField:"id",
    sortField: 'text',
    maxItems: 3,
  }


});