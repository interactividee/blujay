$( function() {
	"use strict";
	$('.infobox').hide();
	$('#tnt-container-table').find('tr').click( function(){
  	console.log('You clicked row '+ ($(this).index()+1) );
		var rowClicked = ($(this).index()+1);
		console.log('You clicked row ' +rowClicked);
		$('.infobox').removeClass('row1 row2 row3 row4');
		$('.infobox').addClass("row" +rowClicked);
		$('.infobox').show();
	});
	$('a.infobox-close').click( function(){
		$('.infobox').hide();
	});
	$('.infobox-content').hide();
	$('.infobox-content.active').show();
	$('#items-link').click( function(){
		$('.infobox-nav-link').removeClass('active');
		$(this).addClass('active');
		$('.infobox-content').hide();
		$('#items-content').show();
	});
	$('#container-details-link').click( function(){
		$('.infobox-nav-link').removeClass('active');
		$(this).addClass('active');
		$('.infobox-content').hide();
		$('#container-details-content').show();
	});
	//open TNT Container Popup
	$('#tnt-container-items-table').on('click','tr', function(){
	  $('#tnt-container-popup').dialog('open');
		console.log('ya clicked it!');
	});
});