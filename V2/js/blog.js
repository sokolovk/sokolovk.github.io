   //add new posts after click load more

  var el_posts = document.querySelectorAll('.post');
  var el_load = document.querySelector('.btn__link--load');
  var new_posts = 3;

  var checkNewPost = () => {
    let el_posts = document.querySelectorAll('.post');
    let active_post = document.querySelectorAll('.post--active')
        disabled_post = el_posts.length - active_post.length;
    if(disabled_post>0){
      return true;
    }
    
  }  

  el_load.onclick = () =>{
      
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