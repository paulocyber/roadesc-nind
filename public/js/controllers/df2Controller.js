angular.module('roadsec')
    .controller('df2Controller', ['$rootScope', '$scope', '$http', '$localStorage', '$location', 'usuariosService', function($rootScope, $scope, $http, $localStorage, $location, usuariosService) {

        var baseUrl = 'http://localhost:5000';

        // $rootScope.token = result.access_token;
        // $scope.texto = result.texto;
        // $scope.autor = result.autor;
        // usuariosService.validaLogin(result);
        // $location.path('/dados');
        // 
        var init = function() {
            console.log("chegou");
            $http.get("/dados", { headers: { 'x-access-token': $rootScope.Token } })
                .then(
                    function(result) {
                        console.log(result);
                    },
                    function(error) {
                        console.log(error);
                    });
        };
        // and fire it after definition
        init();



    }]);
