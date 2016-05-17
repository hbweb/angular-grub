
// Emailaddress Controller
app.controller('customersCtrl', function($scope, $http){
    $http({
        method : "GET",
        url : "data/profile.json"
    }).then(function (response) {
        $scope.emails = response.data.emailAddresses;
        $scope.email = '';
        $scope.deleteEmail = function(deleteEmail){
            console.log(deleteEmail);
            var length = $scope.emails.length;
            for (var i= 0; i < length;  i ++){
                console.log($scope.emails[i].email);
                if($scope.emails[i].email == deleteEmail){
                    $scope.emails.splice(i, 1);
                }
            }
        };
        $scope.addEmail = function(){
            if($scope.email != ''){
                scDelAlert("my-alerts","add-alert","alert-danger");
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test($scope.email)){
                    $scope.email = '';
                    scAddAlert("my-alerts","add-alert","alert-danger","<strong>Error!</strong> Please try correct email address.");
                }
                else{
                    var newEmailObject = {"email": $scope.email, "isPrimary": false};
                    $scope.emails.push(newEmailObject);
                    $scope.email = '';
                }
            }
        };

    });
});