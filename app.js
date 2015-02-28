var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/threads', {
     templateUrl: '/threads/threads.html',
        controller: 'threadsCtrl',
        resolve: {
            threadsRef: function (threadService) {
            return threadService.getThreads();
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

    app.run(function($rootScope, $location, envService){
        $rootScope.$on('$routeChangeStart', function(event,next,current){
    //callback
             if(envService.getUserName()){
                $rootScope.username = envService.getUserName();
             }
             else
             {
                 $location.path('/login')
             }
        })
        
    })


    