$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a.galleryimage").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});
});