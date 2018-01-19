console.log('step 1 - define the global Ext Variable')
var Ext = Ext || {};
Ext.manifest = 'bootstrap.json'; 
console.log('step 2 - call the run function')
run();

function run() {
    var xhr = new XMLHttpRequest();  
    xhr.open('GET', Ext.manifest);
    console.log('step 2 - read the manifest file (bootstrap.json)')
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr && xhr.readyState == 4) {
					console.log('step 3 - data from the manifest file is now available')
            var contentJSON = JSON.parse(xhr.responseText);
            xhr = null;
            console.log('step 4 - produce DOM elements .js and .css files')
            var js = processAssets(contentJSON.js, 'js'); 
            var css = processAssets(contentJSON.css, 'css');
            var head = document.getElementsByTagName('head')[0];
            var j;
            console.log('step 5 - add .css DOM elements to head tag')
            for (j = 0; j < css.length; j++) {
                head.appendChild(css[j].el);
            }
            console.log('step 6 - add first .js DOM element to head tag (Ext framework file)')
            head.appendChild(js[0].el);
            var t = setInterval(function(){
							console.log('step 7 - wait for framework .js file to completely load') 
                if (Ext.Boot != undefined) {
                    clearInterval(t);
                    var i;
                    console.log('step 8 - add remaining .js DOM elements to head tag')
                    for (i = 1; i < js.length; i++) {
                        head.appendChild(js[i].el);
                    }
                }
            }, 1000);
        }
    };    
}

// 'processAssets' is defined here and it is clled from the run function
function processAssets(assets, type) {
    var results = [];
    var ln = assets.length;
    var i;
    var assetConfig;
    for (i = 0; i < ln; i++) {
        assetConfig = assets[i];
        var el;
        if (type === 'js') {
            el = document.createElement('script');
            el.type = 'text/javascript';
            el['src'] = assetConfig.path;
        }
        if (type === 'css') {
            el = document.createElement('link');
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el['href'] = assetConfig.path;
        }
        results.push({ path: assetConfig.path, el: el });
    }
    return results;
}
