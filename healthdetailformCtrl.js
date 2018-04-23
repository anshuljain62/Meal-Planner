app.controller('healthdetailformCtrl', function($scope,$state,$http,$localStorage){

    $scope.change_state=function () {

        $state.go('mealplanner');
    }

    $scope.cal_required=1234567;

    $scope.gender_category = ["male", "female"];
    $scope.body_fat_category = ["Low (<14 %)", "Medium (14-22 %)", "High (> 14 %)"];
    $scope.act_level_category = ["little", "littleactive","moderate","veryactive","extraactive"];
    $scope.final_options_category = ["Lose Weight", "Maintain Health","Gain Weight"];


    $scope.lose_weight=function () {

    $scope.objective="loss";

        var url='http://localhost:1222/insert.php/?targetweight='+$scope.health.wt_goal+'&gender='+$scope.health.gender+'&height='+$scope.health.height_cm+'&weight='+$scope.health.weight_kg+'&age='+$scope.health.age+'&activity='+$scope.health.act_level+'&objective='+$scope.objective;

        $http.get(url)


            .then(function(response) {
                console.log(url);
                console.log(response);
                $scope.cal_required = response.data;
                $localStorage.cal_pass=$scope.cal_required;
                $localStorage.day=1;
            });
    }

    $scope.maintain_weight=function () {
        $scope.objective="maintain";
        var url='http://localhost:1222/insert.php/?targetweight='+$scope.health.wt_goal+'&gender='+$scope.health.gender+'&height='+$scope.health.height_cm+'&weight='+$scope.health.weight_kg+'&age='+$scope.health.age+'&activity='+$scope.health.act_level+'&objective='+$scope.objective;

        $http.get(url)
            .then(function(response) {

                console.log(response);
                $scope.cal_required = response.data;
                $localStorage.cal_pass=$scope.cal_required;
                $localStorage.day=1;
            });
    }

    $scope.gain_weight=function () {

        $scope.objective="gain";

        var url='http://localhost:1222/insert.php/?targetweight='+$scope.health.wt_goal+'&gender='+$scope.health.gender+'&height='+$scope.health.height_cm+'&weight='+$scope.health.weight_kg+'&age='+$scope.health.age+'&activity='+$scope.health.act_level+'&objective='+$scope.objective;

        $http.get(url)
            .then(function(response) {

                console.log(response);
                $scope.cal_required = response.data;
                $localStorage.cal_pass=$scope.cal_required;
                $localStorage.day=1;
            });
    }

});
