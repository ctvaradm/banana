define([
  'angular',
  'kbn'
],
function (angular, kbn) {
  'use strict';

  angular
    .module('kibana.directives')
    .directive('tip', function($compile) {
      return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
          // var _t = '<i class="icon-'+(attrs.icon||'question-sign')+'" bs-tooltip="\''+
          //   kbn.addslashes(elem.text())+'\'"></i>';
          var _t = '';
          if (!attrs['placement']) {
            _t = '<i class="fa fa-'+(attrs.icon||'question-circle')+'" bs-tooltip="\''+
            kbn.addslashes(elem.text())+'\'"></i>';
          } else {
            _t = '<i class="fa fa-'+(attrs.icon||'question-circle')+'" bs-tooltip="\''+
            kbn.addslashes(elem.text())+'\'" data-placement="'+attrs['placement']+'"></i>';
          }
          
          elem.replaceWith($compile(angular.element(_t))(scope));
        }
      };
    });
});