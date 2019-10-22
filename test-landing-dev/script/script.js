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

//accordion title change color
var el_accor_li = document.querySelectorAll(".accordion li");
  
for(var i=0; i<el_accor_li.length; i++){
  el_accor_li[i].addEventListener('click', changeColor);
}

 function changeColor(){
    this.children[2].classList.toggle('accordion-active');
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

 
