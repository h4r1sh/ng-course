(function() {
  'use strict';
  angular.module('ShoppingListCheckOff', [ ])
         .controller("ToBuyController", ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getItemsToBuy();

    this.buy = function(item) {
      ShoppingListCheckOffService.buy(item);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var ITEMS = [
      {
        name: 'Cookies', quantity: 100
      },
      {
        name: 'Ice Cream', quantity: 50
      },
      {
        name: 'Biscuit', quantity: 40
      },
      {
        name: 'Chips', quantity: 7
      }
    ];

    var boughtItems = [];


    this.getItemsToBuy = function() {
      return ITEMS;
    }

    this.getBoughtItems = function() {
      return boughtItems;
    }

    this.buy = function(item) {
      var idx = ITEMS.indexOf(item);
      ITEMS.splice(idx, 1);
      boughtItems.push(item);
    }
  }
})();
