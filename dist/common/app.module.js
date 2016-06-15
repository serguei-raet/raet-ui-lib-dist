/// <reference path="../../typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    var module = (function () {
        function module() {
        }
        module.getTemplate = function (url) {
            return module.templates[url];
        };
        module.templates = {};
        module.register = angular
            .module("angularPOC", []);
        return module;
    }());
    App.module = module;
})(App || (App = {}));
//# sourceMappingURL=app.module.js.map