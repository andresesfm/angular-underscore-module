/**
 * Let's you use underscore as a service from a controller.
 * Got the idea from: http://stackoverflow.com/questions/14968297/use-underscore-inside-controllers
 * @author: Andres Aguilar https://github.com/andresesfm
 */
angular.module('underscore', []).factory('_', ['$window', function($window) {
    return $window._; // assumes underscore has already been loaded on the page
}]);
