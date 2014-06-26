//head following the mouse
//Find where the mouse is and change the picture depending on mouse postion
//1.find mouse.
//2.determine position relative to the head.
//3. change picture displayed relative to the mouse.

$( "html" ).mousemove(function( event ) {
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  var p = $( ".me1" );
  var position = p.position();
  var x= event.clientX - position.left - 100;
  var y= -event.clientY + position.top + 100;
  var grad=y/x;
  var rads= Math.atan2(y, x) ;
  var degree = rads / (Math.PI/180);
  $( "span:last" ).text( "x: " + x  + "    y : "+ y  + "    degree:" + degree );
if (x>-61 && x<51 && y>-30 && y<60){
		$( ".me1").attr( "id", "me" );
	}
else{
	if (degree > -22.5 && degree < 22.5 ) {
		$( ".me1").attr( "id", "meright" );
	}
	else if (degree > 22.5 && degree < 67.5  ) {
		$( ".me1").attr( "id", "meupright" );
	}
	else if(degree > 67.5 && degree < 130) {
		$( ".me1").attr( "id", "meup" );
	}
	else if ( degree > 130 && degree < 157.5 ) {
		$( ".me1").attr( "id", "meupleft" );
	}
	else if (degree > 157.5 && degree < 180 || degree > -180 && degree < -157.5 ) {
		$( ".me1").attr( "id", "meleft" );
	}
	else if (degree > -157.5 && degree < -112.5 ) {
		$( ".me1").attr( "id", "medownleft" );
	}
	else if (degree > -112.5 && degree < -67.5 ) {
		$( ".me1").attr( "id", "medown" );
	}
	else if ( degree > -67.5 && degree < -22.5 ) {
		$( ".me1").attr( "id", "medownright" );
	}
}
});