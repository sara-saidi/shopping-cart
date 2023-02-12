
// Toogle Part
var btn1 = document.getElementById('bt1');
var btn2 = document.getElementById('bt2');


function toogle1(){
if(btn1.style.color=='red'){
    btn1.style.color='grey'
}
else btn1.style.color='red'
}


function toogle2(){
    if(btn2.style.color=='red'){
        btn2.style.color='grey'
    }
    else btn2.style.color='red'
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