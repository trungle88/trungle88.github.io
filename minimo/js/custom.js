$(document).ready(function(){
	$("#row-post-hide").hide();
	$("#row-post-show").show();

    $('#btn-load-more').click(function(){
        $("#row-post-hide").toggle('show');
        $("#btn-load-more").toggle('hide');
        $("#btn-hide-more").toggle('show');

    });
     $('#btn-hide-more').click(function(){
        $("#row-post-hide").toggle('hide');
        $("#btn-load-more").toggle('show');
        $("#btn-hide-more").toggle('hide');
    });



});