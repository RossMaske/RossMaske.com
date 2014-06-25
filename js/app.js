//head following the mouse
//Find where the mouse is and change the picture depending on mouse postion
//1.find mouse.
//2.determine position relative to the head.
//3. change picture displayed relative to the mouse.

$( "html" ).mousemove(function( event ) {
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  var p = $( "#profile-photo" );
  var position = p.position();
  var x= event.clientX - position.left - 124;
  var y= -event.clientY + position.top + 80;
  var grad=y/x;
  var rads= Math.atan2(y, x) ;
  var degree = rads / (Math.PI/180);
 //$( "span:last" ).text( "x: " + x  + "    y : "+ y  + "    degree:" + degree );
if (x>-61 && x<25 && y>-30 && y<60){
		$( "#profile-photo").attr( "src", "img/me.jpg" );
	}
else{
	if (degree > -22.5 && degree < 22.5 ) {
		$( "#profile-photo").attr( "src", "img/meright.jpg" );
	}
	else if (degree > 22.5 && degree < 67.5  ) {
		$( "#profile-photo").attr( "src", "img/meupright.jpg" );
	}
	else if(degree > 67.5 && degree < 95) {
		$( "#profile-photo").attr( "src", "img/meup.jpg" );
	}
	else if ( degree > 95 && degree < 157.5 ) {
		$( "#profile-photo").attr( "src", "img/meupleft.jpg" );
	}
	else if (degree > 157.5 && degree < 180 || degree > -180 && degree < -157.5 ) {
		$( "#profile-photo").attr( "src", "img/meleft.jpg" );
	}
	else if (degree > -157.5 && degree < -112.5 ) {
		$( "#profile-photo").attr( "src", "img/medownleft.jpg" );
	}
	else if (degree > -112.5 && degree < -67.5 ) {
		$( "#profile-photo").attr( "src", "img/medown.jpg" );
	}
	else if ( degree > -67.5 && degree < -22.5 ) {
		$( "#profile-photo").attr( "src", "img/medownright.jpg" );
	}
}
});

var p = $( "#profile-photo" );
var position = p.position();
$( "p:last" ).text( "left: " + position.left + ", top: " + position.top );