var goall=function(rosterdata) {
    for (i = 0;i < rosterdata.roster.length;i++) {        
        go(rosterdata.roster[i]);        
    }
}

var go=function(obj) {
    var toon=obj.member;
    
    var note = '';
    if (obj.note)
        note = obj.note;        
    var s="RDPS";
    if(obj.spec){
      s=obj.spec;
    }
    if(obj.os){
      s=s+'/'+obj.os;
    }
    document.write(
          '<div id='+toon+' class="post">'
        + '<div id="Loading'+toon+'">'
        +'<h2>'+toon+'<h2>'
        +'<img src="placeholder.png" alt=img>'
        +'</div>'
        +s    
        +'<br/><a href="http://eu.battle.net/wow/en/character/Ghostlands/'+toon+'/advanced">'
        +'<img src="blizz.png" alt="battle.net" title="Official profile of '+toon+' in the wow armoray at Battle.net" width="28px" height="13px"/></a>&nbsp;'
        +'<a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/>'
        +'<img src="wowheroes.png" alt="WoW-Heroes" title="Profile of '+toon+' at WoW-Heroes" width="24px" height="13px"/></a>&nbsp;'
        +'<a href=http://www.askmrrobot.com/wow/gear/eu/ghostlands/'+toon+'><img src="teamrobot.png" alt="Ask Mr. Robot" title="Ask Mr. Robot about '+toon+'" width="16px" height="13px"/></a>' 
        +(note!=''?'<br/>'+note:'')
        +'</div>'
    );
    var scr = document.createElement('script');
    scr.src = "http://eu.battle.net/api/wow/character/ghostlands/"+toon+"?fields=titles&jsonp=bnetreturn";
    scr.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(scr);
};

var bnetreturn=function(o) {
        
    var toon=o.name;
    var s=toon;
    for(i=0;i<o.titles.length;i++){
        if(o.titles[i].selected){
            s=sprintf( o.titles[i].name,toon);
        }      
    } 
    document.getElementById('Loading'+toon).innerHTML = '<h2>'+s+'</h2><a href="http://eu.battle.net/wow/en/character/Ghostlands/'+toon+'/advanced"><img src="http://eu.battle.net/static-render/eu/'+o.thumbnail+'" alt=img></a>';
        
    
};


