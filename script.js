
window.addEventListener("click",(e)=>{
   if(e.target.matches(".main-services-ab-button")){
       const active=document.querySelector(".button-active");
       active.classList.remove("button-active");
       e.target.classList.add("button-active");
   }
});

/*
the world is incredible, especially nature, 
we seek to create structures that are simple,
functional and save materials in order to have
a more sustainable future.
*/
window.onscroll = function (){
    let valor;
    if(window.screen.width>880){
      //valor=[150,200,790,1509,2194,3712];
      valor=[150,700,1296,2515,3217,4594];
    }else{
      //valor=[150,200,896,1715,2717,3794];
    }
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll);
    if(scroll < valor[0] ){
        const home=document.querySelector(".header-nav-ul");
        home.classList.remove("move-m");
    }else if(scroll>=valor[0]){
        const home=document.querySelector(".header-nav-ul");
        home.classList.add("move-m");
    }

    const link=document.querySelector(".nav-li-a-active");
    let aux;
    let cam=0;
    if(scroll<=valor[1]){
        aux=document.querySelector("#a1");cam=1;
    }else if(scroll<=valor[2]){
        aux=document.querySelector("#a2");cam=1;
    }else if(scroll<=valor[3]){
        aux=document.querySelector("#a3");cam=1;
    }else if(scroll<=valor[4]){
        aux=document.querySelector("#a4");cam=1;
    }else if(scroll<=valor[5]){
        aux=document.querySelector("#a5");cam=1;
    }
    if(cam!=0){
        if(aux.id!=link.id){
            aux.classList.add("nav-li-a-active");
            link.classList.remove("nav-li-a-active");
        }
    }

}  
/*

*/