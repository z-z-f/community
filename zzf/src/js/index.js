/**
 * Created by ZZF on 2017/4/26.
 */
angular.module('app')
    .directive("putFile",function(){
        return {
            restrict:"E",
            scope:{},
            template:'<label for="{{inputId}}"></label>\
                <input type="file" id="{{inputId}}">',
            controller:function($scope){
                $scope.inputId = 'inputFile'+$scope.$id;
            },
            link:function(scope,ele){
                var input = ele.find("input");
                var label = ele.find("label");
                input.on("change",function(){
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function(){
                        label[0].style.background = 'url('+this.result+')';
                    }
                })
            }
        }
    })
    .directive("inputFile1",function(){
        return {
            restrict:"E",
            scope:{},
            template:'<label for="inputFile1"></label>\
                <input type="file" id="inputFile1">',
            link:function(scope,ele){
                var input = ele.find("input");
                var label = ele.find("label");
                input.on("change",function(){
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function(){
                        label[0].style.background = 'url('+this.result+')';
                    }
                })
            }
        }
    })
    //.directive("inputFile4",function(){
    //    return {
    //        restrict:"E",
    //        scope:{},
    //        template:'<label ng-click="go()"></label>',
    //        controller:function($scope,$state){
    //            $scope.go = function () {
    //                $state.go("newPage");
    //            }
    //        }
    //    }
    //})
    .directive("inputFile3",function(){
        return {
            restrict:"E",
            scope:{},
            template:'<label for="inputFile3"></label>\
                <input type="file" id="inputFile3">',
            link:function(scope,ele){
                var input = ele.find("input");
                var label = ele.find("label");
                input.on("change",function(){
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function(){
                        label[0].style.background = 'url('+this.result+')';
                    }
                })
            }
        }
    })
angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("group");
        $stateProvider
            .state({
                name:"index",
                url:"/index",
                template:"这是首页"
            })
            .state({
                name:"group",
                url:"/group",
                templateUrl:"html/group.html"
            })
            .state({
                name:"party",
                url:"/party",
                template:"这是党组织活动服务页"
            })
            .state({
                name:"swaraj",
                url:"/swaraj",
                template:"这是居民自治活动服务页"
            })
            .state({
                name:"group.newPage",
                url:"/newPage",
                templateUrl:"html/page.html"
            })
    })

angular.module('app').run(function($rootScope){

    $rootScope.btn = function(txt){
        if(txt){
            $(".table tbody").append("<tr><td class='text-left'>"+txt+"</td><td>"+new Date().toLocaleString()+"</td><td>回复</td></tr>");
        }


    }

});