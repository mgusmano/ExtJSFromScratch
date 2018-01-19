function onSelect(sender, record) {
	var r = record[0].data;
	var text = r.name+' - '+r.email+' - '+r.phone;
	Ext.Msg.alert('Row Clicked', text);
};

var data = [
	{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
	{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
	{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
	{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
]

Ext.application({
	launch: function () {
		console.log('step 9 - when all files are loaded, call the the launch event in app.js')
		Ext.Viewport.add({
			xtype: 'grid',
			title: 'Users',
			columns: [
				{text: 'Name', width: 100, dataIndex: 'name'},
				{text: 'Email Address', flex: 1, dataIndex: 'email'},
				{text: 'Phone Number', width: 200, dataIndex: 'phone'}
			],
			data: data,
			listeners: {
				select: onSelect
    	},
		});
	}
});

