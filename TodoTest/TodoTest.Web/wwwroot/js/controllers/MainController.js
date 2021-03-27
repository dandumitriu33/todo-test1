app.controller('MainController', ['$scope', function ($scope) {
    $scope.list = ["Wake up", "Wash face", "Make bed"];
    $scope.addItem = function () {
        $scope.list.push($scope.addToDo);
    };
}])