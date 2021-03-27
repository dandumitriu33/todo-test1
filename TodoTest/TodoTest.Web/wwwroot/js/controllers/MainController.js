app.controller('MainController', ['$scope', function ($scope) {
    $scope.hardcodedList = ["Apples", "Cherries", "Beans"];
    $scope.todo = {
        title: "Things to do title",
        list: ["Wake up", "Wash face", "Make bed"]
    };
    $scope.books = {
        title: "Books to buy title",
        list: ["Harry Potter 1", "Harry Potter 2"]
    };
    $scope.addItem = function (itemList, item) {
        itemList.push(item);
    };
}])