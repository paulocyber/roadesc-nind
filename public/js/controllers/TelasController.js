angular.module('roadsec')
    .controller('TelasController', ['$rootScope', '$scope', '$http', '$localStorage', '$location','usuariosService', function($rootScope, $scope, $http, $localStorage, $location, usuariosService) {

        $scope.signin = function() {

            var authurl = 'http://localhost:5000/auth';
            var username = $scope.username;
            var password = $scope.password;


            var data = "username=" + username + "&password=" + password;

            var username=$scope.username;

            console.log(username.search("';select * from user"));

            if(false){
                console.log({id:'666',username: 'devilsname',password:'666'});
            }

            $http.post(authurl, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function(result) {
                    usuariosService.validaLogin(result);
                    $location.path('/dados');
                });
        }


    }]);
