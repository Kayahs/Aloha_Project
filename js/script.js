$(document).ready(function(){
	$('.main-carousel').flickity({
		cellAlign:"left",
		prevNextButtons: false
	});
});

function incrementCart() {
	var cartCountElem = document.getElementById('cart-item-count');
	var currentCount = parseInt(cartCountElem.innerHTML);
	if (currentCount == 0) {
		cartCountElem.style.display = "flex";
	}
	currentCount++;
	cartCountElem.innerHTML = currentCount;
}