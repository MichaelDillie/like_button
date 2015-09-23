(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var changeMost = function changeMost() {
	count++;
	console.log(count);
	benjamin.innerHTML = 'We did it!!!!!!!!';
};

benjamin.addEventListener('click', changeMost);

//-----------------------------------------------------------

benjamin.addEventListener('click', function () {
	count++;
	console.log(count);
	benjamin.innerHTML = 'We did it!!!!!!!!';
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map