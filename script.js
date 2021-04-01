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
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll < 150 ){
        const home=document.querySelector(".header-nav-ul");
        home.classList.remove("move-m");
    }else if(scroll>=150){
        const home=document.querySelector(".header-nav-ul");
        home.classList.add("move-m");
    }

    const link=document.querySelector(".nav-li-a-active");
    let aux;
    let cam=0;
    if(scroll<=200){
        aux=document.querySelector("#a1");cam=1;
    }else if(scroll<=790){
        aux=document.querySelector("#a2");cam=1;
    }else if(scroll<=1509){
        aux=document.querySelector("#a3");cam=1;
    }else if(scroll<=2194){
        aux=document.querySelector("#a4");cam=1;
    }else if(scroll<=3172){
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