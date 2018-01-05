$(document).ready(function(){
	$('*[href]').each(function(){
		var href=encodeURI($(this).attr('href'));
		$(this).attr('href',href);
	});
	$('*[src]').each(function(){
		var src=encodeURI($(this).attr('src'));
		$(this).attr('src',src);
	});
}); 
