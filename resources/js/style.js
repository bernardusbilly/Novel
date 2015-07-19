$(window).ready(function() {
	var hideChapter = true;
	$(".chapter-menu").click(function() {

		if (hideChapter == true) {
			$(".chapter-menu").css("transform", "rotateX(180deg)");
			$(".chapter-menu").css("margin-bottom", "-6px");
			$(".chapter-number").css("transform","translateY(0px)");
			hideChapter = false;
		} else {
			$(".chapter-menu").css("transform", "rotateX(0deg)");
			$(".chapter-menu").css("margin-bottom", "-35px");
			$(".chapter-number").css("transform","translateY(30px)");
			hideChapter = true;
		}
	});
});