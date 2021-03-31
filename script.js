window.addEventListener("click",(e)=>{
  if(e.target.matches(".nav-li-a")){
     const link=document.querySelector(".nav-li-a-active");
     link.classList.remove("nav-li-a-active");
     e.target.classList.add("nav-li-a-active");
  }
});

window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    console.log(scroll);
    if(scroll > 150 ){
        const home=document.querySelector(".header-nav-ul");
        home.classList.add("move-m");
    }else{
        const home=document.querySelector(".header-nav-ul");
        home.classList.remove("move-m");
    }
}
/*

*/