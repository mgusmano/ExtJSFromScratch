Ext.define('ModernDesktop.view.users.UsersViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.usersviewmodel',
	data: {
		name: 'ModernDesktop'
	},
	stores: {
		users: {
			type: 'users'
		}
	}
});
