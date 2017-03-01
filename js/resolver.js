$(function(){
	
	// Define all pages
	var pages = [
		'page-complaints',
		'page-customers'
	];

	// hide all pages function
	function hideAllPages(){
		$.each(pages, function(i, spage){
			$('#'+spage).css("display","none");
		});
	}

	// hide all pages
	hideAllPages();
	
	// Show purticular page
	function loadPage(page){
		hideAllPages();
		$('#'+page).css("display","block");
	}

	// menu actions
	$('#menu-complaints').click(function(){
		loadPage('page-complaints');
	});
	$('#menu-customers').click(function(){
		loadPage('page-customers');
	});
});