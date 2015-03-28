  angular.module('candidates').controller('AddCandidateCtrl', function ($scope, userproService) {
/* BASIC DATA */

  $scope.profileTab = function(){
    $scope.active1 = 'active';
    $scope.active2 = '';
    $scope.active3 = '';
  };

  $scope.passwordTab = function(){

    $scope.active1 = '';
    $scope.active2 = 'active';
    $scope.active3 = '';
  };

  $scope.jobsTab = function(){

    $scope.active1 = '';
    $scope.active2 = '';
    $scope.active3 = 'active' ;
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




$scope.empHistory = [];

var empId = $scope.empHistory.length + 1;

$scope.empHistoryData = {id: empId, 
  jobTitle:'', company:'',companyLocation:'',companyContact:'', prevStartDate:'', 
  prevEndDate:'', reasonLeaving:''
};



/* Emplyment history validation states */

$scope.empHistoryVal = function(bool){

        $scope.jobRequired = bool;
        $scope.companyRequired = bool;
        $scope.startRequired = bool;
        $scope.endRequired = bool;

}

$scope.addHistory = function(){


  if(!$scope.empHistoryData.jobTitle || 
     !$scope.empHistoryData.company ||
     !$scope.empHistoryData.prevEndDate ||
     !$scope.empHistoryData.prevStartDate ){

      $scope.empHistoryVal(true);
         
       return;

       if(!$scope.empHistory && $scope.empHistory.length === 0){
          $scope.empHistoryVal(true);
        }
  }

    empId++;

    $scope.empHistory.push($scope.empHistoryData);  

    $scope.empHistoryVal(false);
       
    $scope.empHistoryData = {id: empId, 
       jobTitle:'', company:'', companyLocation:'', companyContact:'', prevStartDate:'', prevEndDate:'', reasonLeaving:''
    };


};


$scope.removeHistory = function(index) {

    $scope.empHistory.splice(index,1); 

};

/*END EMPLOYMENT HISTORY DATA*/


/* POSITIONS DATA */

   $scope.positions = [
    
    {id:1, position: 'CEO'},
    {id:2, position: 'DIRECTOR'},
    {id:3, position: 'DOCTOR'}

  ];
    
  $scope.selectedPositions = [];
  var posId =  $scope.positions.length + 1 + $scope.selectedPositions.length;
    
  $scope.addedPosition = {
      id:posId,
      position:''
  };
 
  $scope.$watch("selected", function(newVal, oldVal){
        if(!newVal){
          return;
        }
        for(var i = 0; i < $scope.selectedPositions.length; i++){
          if( $scope.selectedPositions[i] == newVal) {
            return;
        }
        
        if($scope.selectedPositions.length >=3){
          return;
        }

        }
        if(newVal != oldVal){
          $scope.selectedPositions.push(newVal);
        }
      
    });
    
  $scope.addPosition = function(){

  if(!$scope.addedPosition.position && $scope.addedPosition.position.length < 1){
      return;
    }

    posId++;
    $scope.selectedPositions.push($scope.addedPosition);
    
      $scope.addedPosition = {
          id:posId,
          position:''
      };
  };
    
  $scope.remove = function(index){
      $scope.selectedPositions.splice(index, 1)
  };

  $scope.checkPosLength = function(){
    
  if($scope.selectedPositions.length >= 3){
      return true;
     }
  else {
      return false;
    }
    
    
  };






/* END POSITIONS DATA */

/* SKILLS DATA */

  
  $scope.skills = [];
  var id = $scope.skills.length+1;
  
  $scope.skill = {
    id: id,
    skill: ''
  };

   $scope.checkSkillsLength = function(){  
    if($scope.skills.length >= 5){
      return true;
    }
    else { 
      return false;
    }  
  };
  
  $scope.add = function(){
   
    id++;  
    $scope.skills.push($scope.skill);  
    $scope.skill = {
    id:id, 
    skill: ''
  };
    
  };
  
  $scope.deleteSkill = function(index){
    
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
$scope.userId = 0;

$scope.submitPro = function(){

   $scope.$broadcast('show-errors-check-validity');

    if(!$scope.empHistory && $scope.empHistory.length === 0){
        $scope.empHistoryVal(true); 
    }

    if($scope.profileForm.$valid && ($scope.empHistory.length>0)){
    
      $scope.userId++;

      $scope.userProfile.push(
        {id: $scope.userId},
        {basicData:$scope.basicData},
        {country: $scope.country},
        {education: $scope.education},
        {employmentHistory:$scope.empHistory},
        {positions:$scope.positions}, 
        {skills:$scope.skills},
        {supportingData:$scope.supportingData},
        {source:$scope.source},
        {status:$scope.status},
        {recruiter:$scope.recruiter}
       );

      $scope.user = angular.toJson({userProfile:$scope.userProfile});

      $scope.resetForm() ;
        if($scope.historyForm.$pristine){
        $scope.show = true;
      }
    
    }

    userproService.save($scope.userProfile);

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
