$('#content').css({height:'400px',overflow:'hidden'});
	
	$('#nav a').on('click', function(event) {
		var obj = $(this);
		if (!$(obj).parent('li').hasClass()) {
			$('li.active').removeClass('active');
			$(obj).parent('li').addClass('active');
			
			var target = $( $(this).attr('href') );
			if( target.length ) {
				$('#content').animate({
					scrollTop: ( target.position().top-$('#bs1').position().top)
				}, 1000);
			}
		}
	return false;
	});// 





