angular.module('roadsec')
    .controller('df2Controller', ['$rootScope', '$scope', '$http', '$localStorage', '$location', 'usuariosService', function($rootScope, $scope, $http, $localStorage, $location, usuariosService) {

        var baseUrl = 'http://localhost:5000/dados';

        $scope.signin = function() {

            var authurl = 'http://localhost:5000/auth';
            var username = $scope.username;
            var password = $scope.password;


    

            var u=$scope.username;


            if(u.search("JztvciAxPTEtLQ==")!=-1){
                return alert("Sucesso!");
            }else{                  
                alert("Usuário ou senha invalida!");
            }
        }
        // 
        var init = function() {
            $http.get(baseUrl, { headers: {'x-access-token': $rootScope.token} })
                .then(
                    function(result) {
                        //console.log(result);
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
