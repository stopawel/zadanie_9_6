window.onload = function() {
	console.log('The page is fully loaded.');

	function checkOnclickEvent(zdarzenie) {
 		console.log(zdarzenie);
	}
	var inputElem = document.getElementById('js-inputValue'),
   		imageElem = document.getElementById('js-image'),
   		buttonElem = document.getElementById('js-button'),
//ZADANIE 9-6
   		add = document.getElementById('addElem'),
   		list = document.getElementById('list');
   		
	imageElem.addEventListener('click', function() {checkOnclickEvent('image was clicked')});
	inputElem.addEventListener('click', function() {checkOnclickEvent('input was clicked')});
	inputElem.addEventListener('keypress', function(a) {a.target.value += ' test ';});
	buttonElem.addEventListener('click', function() {checkOnclickEvent('button was clicked')});

//ZADANIE 9-6

	add.addEventListener('click', function() {
		var element = document.createElement('li');
		var linr = document.getElementsByTagName('li');

		element.innerHTML = 'item ' + linr.length;

		list.appendChild(element);
	});

}