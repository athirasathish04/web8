
// Create AngularJS application
var app = angular.module("homeDecorApp", []);

// Create controller
app.controller("DecorController", function($scope) {

    // Initial comments
    $scope.comments = [
        "Beautiful home decor ideas!",
        "I love the interior design."
    ];

    // Initial shopping list
    $scope.items = [
        "Indoor Plant",
        "Table Lamp"
    ];

    // Function to post a comment
    $scope.postComment = function() {

        if ($scope.newComment &&
            $scope.newComment.trim() !== "") {

            $scope.comments.push(
                $scope.newComment.trim()
            );

            $scope.newComment = "";
        }

    };

    // Function to add a shopping item
    $scope.addItem = function() {

        if ($scope.newItem &&
            $scope.newItem.trim() !== "") {

            $scope.items.push(
                $scope.newItem.trim()
            );

            $scope.newItem = "";
        }

    };

});
