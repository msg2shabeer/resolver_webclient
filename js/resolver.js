$(function(){
	
	// Define all pages
	var pages = [
		'page-complaints',
		'page-customers'
	];

	// Home page
	var homePage 		=	'page-complaints';
	function showHomePage(){
		$('#'+homePage).show();
	}

	// hide all pages function
	function hideAllPages(){
		$.each(pages, function(i, spage){
			$('#'+spage).hide();
			$('#'+spage).height(window.innerHeight);
		});
	}

	// hide all pages
	hideAllPages();
	
	// Show home page
	showHomePage();

	// Show purticular page
	function loadPage(page){
		hideAllPages();
		$('#'+page).show();
	}

	// home page controlls
	var midPoint = window.innerWidth/2;
	var midPoint2 = window.innerHeight - 75;
	$('#btnAddComplaint').css({position: 'fixed', right: midPoint+'px', top: midPoint2+'px'});
	
	

	// menu actions
	$('#menu-complaints').click(function(){
		loadPage('page-complaints');
	});
	$('#menu-customers').click(function(){
		loadPage('page-customers');
	});
});