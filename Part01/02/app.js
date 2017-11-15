function launch() {
	console.log('page is loaded');
	addRowHandlers("ext-table1", onSelect);
};

function onSelect(sender, record) {
	var r = record[0].data;
	var text = r.c0+' - '+r.c1+' - '+r.c2;
	alert(text);
};