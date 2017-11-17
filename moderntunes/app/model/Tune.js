Ext.define('Tunes.model.Tune', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.JsonP'],
    fields: [{
        name: 'release_date',
        mapping: 'id.attributes["im:releaseDate"]'
    }, {
        name: 'id',
        mapping: 'id.attributes["im:id"]'
    }, {
        name: 'title',
        mapping: '["im:name"].label'
    }, {
        name: 'image',
        mapping: '["im:image"][2].label'
    }, {
        name: 'artist',
        mapping: '["im:artist"].label'
    }, {
        name: 'itunesstore',
        mapping: 'link[0].attributes.href'
    }, {
        name: 'preview',
        mapping: 'link[1].attributes.href'
    }, {
        name: 'sortArtist',
        calculate: function(data) {
            if (!data.artist) return; // Temporary, to address bug in initial release of 6.5.0
            var result = data.artist.toLowerCase().trim();
            if (result.startsWith('the ')) {
                return result.substr(4);
            } else {
                return result;
            }
        }
    }],
    proxy: {
        type: 'jsonp',
        url: 'https://itunes.apple.com/us/rss/topmusicvideos/limit=50/json',
        reader: {
            type: 'json',
            rootProperty: 'feed.entry'
        }
    }
});