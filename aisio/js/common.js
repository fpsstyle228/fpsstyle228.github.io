$(document).ready(function(){
  $(".btn").click(function() {
  	$("#myModal").modal('show');
  });
});


var boxArray = document.getElementById("boxes").getElementsByTagName("p");
var contentArray = document.getElementById("modal_content");
var content_length = contentArray.length;
var length = boxArray.length;
var active_class_name = "active";
var show_class_name = "show";

function handleIt() {
	if ( boxArray[boxArray.length - 1].className == active_class_name ) {
		for ( var counter = 1; counter < length; counter++ )
				boxArray[counter].classList.remove(active_class_name);
		if( contentArray[contentArray.length - 1].className == show_class_name ){
			for ( var counter = 1; counter < content_length; counter++ ){
				contentArray[counter].classList.remove(show_class_name);
			}
		}	
		return;
	}

	for (var counter = 0;counter < content_length;counter++){
		if ( contentArray[counter].className == show_class_name && !contentArray[counter + 1].classList.contains(show_class_name)){
		contentArray[counter + 1].classList.add(show_class_name);	
		}
	}

	for ( var counter = 0; counter < length; counter++ ) {
		if ( boxArray[counter].className == active_class_name && !boxArray[counter+1].classList.contains(active_class_name) ){
			boxArray[counter + 1].classList.add(active_class_name);
			break;
		}
	}
}
