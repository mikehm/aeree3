angular.module('aseree')

  .config(function($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .run(function($httpBackend) {
    var things = [
      {
        id: 0,
        title: 'Finish fake backend',
        completed: true
      },
      {
        id: 1,
        title: 'Make some cool stuff',
        completed: false
      },
      {
        id: 2,
        title: 'Brainstorm new projects',
        completed: false
      }
    ];



    var userProfile = [{
        "basicData": {
            "fname": "Mikias",
            "lname": "Mohamed",
            "email": "mikias.mh@gmail.com",
            "linkedIn": "",
            "phone1": "4163202311",
            "phone2": "4163202311",
            "gender": "",
            "dob": "1980-08-15T00:42:01.172Z",
            "address1": "200 Roehampton Avenue",
            "address2": "Apt# 818",
            "city": "Toronto",
            "state": "Ontario",
            "postal": "M4P1R8",
            "notes": "<p>Good candidate</p>\n",
            "availableDate": "2015-03-28T00:42:01.172Z",
            "institution": "Ryerson",
            "salary": "1000000"
        }
    }, {
        "country": {
            "countryName": "Ethiopia",
            "$$hashKey": "03O"
        }
    }, {
        "educationLevel": {
            "level": "Degree",
            "$$hashKey": "03Y"
        }
    }, {
        "employmentHistory": [{
            "jobTitle": "Engineer",
            "company": "Google",
            "companyLocation": "Toronto",
            "companyContact": "Fisseha",
            "prevStartDate": "2014-10-28T00:42:01.172Z",
            "prevEndDate": "2014-11-14T01:42:01.172Z",
            "reasonLeaving": "<p>Joined Microsoft</p>\n"
        }, {
            "jobTitle": "Developer",
            "company": "Microsoft",
            "companyLocation": "Toronto",
            "companyContact": "Bill Gates",
            "prevStartDate": "2015-02-06T05:00:00.000Z",
            "prevEndDate": "2016-04-15T04:00:00.000Z",
            "reasonLeaving": "<p>Present</p>\n"
        }]
    }, {
        "positions": [{
            "posType": "Enginner",
            "$$hashKey": "3SB"
        }, {
            "posType": "Doctor",
            "$$hashKey": "3SE"
        }, {
            "posType": "Lawyer",
            "$$hashKey": "3SH"
        }]
    }, {
        "skills": [{
            "skill": "HTML",
            "$$hashKey": "3V7"
        }, {
            "skill": "ANGULAR",
            "$$hashKey": "3V9"
        }, {
            "skill": "CSS",
            "$$hashKey": "3VB"
        }, {
            "skill": "PYTHON",
            "$$hashKey": "3VD"
        }, {
            "skill": "JAVASCRIPT",
            "$$hashKey": "3VF"
        }]
    }, {
        "supportingData": {
            "resume": "",
            "coverLetter": "",
            "otherDocs": ""
        }
    }, {
        "source": {
            "srcType": "Walk-In",
            "$$hashKey": "0CS"
        }
    }, {
        "status": {
            "statusType": "In-Active",
            "$$hashKey": "0D0"
        }
    }, {
        "recruiter": {
            "recruiterName": "Gemetchu Feleke",
            "$$hashKey": "0D7"
        }
    }];










    
    $httpBackend.whenGET('/api/todos').respond(200, things);
    
    $httpBackend.whenPOST('/api/todos').respond(function(method, url, data, headers) {
      var newItem = JSON.parse(data);
      newItem.id = things.length;
      things.push(newItem);
      
      return [201, newItem];
    });
    
    $httpBackend.whenPUT(/^\/api\/todos\/\d+$/).respond(function(method, url, data, headers) {
      var item = JSON.parse(data);
      for (var i = 0, l = things.length; i < l; i++) {
        if (things[i].id === item.id) {
          things[i] = item;
          break;
        }
      }
      
      return [200, item];
    });
    
    $httpBackend.whenDELETE(/^\/api\/todos\/\d+$/).respond(function(method, url, data, headers) {
      var regex = /^\/api\/todos\/(\d+)/g;
      
      var id = regex.exec(url)[1]; // First match on the second item.
      
      for (var i = 0, l = things.length; i < l; i++) {
        if (things[i].id === id) {
          var index = things.indexOf(things[id]);
          things.splice(index, 1);
          break;
        }
      }
      
      return [204];
    });
    
    $httpBackend.whenGET(/\.html/).passThrough();
  });