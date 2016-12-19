(function() {
  'use strict';
  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenu = ''; //just in case the user clicks the button before entering anything.
    $scope.message = '';

    $scope.checkIfTooMuch = function() {
      var myColor; //Set the color for the textbox
      if($scope.lunchMenu === '') {//No input
        $scope.message = "Please enter data first";
        myColor = 'red';
      }
      else {
        //First replace the consecutive commas with a single comma, then split. Also take care of edge case where input ends with comma.
        var items = $scope.lunchMenu.replace(/,\s*,+/, ',').replace(/,$/, '').split(',');
        if(items.length > 3)
          $scope.message = "Too much!";
        else
          $scope.message = "Enjoy!";

        myColor = 'green';
      }

      $scope.messageStyle = {
        'color': myColor,
        'border': 'solid ' + myColor + ' 1px'
      };

    }
  }
})();
