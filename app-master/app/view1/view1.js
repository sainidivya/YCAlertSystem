'use strict';




// angular.module('myApp.view1', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])

myApp.controller('View1Ctrl', ['$scope',
    function ($scope) {
        $scope.name = "Filter YCList Companies"
        $scope.companies = [
            {company_name: "Cliptone", company_category: "Image Recognition", funding_round: "seed", funding_amount: "500,000,000"},
            {company_name: "Cliptone", company_category: "Image Recognition", funding_round: "seed", funding_amount: "500,000,000"},
            {company_name: "Cliptone", company_category: "Image Recognition", funding_round: "seed", funding_amount: "500,000,000"},
            {company_name: "Cliptone", company_category: "Image Recognition", funding_round: "seed", funding_amount: "500,000,000"},
            {company_name: "Cliptone", company_category: "Image Recognition", funding_round: "seed", funding_amount: "500,000,000"},
            {company_name: "Cliptone", company_category: "Image Recognition", funding_round: "seed", funding_amount: "500,000,000"}
        ]
        // company_name,company_category_list,investor_name,funding_round_type,funding_round_code,funded_at,raised_amount_usd
        // Cliptone,Advertising|Image Recognition|Sales and Marketing|Social Media|Social Media Advertising,500 Startups,seed,NA,2013-01-01,NA
}]);