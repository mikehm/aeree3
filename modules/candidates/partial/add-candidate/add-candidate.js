angular.module('candidates').controller('AddCandidateCtrl', function ($scope) {
/* BASIC DATA */

$scope.basicData = {
 fname:'', lname:'', email:'', linkedIn:'', phone1:'', phone2:'', gender:'', 
 dob:'', address1:'', address2:'', city:'', state:'', postal:'',availableDate:'', salary:'', notes:''
};
/* End BASIC DATA */

/* SELECT INPUT DATA */
 $scope.editorInput = '';
 $scope.country = {};
  $scope.countries = [
    {countryName: 'Ethiopia'},
    {countryName: 'Canada'},
    {countryName: 'England'},
    {countryName: 'Sweden'}
    ];
  $scope.eduLevel = {};
  $scope.eduLevels = [

    {level: "Certificate"}, 
    {level: "Diploma"},
    {level: "Degree"},
    {level: "Masters"},
    {level: "PhD"}
  ];
/*
  $scope.position = {};
  $scope.positions = [
    {positionType: "CEO"}, 
    {positionType: "Doctor"},
    {positionType: "Lawyer"}
  ];

  */

  $scope.source = {};
  $scope.sources = [
    {srcType: 'Online'},
    {srcType: 'Walk-In'},
    {srcType: 'Email'},
    {srcType: 'Fax'}
  ];
  $scope.status = {};
  $scope.statusArray = [
    {statusType: 'Active'},
    {statusType: 'In-Active'},
    {statusType: 'In-progress'}
  ];
  $scope.recruiter = {};
  $scope.recruiters = [
    {recruiterName: 'Alemitu Mamo'},
    {recruiterName: 'Mamo Killo'},
    {recruiterName: 'Gemetchu Feleke'}
  ];

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

$scope.work = {pos: '', ticked:true};

$scope.works = [
    {pos: "Engineer", ticked: false},
    {pos: "CEO", ticked: false},
    {pos: "Doctor", ticked: false},
    {pos: "Lawyer",  ticked: false},
    {pos: "Developer", ticked: false}
];


$scope.posArray = [];

$scope.addP = function(){
      $scope.posArray.push($scope.work);
      //$scope.posArray.push($scope.inputPos);
      $scope.work = {pos: '', ticked:true};
};



$scope.deleteP = function(index){

  $scope.works[index].ticked = false;

};

/*

$scope.position = {
  posType: ''
};

$scope.positions = [];

$scope.addPosition = function(){

  $scope.positions.push($scope.position);

  $scope.position = {
    posType: ''
  };
  
};
  

$scope.removePosition = function(item) {

  $scope.positions.splice(item,1);
};



$scope.editPosition = function(){};
*/

/* END POSITIONS DATA */


/* SKILLS DATA */
$scope.skillsData = {
   skill:''
};

$scope.skills  =[];

$scope.addSkill = function(){

  $scope.skills.push($scope.skillsData);

  $scope.skillsData = {

    skill:''
  
  };

};

$scope.removeSkill = function(item){

  $scope.skills.splice(item,1);
};

$scope.editSkill = function(){

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
      $scope.userProfile.push({countryName: $scope.country.selected});
      $scope.userProfile.push({educationLevel: $scope.eduLevel.selected});
      $scope.userProfile.push({employmentHistory:$scope.empHistory});
      $scope.userProfile.push({positions:$scope.positions});
      $scope.userProfile.push({skills:$scope.skills});
      $scope.userProfile.push({supportingData:$scope.supportingData});
      $scope.userProfile.push({source:$scope.source.selected});
      $scope.userProfile.push({status:$scope.status.selected});
      $scope.userProfile.push({recruiter:$scope.recruiter.selected});

      $scope.user = JSON.stringify({userProfile:$scope.userProfile});
      $scope.resetForm() ;

      if($scope.historyForm.$pristine){

        $scope.show = true;
      }
/*
      $scope.basicData = {
     fname:'', lname:'', email:'', linkedIn:'', phone1:'', phone2:'', gender:'', dob:'',
     address1:'', address2:'', city:'', state:'', country:'', postal:'', notes:''
  };*/
  }

};

/* END SUBMIT USER PROFILE */


/* Service userProfile */

/* End service */


/* RESET USER PROFILE FORM */

$scope.resetForm = function(){
    $scope.$broadcast('show-errors-reset');
    $scope.basicData = {};
    $scope.country.selected = "";
    $scope.eduLevel.selected = "";
    $scope.empHistory = [];
    $scope.positions = [];
    $scope.skills = [];
    $scope.source.selected = "";
    $scope.status.selected = "";
    $scope.recruiter.selected = "";

};
/* END RESET USER PROFILE FORM */


 



  });
