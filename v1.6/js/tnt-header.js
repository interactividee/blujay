$( function() {
	"use strict";
	//initiate tableSorter
	$('#attached-pos-table').tablesorter({
		debug: false,
		sortReset: true,
		sortRestart: true
	});
	//initiate jScrollPane, set time length of scroll, set height of scrollDrag
	$('#attached-pos-wrapper').jScrollPane({
		showArrows: true, 
		autoReinitialise:false,
		horizontalGutter: 0
	});
	//open TNT Header Popup
	$('a.trigger-tnt-header-popup').click( function(){
	  $('#tnt-header-popup').dialog('open');
	});
});