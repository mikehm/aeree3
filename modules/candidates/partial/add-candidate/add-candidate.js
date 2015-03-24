  angular.module('candidates').controller('AddCandidateCtrl', function ($scope) {
/* BASIC DATA */



  $scope.profileTab = function(){

    $scope.active1 = 'active';
    $scope.active2 = '';
    $scope.active3 = '';

  };

  $scope.passwordTab = function(){

    $scope.active1 = '';
    $scope.active2 = "active";
    $scope.active3 = '';
  };

  $scope.jobsTab = function(){

    $scope.active1 = '';
    $scope.active2 = '';
    $scope.active3 = "active" ;
  };


$scope.basicData = {
 fname:'', lname:'', email:'', linkedIn:'', phone1:'', phone2:'', gender:'', 
 dob:'', address1:'', address2:'', city:'', state:'', postal:'',availableDate:'', salary:'', notes:''
};

/* End BASIC DATA */

/* SELECT INPUT DATA */
    $scope.country = null;
  
    $scope.countryConfig = {
    options: [{value: "Ethiopia", text: 'Ethiopia'}, 
    {value: "Canada", text:'Canada'},
    {value: "England", text:'England'},
    {value: "USA", text:'USA'}
    
    ],
    create: true,
    sortField: 'text',
    maxItems: 1,
  }
  $scope.education = null;
   $scope.educationConfig = {
    options: [{value: "Diploma", text: 'Diploma'}, 
    {value: "Certificate", text:'Certificate'},
    {value: "PhD", text:'PhD'},
    {value: "Masters", text:'Masters'}
    
    ],
    create: true,
    sortField: 'text',
    maxItems: 1,
  }


  $scope.source = null;
   $scope.sourceConfig = {
    options: [{value: "Online", text: 'Online'}, 
    {value: "walk-in", text:'Walk-In'},
    {value: "Email", text:'Email'},
    {value: "Fax", text:'Fax'}
    
    ],
    create: true,
    sortField: 'text',
    maxItems: 1,
  }

   $scope.status = null;
   $scope.statusConfig = {
    options: [{value: "Active", text: 'Active'}, 
    {value: "In-Active", text:'In-Active'},
    {value: "In-Progress", text:'In-Progress'}
    
    ],
    create: true,
    sortField: 'text',
    maxItems: 1,
  }
  
   $scope.recruiter = null;
   $scope.recruiterConfig = {
    options: [{value: "Alemitu Chane", text: 'Alemitu Chane'}, 
    {value: "Bill Gates", text:'Bill Gates'},
    {value: "Mamo Qilo", text:'Mamo Qilo'},
    {value: "Teddy Afro", text:'Teddy Afro'}
    
    ],
    create: true,
    sortField: 'text',
    maxItems: 1,
  }



/* END DATA ENTERED VIA SELECT INPUT*/

/* EMPLOYMENT HISTORY DATA */

$scope.empHistoryData = {
  jobTitle:'', company:'',companyLocation:'',companyContact:'', prevStartDate:'', 
  prevEndDate:'', reasonLeaving:''
};


$scope.empHistory = [];

$scope.addHistory = function(){


  if(!$scope.empHistoryData.jobTitle || 
     !$scope.empHistoryData.company ||
     !$scope.empHistoryData.prevEndDate ||
     !$scope.empHistoryData.prevStartDate ){
          $scope.jobRequired = true;
          $scope.companyRequired = true;
          $scope.startRequired = true;
          $scope.endRequired = true;
          return;
    }


  $scope.empHistory.push($scope.empHistoryData);  

  $scope.jobRequired = false;
  $scope.companyRequired = false;
  $scope.startRequired = false;
  $scope.endRequired = false;


  $scope.empHistoryData = {
       jobTitle:'', company:'', companyLocation:'', companyContact:'', prevStartDate:'', prevEndDate:'', reasonLeaving:''
  };


};


$scope.removeHistory = function(item) {

    $scope.empHistory.splice(item,1); 

};

/*END EMPLOYMENT HISTORY DATA*/


/* POSITIONS DATA */

$scope.positions = null;
   $scope.positionConfig = {
    options: [{value: "Doctor", text: 'Doctor'}, 
    {value: "Tech Director", text:'Tech Director'},
    {value: "Lawyer", text:'Lawyer'},
    {value: "Teacher", text:'Teacher'}
    
    ],
    create: true,
    sortField: 'text',
    maxItems: 3,
  }
  
  $scope.deletePos = function(index){
        $scope.positions.splice(index, 1);
  
  };



/* END POSITIONS DATA */


/* SKILLS DATA */


$scope.skills = null;
   $scope.skillConfig = {
    options: [{value: "", text: ''} 
    ],
    create: true,
    sortField: 'text',
    maxItems: 5,
  }
  
  $scope.deleteSkills = function(index){
        $scope.skills.splice(index, 1);

  };

/* END SKILLS DATA*/


/*SUPPORTING DOCUMENTATION DATA */

$scope.supportingData = {
  resume:'',
  coverLetter:'',
  otherDocs:''
};
/* END SUPPORTING DOCUMENTATION DATA*/

/* SUBMIT USER PROFILE*/

$scope.userProfile = [];

$scope.submitPro = function(){

   $scope.$broadcast('show-errors-check-validity');

    if($scope.profileForm.$valid && ($scope.empHistory.length>0)){
      $scope.userProfile.push({basicData:$scope.basicData});
      $scope.userProfile.push({country: $scope.country});
      $scope.userProfile.push({education: $scope.education});
      $scope.userProfile.push({employmentHistory:$scope.empHistory});
      $scope.userProfile.push({positions:$scope.positions});
      $scope.userProfile.push({skills:$scope.skills});
      $scope.userProfile.push({supportingData:$scope.supportingData});
      $scope.userProfile.push({source:$scope.source});
      $scope.userProfile.push({status:$scope.status});
      $scope.userProfile.push({recruiter:$scope.recruiter});

      $scope.user = JSON.stringify({userProfile:$scope.userProfile});
      $scope.resetForm() ;

      if($scope.historyForm.$pristine){

        $scope.show = true;
      }
  }

};

/* RESET USER PROFILE FORM */

$scope.resetForm = function(){
    $scope.$broadcast('show-errors-reset');
    $scope.basicData = {};
    $scope.country = "";
    $scope.education = "";
    $scope.empHistory = [];
    $scope.positions = [];
    $scope.skills = [];
    $scope.source = "";
    $scope.status = "";
    $scope.recruiter = "";

  };
/* END RESET USER PROFILE FORM */

});
