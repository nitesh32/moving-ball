var b=document.getElementById('ball');
var t=10,l=50;
document.addEventListener('keypress', (event) => {
    var name = event.key;
    
    if(name=="w"){
        t+=50;
        console.log(name+" "+t);
        b.style.top=t+'px';
    }
    else if(name=="a"){
        t-=50;
        console.log(name+" "+t);
        b.style.top=t+'px';
    }
    else if(name=="s"){
        l+=50;
        console.log(name+" "+l);
        b.style.left=l+'px';
    }
    else if(name=="d"){
        l-=50;
        console.log(name+" "+l);
        b.style.left=l+'px';
    }
    
  }, false);