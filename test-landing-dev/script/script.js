var span_icon = document.querySelectorAll('.nav__icon');
var el_top_icon = document.querySelector('.nav__container-icon');

var el_nav = document.querySelector("nav");
    
//the functions change color top-icon.
el_top_icon.onmouseover = function(){

   for(var i=0; i<span_icon.length; i++)
    span_icon[i].style.background="#626262";

}     

el_top_icon.onmouseout = function(){

  for(var i=0; i<span_icon.length; i++)
  span_icon[i].style.background="#3C3C3C";

}

  //animation menu
var anim_interval = 25;
var anim_speed = 30;
var menu_height = 0;
var menu_timer; 

var el_nav_item = document.querySelectorAll('.nav__item');
var el_nav_link = document.querySelectorAll('.nav__link');

el_top_icon.onclick = function(){  
    this.classList.toggle("change-nav-icon");
    menu_timer = clearInterval(menu_timer);   
   
   if(el_nav.classList.contains("nav-toggle") == false && menu_height == 0){

     el_nav.classList.add("nav-toggle");
     
     for(var i=0; i<el_nav_item.length; i++)
         el_nav_item[i].classList.add("nav-toggle_item");

      for(var i=0; i<el_nav_item.length; i++)
         el_nav_link[i].classList.add("nav-toggle_link");

     menu_timer = setInterval(menuSlideDown, anim_interval);

   }else{

     menu_height = 150;     
     menu_timer = setInterval(menuSlideTop, anim_interval);     
   }   
 
}

function menuSlideDown(){       
   
   if( menu_height > 150){  

     clearInterval(menu_timer);
     menu_height = 0;

   }else{

      menu_height +=anim_speed;
      el_nav.style.height = menu_height + "px";
   }   
}

function menuSlideTop(){ 
   if(menu_height > 0){           
       
       menu_height -= anim_speed;
       el_nav.style.height = menu_height + "px";

   }else{     

      clearInterval(menu_timer);
      menu_height = 0;
      el_nav.classList.remove("nav-toggle");

      for(var i=0; i<el_nav_item.length; i++)
         el_nav_item[i].classList.remove("nav-toggle_item");

      for(var i=0; i<el_nav_item.length; i++)
         el_nav_link[i].classList.remove("nav-toggle_link");
   }

}

var clientWidth;
window.onresize = function(){

    clientWidth = document.body.clientWidth;    
    
    if(el_nav.classList.contains('nav-toggle') == true && clientWidth > 768){
       
       el_top_icon.classList.remove("change-nav-icon");
       el_nav.classList.remove('nav-toggle');
      
       for(var i=0; i<el_nav_item.length; i++)
         el_nav_item[i].classList.remove("nav-toggle_item");

       for(var i=0; i<el_nav_item.length; i++)
         el_nav_link[i].classList.remove("nav-toggle_link");      

      el_nav.style.height = 0;                  
    }

  }

//accordion title change color
var el_accor_li = document.querySelectorAll(".accordion li");
  
for(var i=0; i<el_accor_li.length; i++){
  el_accor_li[i].addEventListener('click', changeColor);
}

 function changeColor(){
    this.children[2].classList.toggle('accordion__title_active');
  }


//slowing scroll

 $(window).on("load", function() {   

    $('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function(){
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length){          
          $("html, body").animate({            
            scrollTop: target.offset().top - 10
          }, 1000);
          return false;
        }
      }
    });
 });