var $settings = $('.settings');

$settings.find('.handle a').on('click', function(e){
	e.preventDefault();

	var $span = $(this).find('span');
	$settings.toggleClass('open');
	$span.toggleClass('lnr-cog');
	$span.toggleClass('lnr-cross');
});

$settings.find('a.color').on("click",function(e){
	e.preventDefault();

	var $this = $(this);
	$this.addClass("active").siblings().removeClass("active");
	$("#css-jordan").attr("href","css/jordan.php?color="+$this.data("color"));
});