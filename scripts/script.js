

var currData;



$("section input").on("input", function () {
	var a = $(this).val();
	currData = $(this).closest("section").attr("data-style")
	$(this).closest("section").find("input").val($(this).val());
	btncreator.previewval(a)
})

var previewBtn = $("#previewbtn");

var btncreator ={
	previewval: function(a){
		var val = a;
		previewBtn.css(currData, a)
	}
}



