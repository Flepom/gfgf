var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var mf_defaults = {
    feedsUri: [{
        name: "تطوير مواقع",
        url: "http://qaisi1web.blogspot.com",
        tag: "تطوير مواقع"
    }, {
        name: "قوالب بلوجر",
        url: "http://qaisi1web.blogspot.com",
        tag: "قوالب بلوجر"
    }, {
        name: "اضافات بلوجر",
        url: "http://qaisi1web.blogspot.com/",
        tag: "اضافات بلوجر"
    }],
    numPost: 4,
    showThumbnail: true,
    showSummary: true,
    summaryLength: 80,
    titleLength: "auto",
    thumbSize: 72,
    newTabLink: false,
    containerId: "feed-list-container",
    listClass: "list-entries",
    readMore: {
        text: "More",
        endParam: "?max-results=20"
    },
    autoHeight: false,
    current: 0,
    onLoadFeed: function(a) {},
    onLoadComplete: function() {},
    loadFeed: function(c) {
        var d = document.getElementsByTagName("head")[0],
            a = document.getElementById(this.containerId),
            b = document.createElement("script");
        b.type = "text/javascript";
        b.src = this.feedsUri[c].url + "/feeds/posts/summary" + (this.feedsUri[c].tag ? "/-/" + this.feedsUri[c].tag : "") + "?alt=json-in-script&max-results=" + this.numPost + "&callback=listEntries";
        d.appendChild(b)
    }
};
for (var i in mf_defaults) {
    mf_defaults[i] = (typeof(multiFeed[i]) !== undefined && typeof(multiFeed[i]) !== "undefined") ? multiFeed[i] : mf_defaults[i]
}

function listEntries(q) {
    var p = q.feed.entry,
        c = mf_defaults,
        h = document.getElementById(c.containerId),
        a = document.createElement("div"),
        d = "<ul>",
        l = c.feedsUri.length,
        n, k, m, g;
    for (var f = 0; f < c.numPost; f++) {
        if (f == p.length) {
            break
        }
        n = (c.titleLength !== "auto") ? p[f].title.$t.substring(0, c.titleLength) + (c.titleLength < p[f].title.$t.length ? "&hellip;" : "") : p[f].title.$t;
        m = ("summary" in p[f]) ? p[f].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
        m = (c.summaryLength < m.length) ? m.substring(0, c.summaryLength) + "&hellip;" : m;
        g = ("media$thumbnail" in p[f]) ? '<img src="' + p[f].media$thumbnail.url.replace(/\/s72(\-c)?\//, "/s" + c.thumbSize + "-c/") + '" style="width:' + c.thumbSize + "px;height:" + c.thumbSize + 'px;" width="72" height="72">' : '<span class="fake-img" style="width:' + c.thumbSize + "px;height:" + c.thumbSize + 'px;"></span>';
        for (var e = 0, b = p[f].link.length; e < b; e++) {
            k = (p[f].link[e].rel == "alternate") ? p[f].link[e].href : "#"
        }
        d += '<li><div width="72" height="72" class="inner"' + (!c.autoHeight ? ' style="height:' + c.thumbSize + 'px;overflow:hidden;"' : "") + ">";
        d += (c.showThumbnail) ? g : "";
        d += '<div class="title"><a href="' + k + '"' + (c.newTabLink ? ' target="_blank"' : "") + ">" + n + "</a></div>";
        d += '<div class="summary">';
        d += "<span" + (!c.showSummary ? ' style="display:none;"' : "") + ">";
        d += (c.showSummary) ? m : "";
        d += "</span></div>";
        d += '<span style="display:block;clear:both;"></span></div></li>'
    }
    d += "</ul>";
    d += '<div class="more-link"><a href="' + c.feedsUri[c.current].url.replace(/\/$/, "") + "/search/label/" + c.feedsUri[c.current].tag + c.readMore.endParam + '"' + (c.newTabLink ? ' target="_blank"' : "") + ">" + c.readMore.text + "</a></div>";
    a.className = c.listClass;
    a.innerHTML = '<div class="main-title"><h4>' + c.feedsUri[c.current].name + "</h4></div>" + d;
    h.appendChild(a);
    c.onLoadFeed(c.current);
    if ((c.current + 1) < l) {
        c.loadFeed(c.current + 1)
    }
    if ((c.current + 1) == l) {
        c.onLoadComplete()
    }
    c.current++
}
mf_defaults.loadFeed(0);

}
/*
     FILE ARCHIVED ON 07:17:11 Feb 02, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:07:51 Jul 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 121.154
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.086
  RedisCDXSource: 4.397
  esindex: 0.008
  LoadShardBlock: 92.518 (3)
  PetaboxLoader3.datanode: 66.572 (4)
  CDXLines.iter: 21.763 (3)
  load_resource: 49.526
  PetaboxLoader3.resolve: 37.396
*/
