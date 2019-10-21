var span_icon = document.querySelectorAll('#top-nav-icon span');
var el_top_icon = document.querySelector('#top-nav-icon');

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

el_top_icon.onclick = function(){
  this.classList.toggle("change-nav-icon");
  el_nav.classList.toggle("nav-toggle"); 
}

var clientWidth;

  window.onresize = function(){
      clientWidth = document.body.clientWidth;      
    
    if(el_nav.classList.contains('nav-toggle') == true && clientWidth > 768){
      el_top_icon.classList.remove("change-nav-icon");
      el_nav.classList.remove('nav-toggle');                  
    }      
  }


/*
var el_sidebar = document.querySelector('#sidebar').classList;
var el_main = document.getElementById('main');
var main_class = document.querySelector('.main-contents').classList;

el_top_icon.onclick = function(){
  this.classList.toggle("change-nav-icon");
  el_sidebar.toggle('sidebar-active');
  main_class.toggle('margin-left');       
}

el_main.onclick = function(){      
  if(el_sidebar.contains('sidebar-active') == true)
    el_sidebar.remove('sidebar-active');

  if(main_class.contains('margin-left') == true)
     main_class.remove('margin-left');
} */