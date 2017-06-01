$( function() {
	"use strict";
	$( '#tnt-parties-tabs' ).tabs({
		active: 0
	}).addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( '#tnt-parties-tabs li' ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});