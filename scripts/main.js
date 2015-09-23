'use strict';

var likes = document.getElementById('likes');
var lable = document.getElementById('lable');
var animals = document.getElementById('animals');


var clicks = 0;

var changeLikes = function() {
	clicks++;
	likes.innerHTML = clicks + ' ' + lable.value;
	console.log(likes.value)
	console.log(lable.value)
}

likes.addEventListener('click', changeLikes);

var reset = document.getElementById('reset');

function doReset() {
	lable.value = 'Likes';
}

reset.addEventListener('click', doReset);
