var goall=function(rosterdata) {
    for (i = 0;i < rosterdata.roster.length;i++) {        
        go(rosterdata.roster[i]);        
    }
}

var go=function(obj) {
    var toon=obj.member;
    
    var specarr =  [ "MDPS", "RDPS", "Healer", "Tank" ];
    
    var note = '';
    if (typeof obj.note != 'undefined')
        note = obj.note;
    
    var s=specarr[1];

    if(obj.spec){
      s=specarr[obj.spec];
    };
    if(obj.os){
      s=s+'/'+specarr[obj.os];
    };
    document.write(
          '<div id='+toon+' class="post">'
        + '<div id="Loading'+toon+'">'
        +'<h2>'+toon+'<h2>'
        +'<img src="placeholder.png" alt=img>'
        +'</div>'
        +s    
        +'<br/><a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/>'
        +'<img src="wowheroes.png" alt="WoW-Heroes" title="WoW-Heroes" width="32px" height="32px"/></a>&nbsp;'
        +'<a href=http://www.askmrrobot.com/wow/gear/eu/ghostlands/'+toon+'><img src="teamrobot.png" alt="Ask Mr. Robot" title="Ask Mr. Robot" width="32px" height="32px"/></a>' 
        +(note!=''?'<br/>'+note:'')
        +'</div>'
    );
    var s = document.createElement('script');
    s.src = "http://eu.battle.net/api/wow/character/ghostlands/"+toon+"?fields=titles&jsonp=bnetreturn";
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
    document.getElementById('Loading'+toon).innerHTML = '<h2>'+s+'</h2><a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/><img src=http://eu.battle.net/static-render/eu/'+o.thumbnail+' alt=img></a>';
        
    
};


