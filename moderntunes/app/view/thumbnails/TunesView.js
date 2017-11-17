Ext.define('MTunes.view.thumbnails.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',

    requires: [
        // 'MTunes.view.thumbnails.TunesViewController',
        // 'MTunes.view.thumbnails.TunesViewModel'
    ],

    controller: 'tunesview',
    viewModel: {
        type: 'tunesview'
    },
    scrollable: true,
    itemTpl: [
        '<figure>',
        '<img src="{image}">',
        '<figcaption><b>{title}</b><br>{artist}</figcaption><br>',
        '</figure>'
    ],
    itemCls: 'video',
    overItemCls: 'overvideo',
    selectedItemCls: 'selected'
        //html: '<span style="font-size:24px;font-style:italic;color:green">Tunes Thumbnails</span>'
});