<<<<<<< HEAD
'use strict';

/**
 *  @ngdoc directive
 *  @name zsApp.directive:zsSimpleToggle
=======
/**
 * Copyright 2015, Symantec Corporation
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree
 */

'use strict';
/*jshint bitwise: false */

/**
 *  @ngdoc directive
 *  @name zeus.widgets.directive:zsSimpleToggle
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
 *  @restrict E
 *
 *  @description
 *
 *  This provides the toggle componant which can be used as checkbox and customize
 *  with color, click callback etc.
 *
 *  @scope
 *
 *  @param {string=} text Sets the display text for toggle button.
 *  @param {boolean=} state Set/get the current state of the toggler. Also can set
 *  default state to true/false.
<<<<<<< HEAD
=======
 *  @param {Number=} lighten Lignten ratio for mouseover background color. Can
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
 *  @param {string=} switch-color Accept color code and get applied to border, checkmark
 *  etc
 *  @param {boolean=} inactive This disables the toggler and hide the border
 *  @param {function()=} zsChange Callback function to handle change event from
 *  controller.
 *  @example
<<<<<<< HEAD
<example module="zsApp">
=======
<example module="zeus.widgets">
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
    <file name="index.html">
        <div ng-controller="myCtrl">
            <zs-simple-toggle text="{{ toggle.label }}"
                switch-color="#9c27b0"
<<<<<<< HEAD
=======
                lighten="50"
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
                zs-change="clickMe()"
                state="toggle.state">
            </zs-simple-toggle>

            <zs-simple-toggle text="Inactive"
                switch-color="#12287E"
                state="true"
                inactive="true">
            </zs-simple-toggle>

        </div>
    </file>
    <file name="myCtrl.js">
<<<<<<< HEAD
        angular.module( 'zsApp' ).controller( 'myCtrl', function ( $scope ) {
=======
        angular.module( 'zeus.widgets' ).controller( 'myCtrl', function ( $scope ) {
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c

            $scope.toggle = {
                label: "Demo Label",
                state: false
            };

            $scope.clickMe = function () {
                alert( 'You clicked Me...!!!' );
            };

        } );
    </file>
</example>
 */

angular.module( 'zeus.widgets' )
<<<<<<< HEAD
  .directive( 'zsSimpleToggle', [ 'lightenFilter', function ( lighten ) {
    return {
        templateUrl: 'templates/directives/simple_toggle.html',
=======
  .directive( 'zsSimpleToggle', [ function () {
    return {
        templateUrl: 'html/simple_toggle.html',
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
        restrict: 'E',
        replace: true,
        scope: {
            text: '@',
            state: '=?',
<<<<<<< HEAD
=======
            lighten: '@',
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
            color: '@switchColor',
            zsChange: '&',
            inactive: '@'
        },

        link: function ( scope, element ) {
            var wrap = $( element ),
                icon = wrap.find( '[data-role="icon"]' ),
                toggleState,
                recalcStyles,
<<<<<<< HEAD
                attachEvents;
=======
                attachEvents,
                lighten;

            lighten = function ( col, amt ) {
                var usePound = false,
                    num, r, b, g;

                if ( col[ 0 ] === '#' ) {
                    col = col.slice( 1 );
                    usePound = true;
                }

                num = parseInt( col, 16 );
                r = ( num >> 16 ) + amt;

                if ( r > 255 ) {
                    r = 255;
                } else if ( r < 0 ) {
                    r = 0;
                }

                b = ( ( num >> 8 ) & 0x00FF ) + amt;

                if ( b > 255 ) {
                    b = 255;
                } else if ( b < 0 ) {
                    b = 0;
                }

                g = ( num & 0x0000FF ) + amt;

                if ( g > 255 ) {
                    g = 255;
                } else if ( g < 0 ) {
                    g = 0;
                }

                return ( usePound ? '#' : '' ) +
                    ( g | ( b << 8 ) | ( r << 16 ) ).toString( 16 );
            };
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c

            // Handler for state toggle.
            // Fired on click of slider
            toggleState = function () {
                scope.state = !scope.state;

                if ( scope.zsChange ) {
                    scope.zsChange();
                }

                recalcStyles();
            };

            attachEvents = function () {
                icon.css( {
                    borderColor: scope.color
                } );

                wrap.css( {
                    borderColor: scope.color
                } );

                wrap.click( function () {
                    scope.$apply( function () {
                        toggleState();
                    } );
                } );

                wrap.mouseover( function () {
<<<<<<< HEAD
                    console.log( '------Mouse over------' );
                    $( this ).css( {
                        backgroundColor: lighten( scope.color, 60 )
=======
                    $( this ).css( {
                        backgroundColor: lighten( scope.color, +( scope.lighten ) )
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
                    } );
                } );

                wrap.mouseout( function () {
                    $( this ).css( {
                        backgroundColor: '#FFF'
                    } );
                } );
            };

            recalcStyles = function () {
                var bgColor = '#FFF';

                if ( scope.state ) {
                    wrap.addClass( 'state-on' );
                    wrap.removeClass( 'state-off' );
<<<<<<< HEAD
                    icon.addClass( ' glyphicon-ok' );
                    bgColor = scope.color;
                    icon.html( '' );
=======
                    bgColor = scope.color;
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c

                } else {
                    wrap.addClass( 'state-off' );
                    wrap.removeClass( 'state-on' );
<<<<<<< HEAD
                    icon.removeClass( 'glyphicon-ok' );
                    icon.html( '&nbsp;' );
=======
>>>>>>> c7d1017e86ca9ebcf90755b81da750fce22d9c2c
                }

                icon.css( {
                    backgroundColor: bgColor
                } );
            };

            scope.state = scope.state || false;

            if ( !scope.inactive ) {
                recalcStyles();
                attachEvents();
            } else {
                wrap.addClass( 'state-inactive' );
            }
            // Watch for changes in state
            scope.$watch( 'state', function () {
                recalcStyles();
            } );
        }
    };
} ] );
