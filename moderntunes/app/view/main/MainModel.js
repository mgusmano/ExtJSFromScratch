Ext.define('MTunes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'Tunes.model.Tune'
    ],
    stores: {
        tunes: {
            model: 'Tunes.model.Tune',
            sorters: ['sortArtist', 'title'],
            autoLoad: true
        }
    }
});