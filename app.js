var app = angular.module('drawWorksApp', ['firebase', 'ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/registration', {
        templateUrl: '/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/aboutMe', {
        templateUrl: 'Aboutme.html',
        controller: 'aboutMeCtrl'
    })
    .when('/general_projects', {
     templateUrl: '/threads/general_projects.html',
        controller: 'general_projectsCtrl',
        resolve: {
            projectsRef: function (projectService) {
            return projectService.getProjects();
            }
        }
    })
    .when('/thread/:threadId', {
    templateUrl: 'threads/thread.html',
    controller: 'ThreadCtrl',
     resolve: {
            threadRef: function (threadService, $route) {
            return threadService.getThread($route.current.params.threadId);
            },
            commentsRef: function (threadService, $route) {
            return threadService.getComments($route.current.params.threadId);
            }
        }
    })
    .otherwise({
        redirectTo: '/login'
    })
    });

//    app.run(function($rootScope, $location, envService){
//        $rootScope.$on('$routeChangeStart', function(event,next,current){
//    //callback
//             if(envService.authUserName()){
//                $rootScope.username = envService.authUserName();
//             }
//             else
//             {
//                 $location.path('/login')
//             }
//        })
//        
  //  })


    