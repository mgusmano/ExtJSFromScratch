var Ext = {};
Ext.application = function(item) {
	Ext.application.launch = item.launch;
};
Ext.create = function(item) {
	var createditem = {};
	switch(item.xtype) {
	case "grid":
		var grid = document.createElement("div");
		grid.setAttribute("id", "ext-grid1");
		grid.setAttribute("class", "x-grid");
		var title = document.createElement("div");
		title.setAttribute("class", "gridTitle");
		title.innerHTML = item.title;
		var table = document.createElement("table");
		table.setAttribute("class", "blueTable");
		var header = table.createTHead();
		//var header = document.getElementById("ext-table1").tHead;
		var row = header.insertRow(0);   
		for (i=0;i<item.columns.length;i++) {
			th = document.createElement('th');
			th.innerHTML = item.columns[i].text;
			row.appendChild(th);
		}
		var body = table.createTBody();
		//var body = document.getElementById("ext-table1").tBodies[0];
		for (var i=0;i<item.data.length;i++) {
			var row = body.insertRow(i);
			var o = {};
			for(var prop in item.data[i]) {
				o[prop] = item.data[i][prop]
				td = document.createElement('td');
				td.innerHTML = item.data[i][prop];
				row.appendChild(td);
			}
			var record=[];
			record[0] = {};
			record[0].data = o;
			row.onclick = function() {return item.listeners.select(row,record)};  
		};
		grid.appendChild(title);
		grid.appendChild(table);
		createditem = grid;
		break;
	default:
		break;
	}
	return createditem;
};


document.addEventListener("DOMContentLoaded", function(event) {

	var viewport = document.createElement("DIV");
	viewport.setAttribute("id", "ext-viewport");
	viewport.setAttribute("class", "x-viewport");
	document.body.appendChild(viewport);
	Ext.Viewport = viewport;
	Ext.Viewport.add = function(item) {
		Ext.Viewport.appendChild(Ext.create(item));
	};
	Ext.application.launch()
	//launch();
});

function addRowHandlers(table) {
	var table = document.getElementById(table);
	var rows = table.getElementsByTagName("tr");
	for (i = 1; i < rows.length; i++) {
		var row = table.rows[i];
		row.onclick = function(myrow){
			return function() { 
				var cell = myrow.getElementsByTagName("td")[0];
				var id = cell.innerHTML;
				alert("id:" + id);
			};
		}(row);
	}
}