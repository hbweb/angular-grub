var app = angular.module('deBankeApp', []);

// Profile Controller
app.controller('ProfileCtrl', function($scope, $http){
    $http({
        method : "GET",
        url : "data/profile.json"
    }).then(function (response) {
        $scope.profile = response.data;
        //console.log(response.data);
    });
});