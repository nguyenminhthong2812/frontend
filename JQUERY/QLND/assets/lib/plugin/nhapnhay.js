window.jQuery.prototype.NhapNhay = function(solan){
	var id = $(this);
	for (var i = 0; i < solan; i++) {
		id.fadeOut(500);
		id.fadeIn(500);
	}
}