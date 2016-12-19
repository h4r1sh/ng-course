(function() {
  'use strict';
  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenu = ''; //just in case the user clicks the button before entering anything.
    $scope.message = '';

    $scope.checkIfTooMuch = function() {
      if($scope.lunchMenu === '')
        $scope.message = "Please enter data first";
      else {
        var items = $scope.lunchMenu.split(',');
        console.log(items);
      }

    }
  }
})();
