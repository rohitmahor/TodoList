'use strict'

if(JSON.parse(localStorage.getItem('todo')) === null) {
   var todolist = new Array;
   }
   
if(JSON.parse(localStorage.getItem('todo')) !== null) {
    var todolist = JSON.parse(localStorage.getItem('todo'));
}

display1();

window.onload = function () {
    var input = document.getElementById('input');
    var button1 = document.getElementById('button1');
    var ul = document.getElementById('ul');
    var ul1 = document.getElementById('ul1');
  
    button1.onclick = function () {
        var value = input.value;
        ul.innerHTML = '';
        ul1.innerHTML = '';
        if(input.value === '') {
            alert('Please Enter Task');
        }
        
        if(input.value != '') {
            input.value = null;
            todolist.push ({
            'task': value,
            'done': false
            });
        }
        
         
        localStorage.setItem('todo',JSON.stringify(todolist));
        display1();
    }
}


function strikethrough(el) {
    var element = document.getElementById(el.id);
    element.style.textDecoration = 'line-through';
    todolist[el.id].done = true;    
    localStorage.setItem('todo',JSON.stringify(todolist));
    display1();
}

function unstrikethrough(el) {
    var element = document.getElementById(el.id);
    element.style.textDecoration = 'none';
    todolist[el.id].done = false;    
    localStorage.setItem('todo',JSON.stringify(todolist));
    display1();
}

function delete1(el) {
    todolist.splice(el.id,1);
    localStorage.setItem('todo',JSON.stringify(todolist));
    display1();
}

function display1() {
    ul.innerHTML = '';
    ul1.innerHTML = '';

    for(var i = 0 ; i<todolist.length ; i++) {
                if(JSON.parse(localStorage.getItem('todo'))[i].done === false) {
                    ul.innerHTML += '<li'+' id = '+i+' >' + 
                                '<div class="delete"><i onclick = "delete1(this)" class="fa fa-trash-o" aria-hidden="true"'+' id = '+i +'></i></div>'+
                                   '<div class="done"><i onclick="strikethrough(this)" class="fa fa-check-circle-o" aria-hidden="true"'+' id= '+i+'></i></div>'+ '<p>'+JSON.parse(localStorage.getItem('todo'))[i].task +'</p></li>';
                }   
            
                else if(JSON.parse(localStorage.getItem('todo'))[i].done === true) {
                    ul1.innerHTML += '<li'+' id = '+i+' style="text-decoration: line-through">' + 
                                '<div class="delete"><i onclick="delete1(this)" class="fa fa-trash-o" aria-hidden="true"'+ ' id='+i+'></i></div>' +
                                   '<div class="done" style="color:green"><i onclick="unstrikethrough(this)" class="fa fa-check-circle-o" aria-hidden="true"'+' id= '+i+'></i></div>'+ '<p>'+JSON.parse(localStorage.getItem('todo'))[i].task +'</p></li>';
                }
            }
}
