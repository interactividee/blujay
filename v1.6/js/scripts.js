$( function() {
	"use strict";
	function showLoader(){
		$('#loading').show();
		setTimeout(function(){
			$('#loading').hide();
		}, 1000);
	}
	function toggleQuickLinksMenu(){
		if( $('.quick-links').hasClass('closed') ){
			$('.quick-links').removeClass('closed');
			$('.quick-links').addClass('open');
		} else if ( $('.quick-links').hasClass('open') ){
			$('.quick-links').removeClass('open');
			$('.quick-links').addClass('closed');
		}
	}
/////////////////////////////////////////
///   INITIALIZE JQUERY UI ELEMENTS   ///
/////////////////////////////////////////
	//
	//ACCORDIONS
	$('ul.accordion').accordion({ 
		active: false, 
		collapsible: true, 
		heightStyle: 'content' 
	});
	//MENUS
	$('.help-menu ul').menu();
	//TABS 
	$('#page').tabs({
		collapsible: true, 
		active: false
	});
	$('#tnt-main').tabs({
		active: 5,
		beforeActivate: function (event, ui) {
			showLoader();
		}
	});
	$('#tnt-container').tabs();
	$('#tnt-remarks').tabs();
	$('#tnt-variousInfo').tabs();
	$('#tnt-header-popup-tabs').tabs({
		active: 0,
		activate: function(event, ui){
			$('#groupPane').jScrollPane({
				showArrows: true, 
				autoReinitialise:false,
				horizontalGutter: 0
			});
			$('#groupPaneTable').tablesorter({
				debug: false,
				sortReset: true,
				sortRestart: true
			});
		}
	});
	//DIALOG(POPUP)
	$( "#tnt-header-popup" ).dialog({
      resizable: false,
      height: "auto",
      width: 1069,
      modal: true,
			draggable: false,
			position: { my: "center top", at: "center top", of: "header", collision: "none"},
			autoOpen: false,
			open: function(event, ui) {
        $('.ui-widget-overlay').addClass('custom-overlay');
				// Yuck they have close text let's remove that
        $('.ui-dialog-titlebar-close').text('');
				// That removed jQuery UI's default span tag inside the button...let's add that back
				$('.ui-dialog-titlebar-close').html('<span class="popup-close"></span>');
				//initiate jScrollPane, set time length of scroll, set height of scrollDrag
				$('#indivPane').jScrollPane({
					showArrows: true, 
					autoReinitialise:false,
					horizontalGutter: 0,
				});
				
				//initiate tableSorter
				$('#indivPaneTable').tablesorter({
					debug: false,
					sortReset: true,
					sortRestart: true
				});
			},
    	close: function() {
        $('.ui-widget-overlay').removeClass('custom-overlay');
    	}      
    });
		$( "#tnt-to-items-popup" ).dialog({
      resizable: false,
      height: "auto",
      width: 788,
      modal: true,
			draggable: false,
			position: { my: "center top", at: "center top", of: "header", collision: "none"},
			autoOpen: false,
			open: function(event, ui) {
        $('.ui-widget-overlay').addClass('custom-overlay');
				// Yuck they have close text let's remove that
        $('.ui-dialog-titlebar-close').text('');
				// That removed jQuery UI's default span tag inside the button...let's add that back
				$('.ui-dialog-titlebar-close').html('<span class="popup-close"></span>');
				//initiate tabs
				$( '#tnt-to-items-popup-tabs' ).tabs();
  			$( '#tnt-to-items-popup-tabs li' ).removeClass( 'ui-corner-top' ).addClass( 'ui-corner-left' );
				$('.tnt-to-items-popup-scrollTable').jScrollPane({
					showArrows: true, 
					autoReinitialise:true,
				});
			},
    	close: function() {
        $('.ui-widget-overlay').removeClass('custom-overlay');
    	}      
    });
		$( "#tnt-add-remarks-popup" ).dialog({
      resizable: false,
      height: "auto",
      width: 617,
      modal: true,
			draggable: false,
			position: { my: "center top", at: "center top", of: "header", collision: "none"},
			autoOpen: false,
			open: function(event, ui) {
        $('.ui-widget-overlay').addClass('custom-overlay');
				// Yuck they have close text let's remove that
        $('.ui-dialog-titlebar-close').text('');
				// That removed jQuery UI's default span tag inside the button...let's add that back
				$('.ui-dialog-titlebar-close').html('<span class="popup-close"></span>');
			},
    	close: function() {
        $('.ui-widget-overlay').removeClass('custom-overlay');
    	}      
    });
		$( "#tnt-container-popup" ).dialog({
      resizable: false,
      height: "auto",
      width: 788,
      modal: true,
			draggable: false,
			position: { my: "center top", at: "center top", of: "header", collision: "none"},
			autoOpen: false,
			open: function(event, ui) {
        $('.ui-widget-overlay').addClass('custom-overlay');
				// Yuck they have close text let's remove that
        $('.ui-dialog-titlebar-close').text('');
				// That removed jQuery UI's default span tag inside the button...let's add that back
				$('.ui-dialog-titlebar-close').html('<span class="popup-close"></span>');
				//initiate tabs
				$( '#tnt-container-popup-tabs' ).tabs();
  			$( '#tnt-container-popup-tabs li' ).removeClass( 'ui-corner-top' ).addClass( 'ui-corner-left' );
				$('.tnt-container-popup-scrollTable').jScrollPane({
					showArrows: true, 
					autoReinitialise:true,
				});
			},
    	close: function() {
        $('.ui-widget-overlay').removeClass('custom-overlay');
    	}      
    });
	//
/////////////////////////////////////////
///      END - JQUERY UI ELEMENTS-    ///
/////////////////////////////////////////	
	//initially hide all Main Nav Submenus 
	$('.mainNav-subMenu').hide();	
	//hover display and hide properties for Help Menu
	$('.help-menu').hide();	
	$('.help').mouseenter(function(){
		$('.help-menu').show();
	});
	$('.help-menu .mouseCatcher').mouseenter(function(){
		$('.help-menu').show();
	});
	$('.help-menu').mouseleave(function(){
		if ( ( !$('.help').is(':hover') ) && (!$('.help-menu .mouseCatcher').is(':hover') ) ) {
			$('.help-menu').hide();
		}
	});
	//open and close Quick Links Menu
	$('.quick-links-trigger').click(function(){
		toggleQuickLinksMenu();
	});
	//mouse click - check if click is outside of Main Nav Submenu and close it
	$('body').mouseup(function (e){
    var container = $('.mainNav-subMenu');
    if (!container.is(e.target) && container.has(e.target).length === 0){ 
    	container.hide();
			$('.mainNavigation ul li').removeClass('ui-tabs-active');
    }
	});
	//QUICK LINKS NAVIGATION
	$('.tnt-screen').hide();
	$('#tnt-main.tnt-screen').show();
	$('#quick-link-container').click( function(){
		showLoader();
		toggleQuickLinksMenu();
		$('.tnt-screen').hide();
		$('#tnt-container.tnt-screen').show();
		//initiate CONTAINER tableSorter
		$('#tnt-container-table').tablesorter({
			debug: false,
			sortReset: true,
			sortRestart: true
		});
		//initiate CONTAINER ITEMS tableSorter
		$('#tnt-container-items-table').tablesorter({
			debug: false,
			sortReset: true,
			sortRestart: true
		});
	});
	$('#quick-link-remarks').click( function(){
		showLoader();
		toggleQuickLinksMenu();
		$('.tnt-screen').hide();
		$('#tnt-remarks.tnt-screen').show();
		//initiate REMARKS tableSorter
		$('#tnt-remarks-table').tablesorter({
			debug: false,
			sortReset: true,
			sortRestart: true
		});
		//initiate REMARKS ITEMS tableSorter
		$('#tnt-remarks-items-table').tablesorter({
			debug: false,
			sortReset: true,
			sortRestart: true
		});
	});
	$('#quick-link-variousInfo').click( function(){
		showLoader();
		toggleQuickLinksMenu();
		$('.tnt-screen').hide();
		$('#tnt-variousInfo.tnt-screen').show();
	});
	$('#quick-link-tnt').click( function(){
		showLoader();
		toggleQuickLinksMenu();
		$('.tnt-screen').hide();
		$('#tnt-main.tnt-screen').show();
	});
});