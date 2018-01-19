Ext.define('ModernDesktop.model.UsersModel', {
	extend: 'ModernDesktop.model.Base',
	fields: [
		'username', 
		'_id', 
		{
			name: 'creator',
			mapping: '_meta.creator'
		},
		{
			name: 'created',
			mapping: '_meta.created'
		},
		'description'
	]
});
