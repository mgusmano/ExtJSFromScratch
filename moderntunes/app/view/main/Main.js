Ext.define('MTunes.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        // 'MTunes.view.main.MainController',
        // 'MTunes.view.main.MainModel',

        // 'MTunes.view.grid.TunesGrid',

        // 'MTunes.view.thumbnails.TunesView',

        //'Ext.layout.Fit'
    ],
    tabBarPosition: 'bottom',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    items: [{
        title: 'View',
        xtype: 'tunesview',
        bind: {
            store: '{tunes}'
        },
        listeners: {
            select: 'onSelect'
        }
    }, {
        title: 'Grid',
        xtype: 'tunesgrid',
        bind: {
            store: '{tunes}'
        },
        listeners: {
            select: 'onSelect'
        }
    }]
});