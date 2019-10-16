
var el_task_name = document.getElementById('taskname');
el_task_name.focus();
var addtask = document.getElementById('addtask');
var ul_list = document.getElementById('list');
var ul_class = document.getElementsByClassName("check");
var tag_li = document.getElementsByTagName('li');
var tasks_names;


function getRandomInt (min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(localStorage.getItem("safetasks") == undefined){
  tasks_names = [];
  }else{
 	     tasks_names = JSON.parse(localStorage.getItem("safetasks"));
 	     loadTasks(tasks_names);
}

var deltask = document.getElementsByClassName("del");

function dellitask(){

  var el_li = this.parentElement; 
  
  var label = this.previousSibling.textContent;
  for(var i=0; i<tasks_names.length; i++){               
     if(label == tasks_names[i].name){                             
        tasks_names.splice(i, 1);
        localStorage.setItem("safetasks", JSON.stringify(tasks_names));
        break;}
      }

    ul_list.removeChild(el_li);
 }

for (var i = 0; i < deltask.length; i++){
   deltask[i].onclick = dellitask 
}

function addNewElement(task){
  var new_li = document.createElement('li');
  var new_input = document.createElement('input');
  var span = document.createElement('span');
  var txt = document.createTextNode("\u00D7");
  var new_task = document.createElement('label');

  var rand;
  var rand_arr = [];
   
  var id = "check_" + getRandomInt (999, 999999);  
  

  span.className = "del";
  new_input.setAttribute("type", "checkbox");        
  new_input.setAttribute("id", id);        
  span.appendChild(txt);        
  new_task.textContent = task;
  new_task.setAttribute("for", id);

  ul_list.appendChild(new_li);
  new_li.appendChild(new_input);
  new_li.appendChild(new_task);
  new_li.appendChild(span); 

  el_task_name.focus();          
}


function addNewTasks(){
  var tn = el_task_name.value;
  var tn_n = tn;  

	if(el_task_name.value){

    var num = 1;

    for(var i=0; i<tasks_names.length; i++){
      if(tn_n == tasks_names[i].name){          
          tn_n = tn + "(" + num + ")";
          num++;
          i = 0;                    
      }
    }
    
      el_task_name.value = "";  
      tasks_names.push(
      { name: tn_n,
      check: false });
       
      localStorage.setItem("safetasks", JSON.stringify(tasks_names)); 
      addNewElement(tn_n); 
      deltask[deltask.length-1].onclick = dellitask;
     
  }   
}

addtask.addEventListener("click", addNewTasks, false);


function loadTasks(tasks){
  for(i in tasks){       	
    var new_li = document.createElement('li');
    var new_input = document.createElement('input');
    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    var new_task = document.createElement('label');
    var id = "check_" + i;
       
    new_input.setAttribute("id", id);
    new_input.setAttribute("type", "checkbox");
     if(tasks[i].check == true){
       new_input.setAttribute("checked", "checked");
     }        
       
    span.className = "del";
    span.appendChild(txt);       
    new_task.textContent = tasks[i].name;
    new_task.setAttribute("for", id);
        
    ul_list.appendChild(new_li);
    new_li.appendChild(new_input);
    new_li.appendChild(new_task);
    new_li.appendChild(span);
    }             
 }

ul_list.addEventListener('click', function(){checkTasks(event)});

function checkTasks(event){
  var target = event.target;      
   
   while(target != ul_list){
     if(target.tagName == "SPAN") break;

     if(target.tagName == "INPUT"){ 
        var label = target.nextSibling.innerHTML;          
         for(var i=0; i<tasks_names.length; i++){
               
         if(label == tasks_names[i].name && tasks_names[i].check == false){                             
            tasks_names[i].check = true
            localStorage.setItem("safetasks", JSON.stringify(tasks_names));
            break; }

         if(label == tasks_names[i].name && tasks_names[i].check == true){
           tasks_names[i].check = false;
           localStorage.setItem("safetasks", JSON.stringify(tasks_names));
           break;
           }
        }         
      }
    target = target.parentNode; 
  }    
}

 el_task_name.onkeydown = function(e){
           if(e.keyCode === 13){
            addNewTasks();
           }
         }
