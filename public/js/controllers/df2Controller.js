angular.module('roadsec')
    .controller('df2Controller', ['$rootScope', '$scope', '$http', '$localStorage', '$location', 'usuariosService', function($rootScope, $scope, $http, $localStorage, $location, usuariosService) {

        var baseUrl = 'http://localhost:5000/dados';

        // $rootScope.token = result.access_token;
        // $scope.texto = result.texto;
        // $scope.autor = result.autor;
        // usuariosService.validaLogin(result);
        // $location.path('/dados');
        // 
        var init = function() {
            $http.get(baseUrl, { headers: {'x-access-token': $rootScope.token} })
                .then(
                    function(result) {
                        console.log(result);
                        $scope.texto = result.data.texto;
                        $scope.autor = result.data.autor;
                    },
                    function(error) {
                        console.log(error);
                    });
        };
        // and fire it after definition
        init();



    }]);
