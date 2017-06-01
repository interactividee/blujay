$( function() {
	"use strict";
/////////////////////////////////////////
///   INITIALIZE JQUERY UI ELEMENTS   ///
/////////////////////////////////////////
	//
	//ACCORDIONS
	$('div.accordion').accordion({ 
		active: false, 
		collapsible: true, 
		heightStyle: 'content' 
	});
	//
/////////////////////////////////////////
///      END - JQUERY UI ELEMENTS-    ///
/////////////////////////////////////////		
	//initiate jScrollPane, set time length of scroll, set height of scrollDrag
	$('.milestones-table').jScrollPane({
		showArrows: true, 
		autoReinitialise:true
	});
	//color Visual Milestones table rows
	$('.milestone-row-header:odd').css('background','#f4f4f4');
	$('.milestones-table .ui-accordion-content:odd').css('background','#f4f4f4');
	//set value for percentage callout on Visual Milestones progress bar(s) 
	$('#progress-perc').text('88%');
	//image map for Visual Milestones	
	$('area.1').mouseenter(function(){
		$('.milestones-map img').attr('src','img/milestones-map02.png');
		$('.milestones-map img').attr('usemap','#milestonesMapHover02');
	});
	$('area.1').mouseleave(function(){
		$('.milestones-map img').attr('src','img/milestones-map01.png');
		$('.milestones-map img').attr('usemap','#milestonesMapHover01');
	});	
});