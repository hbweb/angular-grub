var app = angular.module('deBankeApp', []);

// Profile Controller
app.controller('ProfileCtrl', function($scope, $http){
    $http({
        method : "GET",
        url : "data/profile.json"
    }).then(function (response) {
        $scope.profile = response.data;
        console.log(response.data);
        $scope.emails = response.data.emailAddresses;
        var length = $scope.emails.length;
        for (var i= 0; i < length;  i ++){
            if($scope.emails[i].isPrimary == true){
                $scope.currentEmail = $scope.emails[i].email;
                break;
            }
        }
        $scope.midName = $scope.profile.forename.substring(0,1) + $scope.profile.surname.substring(0,1);
        console.log($scope.midName);
    });
});