{
    var ssp = document.createElement('script');
    ssp.src = "sprintf.js";
    ssp.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild( ssp);
};

var go=function(toon) {
    document.write('<div id='+toon+'><h2>'+toon+'</h2>Loading</div>');
    var s = document.createElement('script');
    s.src = "http://eu.battle.net/api/wow/character/ghostlands/"+toon+"?fields=titles,talents&jsonp=bnetreturn";
    s.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(s);
};
var bnetreturn=function(o) {
        
    var toon=o.name;
    var s=toon;
    for(i=0;i<o.titles.length;i++){
        if(o.titles[i].selected){
            s=sprintf( o.titles[i].name,toon);
        }      
    }
    var specs="";
    if (o.talents.length == 2 && o.talents[0].spec.role != o.talents[1].spec.role)      {
        specs = o.talents[0].spec.role +  "/" + o.talents[1].spec.role;
    }
    else  {
        specs = o.talents[0].spec.role;
    }
    
    
    
    document.getElementById(toon).innerHTML = "<h2>"+s+"</h2>"
    document.getElementById(toon).innerHTML += '<a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/><img src=http://eu.battle.net/static-render/eu/'+o.thumbnail+' alt=img></a>';
    document.getElementById(toon).innerHTML += ' <br/>'+ specs +'<br/>';
    document.getElementById(toon).innerHTML += '<a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/>WoW Heroes</a><br/>';
    document.getElementById(toon).innerHTML += ' <a href=http://www.askmrrobot.com/wow/gear/eu/ghostlands/'+toon+'>AskMr. Robot</a>';
};

/*
var realmstatus=function() {
    document.write('<div id="header">Loading realm status</div>');
    var s = document.createElement('script');
    s.src = "http://eu.battle.net//api/wow/realm/status&realms=Ghostlands&jsonp=bnetreturn2";
    s.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(s);
};
var bnetreturn2=function(o) {        
    for(i=0;i<o.realms.length;i++){        
        document.getElementById('header').innerHTML = "<h2>"+(o.realms[i].status?"Ghostlands is up":"Ghostlands is down")+"</h2>";
    }
};*/
