$(function() {
	
	setTimeout("distorsion()", 6000);
	
});


function distorsion() {

	$("#distorsion1").hide();
	$("#distorsion2").show("shake", {"distance" : 1, "times" : 2, "direction" : "right"}, 100, function(){
		$("#distorsion1").show();
		$("#distorsion2").hide();
	});

	setTimeout("distorsion()", (Math.floor(Math.random()*6000)+2000));

}