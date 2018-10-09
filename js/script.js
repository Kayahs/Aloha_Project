$(document).ready(function(){
	$('.main-carousel').flickity({
		cellAlign:"left",
		prevNextButtons: false
	});
});

function incrementCart() {
	var cartCountElem = document.getElementById('cart-item-count');
	console.log(cartCountElem);
	var currentCount = parseInt(cartCountElem[0].innerHTML);
	console.log(cartCountElem.innerHTML);
	console.log(currentCount);
	var newCount = currentCount++;
	cartCountElem.innerHTML = newCount;
}