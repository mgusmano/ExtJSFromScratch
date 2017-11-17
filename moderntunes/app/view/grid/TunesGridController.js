Ext.define('MTunes.view.grid.TunesGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tunesgrid',
    requires: [
        Ext.Dialog,
        Ext.Video
    ],

    onSelect: function(grid, record) {
        Ext.create({
            xtype: 'dialog',
            title: 'My Dialog',

            //layout: 'fit',
            // items: [{
            //     xtype: 'video',
            //     url: record.data.preview,
            //     posterUrl: record.data.image
            // }],
            buttons: {
                ok: function() { // standard button (see below)
                    dialog.destroy();
                }
            },
            autoShow: true
        });
    }

});