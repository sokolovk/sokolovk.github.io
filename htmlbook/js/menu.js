window.onload = function(){

   //function fixes the side menu.

  var top_scroll;

  window.onscroll = function(){
   
  var el_sidebar = document.querySelector('#sidebar');
  var el_top_menu = document.querySelector('#top-menu');

  top_scroll= pageYOffset;

  if(top_scroll<70){
    el_sidebar.style.cssText = "position: absolute;";
    el_top_menu.style.cssText = 'position: relative';
      if(main_class.contains('margin-top') == true){
         main_class.remove('margin-top');        
      }
    }else{
      el_sidebar.style.cssText = "top: 41px; position: fixed;";
      el_top_menu.style.cssText = 'position: fixed; width: 100%; top: 0; min-width: 360px; z-index: 2;';
      main_class.add('margin-top');
    }
  }

  
  var span_icon = document.querySelectorAll('#top-nav-icon span');
  var el_top_icon = document.querySelector('#top-nav-icon');
    
    //the functions change color top-icon.
  el_top_icon.onmouseover = function(){
    for(var i=0; i<span_icon.length; i++)
      span_icon[i].style.background="#fff";
  }     

  el_top_icon.onmouseout = function(){
    for(var i=0; i<span_icon.length; i++)
      span_icon[i].style.background="#BDC3C5";           
  }

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
      
    if(el_top_icon.classList.contains("change-nav-icon") == true)
      el_top_icon.classList.remove("change-nav-icon");    
  }

  var clientWidth;

  window.onresize = function(){
      clientWidth = document.body.clientWidth;      
    if(main_class.contains('margin-left') == true && clientWidth > 767)
      main_class.remove('margin-left');

    if(el_sidebar.contains('sidebar-active') == true && clientWidth > 767){
      el_top_icon.classList.remove("change-nav-icon");
      el_sidebar.remove('sidebar-active');                  
    }      
  }
}
