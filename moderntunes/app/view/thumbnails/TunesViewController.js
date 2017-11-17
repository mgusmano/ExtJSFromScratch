Ext.define('MTunes.view.thumbnails.TunesViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tunesview',
    requires: [
        Ext.Dialog,
        Ext.Video
    ],

    onSelect: function(view, record) {
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