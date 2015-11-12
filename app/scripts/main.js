(function() {
    'use strict';
    angular.module('aayiram', ['ngMessages', 'ngMaterial', 'ngAnimate', 'ui.router'])
        .controller("DemoController", function($scope, $mdGridLayout) {

            $mdGridLayout.animateWith(function gsapAnimator(grid, tiles) {
                grid.element.css(grid.style);
                tiles.forEach(function(t) {
                    t.element.css(t.style);
                });
            });
        })
        .config(function($mdIconProvider) {
            $mdIconProvider
                .iconSet("avatar", 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/181892/avatars.svg', 128);

        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('pink')
                .accentPalette('orange')
                .backgroundPalette('red');
        });

}());
