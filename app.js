/**
 * Created by Somya Kumar Sodani on 24-09-2016.
 */
var app = angular.module('myApp',['ui.router','ngStorage']);

app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('home');
    $stateProvider


        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('hiw', {
            url: '/aboutUs',
            templateUrl: 'about.html'
        })
        .state('physicalprofile', {
            url: '/physicalProfile',
            templateUrl: 'healthdetailform.html',
            controller:'healthdetailformCtrl'

        })
        .state('mealplanner', {
            url: '/mealPlanner',
            templateUrl: 'mealplanner/index.html',
            controller:'mealplannerCtrl',
            css: ['mealplanner/style.css']

        })

        .state('blog', {
            url: '/discussionPortal',
            templateUrl: 'blog/blog.html'

        })

        .state('login', {
            url: '/login',
            templateUrl: 'form/login.html'

        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'form/signup.html'

        })

        .state('reminder', {
            url: '/reminder',
            templateUrl: 'reminder/index.html',
            controller: 'MealsController'

        })
        .state('nutri', {
            url: '/nutri',
            templateUrl: 'nutrients_calc/nutri.html',
            controller: 'nutriCtrl'

        })






});


















app.controller('BlogController', ['$http', function($http){

    var blog = this;
    blog.title = "Discuss Here ";

    blog.posts = {};

   blog.posts = [
    {
        "title": "Protein",
        "body": [
            "Protein is found throughout the body—in muscle, bone, skin, hair, and virtually every other body part or tissue. It makes up the enzymes that power many chemical reactions and the hemoglobin that carries oxygen in your blood. At least 10,000 different proteins make you what you are and keep you that way."
        ],
        "author": "somya sodani",
        "comments": [
            {
                "body":"Thanks for the information!!",
                "author": "Anshul"
            }
        ],
        "likes":2,
        "image":"http://www.healthyfoodhouse.com/wp-content/uploads/2013/02/the-best-high-protein-foods-.jpg",
        "createdOn":020216
    },
    {
        "title": "Protein",
        "body": [
            
            "Protein is found throughout the body—in muscle, bone, skin, hair, and virtually every other body part or tissue. It makes up the enzymes that power many chemical reactions and the hemoglobin that carries oxygen in your blood. At least 10,000 different proteins make you what you are and keep you that way."
        ],
        "author": "Nick Moreton",
        "comments": [
            {
                "body":"Thanks for the information!!",
                "author": "trollguy87"
            }
        ],
        "likes":0,
        "image":"http://www.healthyfoodhouse.com/wp-content/uploads/2013/02/the-best-high-protein-foods-.jpg",
        "createdOn":040217
    },

    {
        "title": "Protein",
        "body": [
            "Protein is found throughout the body—in muscle, bone, skin, hair, and virtually every other body part or tissue. It makes up the enzymes that power many chemical reactions and the hemoglobin that carries oxygen in your blood. At least 10,000 different proteins make you what you are and keep you that way."
        ],
        "author": "Nick Moreton",
        "comments": [
            {
                "body":"Thanks for the information!!",
                "author": "trollguy87"
            }
        ],
        "likes":0,
        "image":"http://www.healthyfoodhouse.com/wp-content/uploads/2013/02/the-best-high-protein-foods-.jpg",
        "createdOn":060816
    },

    {
        "title": "Protein",
        "body": [
            "Protein is found throughout the body—in muscle, bone, skin, hair, and virtually every other body part or tissue. It makes up the enzymes that power many chemical reactions and the hemoglobin that carries oxygen in your blood. At least 10,000 different proteins make you what you are and keep you that way."
        ],
        "author": "Nick Moreton",
        "comments": [
            {
                "body":"Thanks for the information!!",
                "author": "trollguy87"
            }
        ],
        "likes":0,
        "image":"http://www.healthyfoodhouse.com/wp-content/uploads/2013/02/the-best-high-protein-foods-.jpg",
        "createdOn":030217
    }


];
    blog.tab = 'blog';

    blog.selectTab = function(setTab){
        blog.tab = setTab;
        console.log(blog.tab)
    };

    blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
    };

    blog.post = {};
    blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post ={};
    };

}]);

app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment ={};
    };
});


app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left = function() {
        return 100 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
        console.log('AT save');
    };
    $scope.save = function() {
        alert("Note Saved");
    };
});





