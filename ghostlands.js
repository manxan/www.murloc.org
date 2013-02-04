{
    var murlocs = { "roster" : [ 
        { "member":  "Manxan", "note":"Raid Leader" },
        { "member":  "Yokhanan", "note":"Raid Leader Assistant-Officer" }, 
        { "member":  "Filonia", "note": "Raid Leader Assistant"}, 
        { "member":  "Oria", "note":"Officer" }, 
        { "member":  "Máxxpain" },  
        { "member": "Dazwarr" }, 
        { "member": "Drizztdourde" }, 
        { "member": "Shootudead" }, 
        { "member": "Trialpexan" }, 
        { "member": "Kermitzz" }, 
        { "member": "Madjai" }  ,  
        { "member": "Hemoglobine" }, 
        { "member": "Clímax" }    
    ]
    };
    
    var ratty = { "roster" : [ 
        { "member":  "Ratburger", "note":"Raid Leader-Officer" },
        { "member":  "Goldiie", "note":"Raid Leader Assistant-Officer" }, 
        { "member":  "Mikomir", "note": "Raid Leader Assistant-Officer"}, 
        { "member":  "Iks", "note":"Officer" }, 
        { "member":  "Allybêatêr" },  
        { "member": "Scelerat", "note":"Officer" }, 
        { "member": "Snarky", "note":"Officer" }, 
        { "member": "Swegurra" }, 
        { "member": "Craine" }, 
        { "member": "Biggred" }, 
        { "member": "Mysere" }  ,  
        { "member": "Spriztdourde", "note":"Officer" }, 
        { "member": "Émíly" }    
    ]
    };
    
   
    var ssp = document.createElement('script');
    ssp.src = "sprintf.js";
    ssp.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild( ssp);
};


var goall=function(rosterdata) {
    for (i = 0;i < rosterdata.roster.length;i++) {        
        go(rosterdata.roster[i].member);        
    }
}


var go=function(toon) {
    document.write('<div id='+toon+' class="post"><h2>'+toon+'</h2>Loading</div>');
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


