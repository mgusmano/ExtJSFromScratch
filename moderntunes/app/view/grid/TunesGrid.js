Ext.define('MTunes.view.grid.TunesGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'tunesgrid',
    requires: [
        // 'MTunes.view.grid.TunesGridController',
        // 'MTunes.view.grid.TunesGridModel',

        'Ext.grid.column.Column',
        'Ext.grid.column.Template',

        //'Ext.grid.column.Widget',
        //'Ext.ux.rating.Picker'
    ],

    controller: 'tunesgrid',
    viewModel: {
        type: 'tunesgrid'
    },
    columns: [{
            text: 'Artist',
            dataIndex: 'sortArtist',
            width: 120
        }, {
            xtype: 'templatecolumn',
            text: 'Title',
            dataIndex: 'title'
        }, {
            text: 'Rating',
            dataIndex: 'release_date',
            width: 60,
            align: 'right'
        }, {
            xtype: 'templatecolumn',
            text: 'Thumbnail',
            dataIndex: 'image',
            //tpl: '',
            flex: 1
        }]
        //html: '<span style="font-size:24px;font-style:italic;color:red">Tunes Grid</span>'
});