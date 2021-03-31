var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;
var titleH1 = document.createElement('h1');
document.body.appendChild(titleH1);
var table = document.createElement('table');
var colHeading = document.createElement('tr');
var titleHeading = document.createElement('th');
titleHeading.innerHTML = "Title";
var yearHeading = document.createElement('th');
yearHeading.innerHTML = "Year";
colHeading.appendChild(titleHeading);
colHeading.appendChild(yearHeading);
table.appendChild(colHeading);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var bookTitle = document.createElement('td');
	bookTitle.innerHTML = books[i].title;
	var bookYear = document.createElement('td');
	bookYear.innerHTML = books[i].year;
	var col = document.createElement('tr');
	col.appendChild(bookTitle);
	col.appendChild(bookYear);
	table.appendChild(col);
}
document.body.appendChild(table);

var allRows = document.querySelectorAll('tr');
for (var i=1; i < allRows.length; i++){
	var valittuRow = allRows[i];
	var eventHandler = function (row){
		return function (){
			var title = row.getElementsByTagName("td")[0];
			titleH1.innerHTML = title.innerHTML;
		};
	};
	valittuRow.onclick = eventHandler(valittuRow);
}
