angular.module('roadsec')
    .controller('TelasController', ['$rootScope', '$scope', '$http', '$localStorage', '$location', 'usuariosService', function($rootScope, $scope, $http, $localStorage, $location, usuariosService) {

        $scope.signin = function() {

            var authurl = 'http://localhost:5000/auth';
            var username = $scope.username;
            var password = $scope.password;


            var data = "username=" + username + "&password=" + password;

            var u = $scope.username;

            if (u.search("';or") != -1 && u.search("1=1") != -1 && u.search("--") != -1) {
                 var sqlInjection = "username=nind&password=roadsec"
                $http.post(authurl, sqlInjection, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                    .success(function(result) {
                        usuariosService.validaLogin(result);
                        $location.path('/dados');
                    });
            } else if (username != 'nind' && password != 'roadsec') {

                alert("Usuário ou senha invalida!");

            }

            $http.post(authurl, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function(result) {
                    usuariosService.validaLogin(result);
                    $location.path('/dados');
                });
        }


    }]);
