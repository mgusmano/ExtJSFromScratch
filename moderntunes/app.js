/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
	name: 'MTunes',

	requires: [
			'MTunes.*'
	],

	mainView: 'MTunes.view.main.Main'
});
