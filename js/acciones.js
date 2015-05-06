// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap',function(){
	navigator.vibrate(1000);

}); //tap a btnvibrar
$('#btnbeep').on('tap',function(){
	navigator.notification.beep(2);
});

$('#izquierda').on('swipeleft',
function (){
	alert("Barrio a la izquierda");
});

$('#derecha').on('swiperight',
function (){
	alert("Barrio a la derecha");
});

document.addEventListener("pause",function(){
	$('#listado').append("<p>Se pausó </p>");
});

document.addEventListener("resume",function(){
	$('#listado').append("<p>Se reinició </p>");
});

$(window).on('orientationchange',function(e){
	
$('#listado').append("<p>Orientación: "+ e.orientation + "</p>");
});
}); 
});

