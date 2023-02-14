
// Toogle Part
var btn1 = document.getElementById('bt1');
var btn2 = document.getElementById('bt2');
var btn3 = document.getElementById('bt3');
var btn4 = document.getElementById('bt4');
var btn5 = document.getElementById('bt5');
var btn6 = document.getElementById('bt6');


function toogle1(){
if(btn1.style.color=='rgb(203, 17, 147)'){
    btn1.style.color='grey'
}
else btn1.style.color='rgb(203, 17, 147)'
}

function toogle2(){
    if(btn2.style.color=='rgb(203, 17, 147)'){
        btn2.style.color='grey'
    }
    else btn2.style.color='rgb(203, 17, 147)'
    }

    
function toogle3(){
    if(btn3.style.color=='redrgb(203, 17, 147)'){
        btn3.style.color='grey'
    }
    else btn3.style.color='rgb(203, 17, 147)'
    }


    
function toogle4(){
    if(btn4.style.color=='rgb(203, 17, 147)'){
        btn4.style.color='grey'
    }
    else btn4.style.color='rgb(203, 17, 147)'
    }

    
function toogle5(){
    if(btn5.style.color=='rgb(203, 17, 147)'){
        btn5.style.color='grey'
    }
    else btn5.style.color='rgb(203, 17, 147)'
    }

    
function toogle6(){
    if(btn6.style.color=='rgb(203, 17, 147)'){
        btn6.style.color='grey'
    }
    else btn6.style.color='rgb(203, 17, 147)'
    }

    // Total part


function add1(){
    var x = document.querySelector('.price1');
    var y = parseInt(x.innerText)
   console.log(y)
    var T = document.getElementById('tot');
    
    a=parseInt(T.innerText);
    console.log(a)
    T.innerText=y+a
}


function sous1(){
    var x = document.querySelector('.price1');
    var y = parseInt(x.innerText)
   console.log(y)
    var T = document.getElementById('tot');
    
    a=parseInt(T.innerText);
    console.log(a)
    T.innerText=a-y
    

}


function add2(){
    var e = document.querySelector('.price2');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=z+f
   

}
function sous2(){
    var e = document.querySelector('.price2');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=f-z
   

}


function add3(){
    var e = document.querySelector('.price3');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=z+f
   

}
function sous3(){
    var e = document.querySelector('.price3');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=f-z
   

}

function add4(){
    var e = document.querySelector('.price4');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=z+f
   

}
function sous4(){
    var e = document.querySelector('.price4');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=f-z
   

}

function add5(){
    var e = document.querySelector('.price5');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=z+f
   

}
function sous5(){
    var e = document.querySelector('.price5');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=f-z
   

}

function add6(){
    var e = document.querySelector('.price6');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=z+f
   

}
function sous6(){
    var e = document.querySelector('.price6');
    var z = parseInt(e.innerText)
   console.log(z)
    var TT = document.getElementById('tot');
    
    f=parseInt(TT.innerText);
    console.log(f)
    TT.innerText=f-z
   

}