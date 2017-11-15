document.addEventListener("DOMContentLoaded", function(event) {
	launch();
});

function addRowHandlers(table, fn) {
	var table = document.getElementById(table);
	var rows = table.getElementsByTagName("tr");
	for (var i = 1; i < rows.length; i++) {
		var row = table.rows[i];
		var cols = row.getElementsByTagName("td");
		var o = {};
		debugger;
		for (var j=0;j<cols.length;j++) {
			o['c'+j]=cols[j].innerHTML;
		}
		var record=[];
		record[0] = {};
		record[0].data = o;
		row.onclick = function() {return fn(row,record)};  
	}
}

