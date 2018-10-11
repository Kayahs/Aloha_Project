$(document).ready(function(){
	$('.main-carousel').flickity({
		cellAlign:"left",
		prevNextButtons: false
	});

	$('.carousel-add-to-cart').on('click', () => {
		var element = $('#cart-item-count');
		var curCartCount = parseInt(element.text());
		if(curCartCount == 0) element.css("display", "flex");
		element.text(++curCartCount);
	});

	$('#contact-form').on('submit', () => {
		var email = $("#contact-email").val();
		console.log(email);
		if (validateEmail(email)) {
			alert("Thanks for subscribing!");
		} else {
			alert("Invalid Email");
		}	
	});
});

function validateEmail(email) {
	var expr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return expr.test(email);
}


function smoothScrollTo(targetID) {
	var headerOffset = 114;
	var elementPosition = $(targetID).offset().top;
	var offsetPosition = elementPosition - headerOffset;
	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});
}