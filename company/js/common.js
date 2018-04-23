var offsetTop = $('.Progress').offset().top,
  windowHeight = $(window).height();

function move(max_width,id_elem) {
  var elem = document.getElementById(id_elem);
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= max_width) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
  

}
$(document).on('scroll', function() {
  var scrollTop = $(document).scrollTop();
 
  if ((scrollTop + windowHeight) >= offsetTop) {
	move(95,'bar1');
	move(75,'bar2');
	move(85,'bar3');
	move(90,'bar4');
	move(70,'bar5');
    $(document).off('scroll')
  }

})