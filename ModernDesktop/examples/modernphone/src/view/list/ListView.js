Ext.define('ModernDesktop.view.list.ListView',{
	extend: 'Ext.dataview.List',
	xtype: 'listview',
	cls: 'listview',
	controller: 'listviewcontroller',
	viewModel: {type: 'listviewmodel'},
	store: {type: 'personnel'},
	emptyText: 'No activity was found',
	striped: true,
	itemTpl: new Ext.XTemplate(`
{name}<br/>
{email}<br/>
{phone}
	`,
	{
		removeSpaces:function(val){
			return val.replace(" ", "")
		}
	})
});
