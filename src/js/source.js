"use strict";

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

function truthy(val) {
    return "undefined" !== typeof val &&
        !! val &&
        val !== "0" &&
        val !== "false" &&
        val !== "no";
}

function CfUxWizz(config) {

    this.config = {
        id: 1,
        url: false,
        ssl: false
    };

    if(config) {
        for(var key in config) {
            if(config.hasOwnProperty(key)) {
                this.config[key] = config[key];
            }
        }
    }

    this.load();

}

CfUxWizz.prototype.load = function() {

    var url = this.getUrl();
    if(url !== false) {

        try {

            var UST_CT = [];
            var UST = UST || { s: Date.now(), addTag: function(tag) { UST_CT.push(tag) }};
            UST.addEvent = UST.addTag;
            var datenow = Date.now();

            var g = document.createElement("script");
            var s = document.getElementsByTagName("script")[0];

            g.type = "text/javascript";
            g.async = true;
            g.defer = true;
            g.src = url + "server/ust-rr.min.js?v=4.4.0";
            s.parentNode.insertBefore(g,s);

            window.UST_CT = UST_CT;
            window.UST = UST;

        } catch(e) { }

    }

};

CfUxWizz.prototype.getUrl = function() {

    if (!this.config.url) {
        return false;
    }

    var url = this.config.url.toString();
    var hasProtocol = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");

    if (!hasProtocol) {
        url = "//" + url;
    }

    if (!url.endsWith("/")) {
        url += "/";
    }

    return url;

};
