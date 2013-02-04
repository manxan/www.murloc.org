var realmstatus=function() {
    document.write('<div id="realmstatus" class="post">Loading realm status</div>');
    var s = document.createElement('script');
    s.src = "http://eu.battle.net//api/wow/realm/status&realms=Ghostlands&jsonp=bnetreturn2";
    s.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(s);
};
var bnetreturn2=function(o) {        
    for(i=0;i<o.realms.length;i++){        
        document.getElementById('realmstatus').innerHTML = "<h2>"+(o.realms[i].status?"Ghostlands is up":"Ghostlands is down")+"</h2>";
    }
};
