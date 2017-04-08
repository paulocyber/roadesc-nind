angular.module('roadsec')
    .controller('TelasController', ['$rootScope', '$scope', '$http', '$localStorage', '$location','usuariosService', function($rootScope, $scope, $http, $localStorage, $location, usuariosService) {

        $scope.signin = function() {

            var authurl = 'http://localhost:5000/auth';
            var username = $scope.username;
            var password = $scope.password;


            var data = "username=" + username + "&password=" + password;

            var u=$scope.username;


            if(u.search("';select")!=-1&&u.search("from")!=-1&&u.search("user")!=-1){
                console.log({id:'666',username: 'devilsname',password:'666'});
            }

            $http.post(authurl, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function(result) {
                    usuariosService.validaLogin(result);
                    $location.path('/dados');
                });
        }


    }]);
