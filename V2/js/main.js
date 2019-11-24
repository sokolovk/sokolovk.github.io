  window.onload = () => {

  var color_pr_light = '#f9f9f9';
  var color_light = '#fff'

  var span_icon = document.querySelectorAll('.nav-icon__item');
  var el_top_icon = document.querySelector('.nav-icon');
  var el_nav = document.querySelector('.nav');
  var el_nav_item = document.querySelectorAll('.nav__item');  

//navigation.
  el_top_icon.onmouseover = () => {
    for(let i=0; i<span_icon.length; i++){
      span_icon[i].style.background=color_light;
   }
 }     

 el_top_icon.onmouseout = () => {
    for(let i=0; i<span_icon.length; i++){
      span_icon[i].style.background=color_pr_light;
    }
 }

var stop_timer;

var timer = () => {
    stop_timer = setTimeout(fadeNavItem, 175);            
  }  

 var fadeNavItem = () => {

       for(let i=0; i<el_nav_item.length; i++){
          if(el_nav_item[i].classList.contains('nav__item--active') != true){
            el_nav_item[i].classList.add('nav__item--active');
            timer();
            break;                                             
          }
      }      
  } 

  var removeNav = () => {
     clearTimeout(stop_timer);
     el_nav.classList.remove("nav--active");
     el_top_icon.classList.remove("nav-icon--active");       
       for(let i=0; i<el_nav_item.length; i++){
          el_nav_item[i].classList.remove('nav__item--active');
       }    
  }    

  el_top_icon.onclick = () => {       
    el_top_icon.classList.toggle("nav-icon--active");    
    el_nav.classList.toggle("nav--active"); 
      if(el_nav_item[0].classList.contains('nav__item--active') == false){        
        timer();
      }else{
        for(let i=0; i<el_nav_item.length; i++){
          el_nav_item[i].classList.remove('nav__item--active');           
        }
     }       
  }

  el_nav.onclick = () =>{
     if(el_nav.classList.contains("nav--active") == true){
       removeNav();     
     }
  }

  var clientWidth;
  window.onresize = () => {	
    clientWidth = document.body.clientWidth;    
    if(el_nav.classList.contains('nav--active') == true && clientWidth > 768){    	
       removeNav();
     }     
   }

  window.onscroll = () => {
    let scroll_width = window.pageYOffset;  
   if(el_nav.classList.contains('nav--active') == true && scroll_width>60){
      removeNav();    
    }
  }

}