/// <reference path="../../common/app.module.ts" />
var App;
(function (App) {
    var Controls;
    (function (Controls) {
        var Textarea;
        (function (Textarea) {
            function TextareaDirective() {
                return {
                    restrict: 'A',
                    template: App.module.getTemplate('controls\textarea\textarea.template.js'),
                    transclude: true,
                    scope: {
                        ngModel: "=",
                        label: "@",
                        max: "=",
                        rows: "="
                    }
                };
            }
            Textarea.TextareaDirective = TextareaDirective;
            App.module.register.directive('yfoTextarea', TextareaDirective);
        })(Textarea = Controls.Textarea || (Controls.Textarea = {}));
    })(Controls = App.Controls || (App.Controls = {}));
})(App || (App = {}));
//# sourceMappingURL=textarea.directive.js.map