const mensaje=[
    "we are an expert group in architectural design and interior design with a residential approach,where we generate creative,authentic and innovative soluction.achieving results that exceed the expectations of each client",
    "the world is incredible, especially nature, we seek to create structures that are simple,functional and save materials in order to have a more sustainable future.",
    "Price has no cost when the final product can exceed the consumer's expectations. A brand is transcended by the work and time invested in making a quality product added to the value of the legs."  
];
const ruta=[
    "person_5.jpg",
    "person_3.jpg",
    "person_4.jpg",
    "person_2.jpg",
    "person_1.jpg",
];
const personas=[
    "Haley Lennon",
    "Georgia Gates",
    "Jeff Freshman",
    "Marian Donldson",
    "John LLanes"
];
window.addEventListener("click",(e)=>{
    //console.log(e.target);
   if(e.target.matches(".main-services-ab-button")){
       const active=document.querySelector(".button-active");
       const text=document.querySelector(".main-services-ab-p");
       active.classList.remove("button-active");
       e.target.classList.add("button-active");
        switch(e.target.innerHTML){
            case "Our Mission":
                text.innerHTML=mensaje[0];
            break;
            case "Our Vision":
                text.innerHTML=mensaje[1];
            break;
            case "Our Value":
                text.innerHTML=mensaje[2];
            break;
        }
   }
   if(e.target.matches(".radio-img")){
       let ru;
       let na;
       switch(e.target.value){
           case "primero":
                ru=ruta[0];na=personas[0];
            break;
           case "segundo":
                ru=ruta[1];na=personas[1];
            break;
           case "tercero":
                ru=ruta[2];na=personas[2];
            break;
           case "cuarto":
                ru=ruta[3];na=personas[3];
            break;
           case "quinto":
                ru=ruta[4];na=personas[4];
            break;
       }
       const per=document.querySelector(".img-container-p");
       per.style.backgroundRepeat="no-repeat";
       per.style.background=`url(Assets/img/${ru})`;
       per.style.backgroundSize="cover";
       const name=document.querySelector(".v-img-name");
       name.innerHTML=na;
   }

});

window.onscroll = function (){
    let valor;
    if(window.screen.width>880){
        valor=[150,200,790,1509,2194,3712];
    }else{
        valor=[150,700,1296,2515,3217,4594];
    }
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(scroll);
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