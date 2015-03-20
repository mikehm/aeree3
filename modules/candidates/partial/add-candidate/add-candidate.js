angular.module('candidates').controller('AddCandidateCtrl', function ($scope) {

/* BASIC DATA */


$scope.basicData = {
 fname:'', lname:'', email:'', linkedIn:'', phone1:'', phone2:'', gender:'', 
 dob:'', address1:'', address2:'', city:'', state:'', postal:'', notes:''
};
/* BASIC DATA */



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

  $scope.empHistory.push($scope.empHistoryData);  

  $scope.empHistoryData = {

     jobTitle:'', company:'', companyLocation:'', companyContact:'', prevStartDate:'', prevEndDate:'', reasonLeaving:''

  };

};


$scope.removeHistory = function(item) {

    $scope.empHistory.splice(item,1); 

};

/*END EMPLOYMENT HISTORY DATA*/


/* POSITIONS DATA */

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

  //var basicData = JSON.stringify({basicData:$scope.basicData});
 /* $scope.country.selected = JSON.stringify({country:$scope.country.selected});
  $scope.eduLevel.selected = JSON.stringify({eduLevel:$scope.eduLevel.selected});
  $scope.empHistory = JSON.stringify({empHistory:$scope.empHistory});
  $scope.positions = JSON.stringify({positons:$scope.positions});  
  $scope.skills = JSON.stringify({skills:$scope.skills});
  $scope.supportingData = JSON.stringify({supportingData: $scope.supportingData});
  $scope.source.selected = JSON.stringify({source: $scope.source.selected});
  $scope.status.selected = JSON.stringify({status: $scope.status.selected});
  $scope.recruiter.selected = JSON.stringify({recruiter: $scope.recruiter.selected})
*/
  $scope.userProfile.push({basicData:$scope.basicData});
  $scope.userProfile.push({country: $scope.country.selected});
  $scope.userProfile.push({educationLevel: $scope.eduLevel.selected});
  $scope.userProfile.push({employmentHistory:$scope.empHistory});
  $scope.userProfile.push({positions:$scope.positions});
  $scope.userProfile.push({skills:$scope.skills});
  $scope.userProfile.push({supportingData:$scope.supportingData});
  $scope.userProfile.push({source:$scope.source.selected});
  $scope.userProfile.push({status:$scope.status.selected});
  $scope.userProfile.push({recruiter:$scope.recruiter.selected});

  $scope.user = JSON.stringify({userProfile:$scope.userProfile});

  $scope.basicData = {
     fname:'', lname:'', email:'', linkedIn:'', phone1:'', phone2:'', gender:'', dob:'',
     address1:'', address2:'', city:'', state:'', country:'', postal:'', notes:''
  };
};

/* END SUBMIT USER PROFILE */


/* Service userProfile */

/* End service */


/* RESET USER PROFILE FORM */

$scope.resetForm = function(){

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


  /* DATE PICKER (Date of BIRTH (DOB) and Start Date)----------------*/
$scope.datepickers = {
        dob: false,
        startDate: false,
        prevStartDate: false,
        prevEndDate:false
      };
      $scope.today = function() {
        $scope.basicData.dob = new Date();
        $scope.basicData.availableDate = new Date();
        $scope.empHistoryData.prevStartDate = new Date();
        $scope.empHistoryData.prevEndDate = new Date();
        
      };
      $scope.today();

      $scope.showWeeks = true;
      $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
      };

      $scope.clear = function () {
        $scope.dob = null;
      };

      // Disable weekend selection
      $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
      };
      $scope.toggleMin();

      $scope.open = function($event, which) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.datepickers[which]= true;
      };

      $scope.dateOptions = {
        'year-format': '"yy"',
        'starting-day': 1
      };

      console.log('dob : ' + $scope.basicData.dob);
      console.log('startDate : ' + $scope.basicData.availableDate);
      console.log('prevStartDate : ' + $scope.empHistoryData.prevStartDate);
      console.log('prevEndDate : ' + $scope.empHistoryData.prevEndDate);      

      $scope.formats = ['dd-MM-yyyy','dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
      $scope.format = $scope.formats[0];

 /*------------- End date picker for DOB and Start Date----------------*/



  });
