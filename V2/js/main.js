window.onload = () => {


  
  //=========change color navigation-icon==================
  

  var el_top_icon = document.querySelector('.nav-icon'),
      color_pr_light = '#f9f9f9',
      color_light = '#fff';  
 
  el_top_icon.onmouseover = () => {
    
    for(let i=0; i<span_icon.length; i++){
      span_icon[i].style.background = color_light;
   }
 }     

 el_top_icon.onmouseout = () => {
   
    for(let i=0; i<span_icon.length; i++){
     span_icon[i].style.background = color_pr_light;
   }
 }


 //====================navigation=====================
 

  var el_items = document.querySelectorAll('.nav li');
     
      for(let i=0; i < el_items.length; i++){
           el_items[i].classList.add('nav__item');
             if(i<1){
              el_items[i].classList.add('nav__item--one');
             }
      }
  
   var el_links = document.querySelectorAll('.nav a');
      
      for(let i=0; i < el_links.length; i++){
           el_links[i].classList.add('link', 'nav__link');             
      } 

   var span_icon = document.querySelectorAll('.nav-icon__item'),      
      el_nav = document.querySelector('.nav'),
      el_nav_item = document.querySelectorAll('.nav__item');

  var stop_timer,
      nav_item_speed = 175;

  var timer = () => {
   
    stop_timer = setTimeout(fadeNavItem, nav_item_speed);

   }  

  var startAddNavItems = () =>{ 
  
    setTimeout(fadeNavItem, 500);
  }

 var fadeNavItem = () => {  

         clearTimeout(stop_timer);         
         timer(); 
         
          for(let i=0; i<el_nav_item.length; i++){            
          if(el_nav_item[i].classList.contains('nav__item--active') != true){
             el_nav_item[i].classList.add('nav__item--active');
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
     
      if(el_nav_item[0].classList.contains('nav__item--active') === false){
          startAddNavItems();          
      }else{
        removeNav();           
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

     if(clientWidth < 768 && el_nav.classList.contains('nav--d-flex') == false ){        
           
           el_nav.classList.add('nav--d-flex');
             
     }else if(clientWidth > 768 && el_nav.classList.contains('nav--d-flex') == true){

       el_nav.classList.remove('nav--d-flex');

     } 
  }


  window.onscroll = () => {
     
     let pagey_offset = window.pageYOffset; 

     if(el_nav.classList.contains('nav--active') == true && pagey_offset > 10){
       removeNav();    
    }
  }

   clientWidth = document.body.clientWidth;

  if(clientWidth < 768 && el_nav.classList.contains('nav--d-flex') == false ){        
          
         el_nav.classList.add('nav--d-flex');
             
    }


 //=========post-reverse-picture=====================

  
    var el_posts = document.querySelectorAll('.post');

  for( let i=0; i<el_posts.length; i++){
      
      if(i % 2 != 0){
        el_posts[i].classList.add('row--reverse-x');
      }

      if( i < 3){
            el_posts[i].classList.add('post--active');            
         }
  }


 //==========================load posts=====================

 var el_load = document.querySelector('.btn__link--load');

 if(el_load != null){
     
     var new_posts = 3;

     var checkNewPost = () => {
       
        let el_posts = document.querySelectorAll('.post');
        let active_post = document.querySelectorAll('.post--active')
         disabled_post = el_posts.length - active_post.length;         
       
        if(disabled_post>0){
          return true;
         } 
       }      
   
     var displayPost = () =>{
        let el_posts = document.querySelectorAll('.post');
        let active_post = document.querySelectorAll('.post--active');
        let disabled_post = el_posts.length - active_post.length;
      
        if(disabled_post > 0){
           let posts_count = new_posts
  
           for(let i=0; i<el_posts.length; i++){
              
              if(el_posts[i].classList.contains('post--active') !=true && posts_count > 0){
                 el_posts[i].classList.add('post--active');
                 posts_count--;
              }
           }        
        }
      
        if(checkNewPost() != true){
          el_load.style = 'display: none;';
        }
     }

     if(checkNewPost() != true){
          el_load.style = 'display: none;';
        } 

     var TimerStart = () =>{
       setTimeout(displayPost, 250);
     }

     el_load.onclick = () =>{
        TimerStart();
      }

   }  

}
