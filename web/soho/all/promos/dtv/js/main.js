
$(function(){
		$(document).on('click', ".popupTrigger", function (e) {
		var $this = $(this);
		var width = ( !!$this.data('width') ) ? $this.data('width') : 500;
		var name = ( !!$this.data('name') ) ? $this.data('name') : 'discWindow';
		window.open( this.href, name, 'height=500,width='+width+',top=100,left=100,scrollbars=yes');
		e.preventDefault();
	});
});
