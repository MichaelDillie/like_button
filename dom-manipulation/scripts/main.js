'use strict';

// var header = document.getElementById('change-me');
// console.log(header);

// var header2 = document.querySelector('#change-me');
// console.log(header2);

// var header3 = document.querySelectorAll('#change-me');
// console.log(header3);

// var anchorsInNav = document.querySelectorAll('nav > a')
// console.log(anchorsInNav);

// header.innerHTML = 'Welcome to JavaScript';

// header.style.color = '#FF0000';

var benjamin = document.getElementById('benjamin');
var most = document.getElementById('most');

var count = 0;

var changeMost = function() {
	count++;
	console.log(count);
	benjamin.innerHTML = 'We did it!!!!!!!!';
}

benjamin.addEventListener('click', changeMost);

//-----------------------------------------------------------

benjamin.addEventListener('click', function() {
	count++;
	console.log(count);
	benjamin.innerHTML = 'We did it!!!!!!!!';
});
