$(document).ready(function() {
	// ẩn tất cả các thẻ div với class="tab_content".
	$(".tab_content").hide();
	// Mặc định nội dung thẻ tab đầu tiên sẽ được hiển thị
	$(".tab_content:first").show(); 

	$("ul.productTab li").click(function() {
		// gỡ bỏ class="active" cho tất cả các thẻ <li>
		$("ul.productTab li").removeClass("active");
		// chèn class="active" vào phần tử <li> vừa được click
		$(this).addClass("active");
		// ẩn tất cả thẻ <div> với class="tab_content"
		$(".tab_content").hide();
		//Hiển thị nội dung thẻ tab được click với hiệu ứng Fade In
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
});