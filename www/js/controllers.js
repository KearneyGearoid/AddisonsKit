angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Doctors) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.doctors = Doctors.all();

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Doctors) {
  $scope.doctor = Doctors.get($stateParams.chatId);
})
.controller('LocationsListCtrl', function ($scope, $api) {
  $api.getLocationsByType('Urgent Care', function (locations) {
    $scope.locations = locations;
  });
})

.controller('LocationsDetailCtrl', function ($scope, $stateParams, $api) {
  var id = $stateParams.id;
  $api.getLocationById(id, function (location) {
    $scope.location = location;
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
