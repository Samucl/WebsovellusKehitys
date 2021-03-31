//console.log('page loaded');
console.log(document);

var summary = document.getElementById("summary").querySelectorAll("h1, p");

document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	summary[0].innerHTML = document.querySelector('#userForm input[type="text"]').value;
};
document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	summary[1].innerHTML = document.querySelector('#userForm input[type="email"]').value;
};
document.querySelector('#userForm input[type="password"]').onkeyup = function() {
	summary[2].innerHTML = document.querySelector('#userForm input[type="password"]').value;
};