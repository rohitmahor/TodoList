'use strict'

var countp = 0;

if(JSON.parse(localStorage.getItem('todo')) === null) {
    var todolist = new Array;    
   }
   
if(JSON.parse(localStorage.getItem('todo')) !== null) {
    var todolist = JSON.parse(localStorage.getItem('todo'));
}

function cool() {
    countp = 0;
    todolist.forEach(function(x){
     if(x.done === false)
         countp++;
    });
    
    $('#total').html(todolist.length);
    $('#pending').html(countp);
    $('#completed').html(todolist.length - countp);    
}


var input = document.getElementById('input');
var button1 = document.getElementById('button1');
var ul = document.getElementById('ul');
var ul1 = document.getElementById('ul1');
var priority = document.getElementById('priority');
var editbutton = document.getElementById('editbutton');

setInterval(function () {var date = new Date();var n = date.toDateString();$('#date').html(n+' '+date.toLocaleTimeString());},1000);

cool();
display1();

window.onload = function () {
    notodo();
    button1.onclick = function () {
        var value = input.value;
        var index = priority.options.selectedIndex;
        if(input.value === '' || priority.options.selectedIndex === 0) {
            input.value = null;
            priority.options.selectedIndex = 0;
            alert('Please Enter Task Properly!');
        }

        if(input.value !== '' || priority.options.selectedIndex !== 0){
            input.value = null;
            priority.options.selectedIndex = 0;
            todolist.push ({
            'task': value,
            'done': false,
            'priority': priority.options[index].value
            });
        }
        
        localStorage.setItem('todo',JSON.stringify(todolist));
        cool();
        display1();
        notodo();
    }
}

function display1() {
    ul.innerHTML = '';
    ul1.innerHTML = '';
    $('#nothing').html('');
    for(var i = 0 ; i<todolist.length ; i++) {
                if(JSON.parse(localStorage.getItem('todo'))[i].done === false &&  JSON.parse(localStorage.getItem('todo'))[i].priority === "low") {
                    ul.innerHTML +=  '<li style="border-right: 10px solid #00bf5e" class = "li'+i+'"'+' id='+ i + '><span class="done"  onclick="strikethrough('+i+');"  '+' id = '+i+ '></span><p onclick="openmenu('+i+')" >'+JSON.parse(localStorage.getItem('todo'))[i].task+'</p>'+
                    '<div id="menu'+i+'" class="menu" style = "width: 0px">'+
                     '<i onclick="edit('+i+',1)" data-toggle="modal" data-target=".edit-modal" id="iconpen" class="fa fa-pencil icon' +i+ '"aria-hidden="true"></i>'+
                     '<i onclick="delete1('+i+')" id="icon" class="fa fa-trash-o icon'+i+'"aria-hidden="true"></i></div>'+
                    '<div onclick="openmenu('+i+')" class="arrow-left" id = arrow'+i+' ></div></li>'
                }   
            
                else if(JSON.parse(localStorage.getItem('todo'))[i].done === true && JSON.parse(localStorage.getItem('todo'))[i].priority === "low") {
                    ul1.innerHTML +=  '<li style="border-right: 10px solid #00bf5e" class = "li'+i+'"'+ ' id = ' + i  + '><span class="done1"  onclick="unstrikethrough('+i+')" '+' id = '+i+ '></span><p style="text-decoration: line-through;" onclick="openmenu('+i+')">'+JSON.parse(localStorage.getItem('todo'))[i].task+'</p>'+
                    '<div id="menu'+i+'" class="menu" style = "width: 0px">'+
                     '<i onclick="edit('+i+',1)" data-toggle="modal" data-target=".edit-modal" id="iconpen" class="fa fa-pencil icon' +i+ '"aria-hidden="true"></i>'+
                     '<i onclick="delete1('+i+')" id="icon" class="fa fa-trash-o icon'+i+'"aria-hidden="true"></i></div>'+
                     '<div onclick="openmenu('+i+')" class="arrow-left" id = arrow'+i+' ></div></li>'
                }
        
                else if(JSON.parse(localStorage.getItem('todo'))[i].done === false &&  JSON.parse(localStorage.getItem('todo'))[i].priority === "medium") {
                    ul.innerHTML +=  '<li style="border-right: 10px solid #ffd54f" class = "li'+i+'"'+' id='+ i + '><span class="done"  onclick="strikethrough('+i+');"  '+' id = '+i+ '></span><p onclick="openmenu('+i+')" >'+JSON.parse(localStorage.getItem('todo'))[i].task+'</p>'+
                    '<div id="menu'+i+'" class="menu" style = "width: 0px">'+
                     '<i onclick="edit('+i+',2)" data-toggle="modal" data-target=".edit-modal" id="iconpen" class="fa fa-pencil icon' +i+ '"aria-hidden="true"></i>'+
                     '<i onclick="delete1('+i+')" id="icon" class="fa fa-trash-o icon'+i+'"aria-hidden="true"></i></div>'+
                     '<div onclick="openmenu('+i+')" class="arrow-left" id = arrow'+i+' ></div></li>'
                }   
            
                else if(JSON.parse(localStorage.getItem('todo'))[i].done === true && JSON.parse(localStorage.getItem('todo'))[i].priority === "medium") {
                    ul1.innerHTML +=  '<li style=" border-right: 10px solid #ffd54f" class = "li'+i+'"'+ ' id = ' + i  + '><span class="done1"  onclick="unstrikethrough('+i+')" '+' id = '+i+ '></span><p style="text-decoration: line-through;" onclick="openmenu('+i+')" >'+JSON.parse(localStorage.getItem('todo'))[i].task+'</p>'+
                    '<div id="menu'+i+'" class="menu" style = "width: 0px">'+
                     '<i onclick="edit('+i+',2)" data-toggle="modal" data-target=".edit-modal" id="iconpen" class="fa fa-pencil icon' +i+ '"aria-hidden="true"></i>'+
                     '<i onclick="delete1('+i+')" id="icon" class="fa fa-trash-o icon'+i+'"aria-hidden="true"></i></div>'+
                    '<div onclick="openmenu('+i+')" class="arrow-left" id = arrow'+i+' ></div></li>'
                }
        
                else if(JSON.parse(localStorage.getItem('todo'))[i].done === false &&  JSON.parse(localStorage.getItem('todo'))[i].priority === "high") {
                    ul.innerHTML +=  '<li style="border-right: 10px solid #d32f2f"  class = "li'+i+'"'+' id='+ i + '><span class="done"  onclick="strikethrough('+i+');"  '+' id = '+i+ '></span><p onclick="openmenu('+i+')">'+JSON.parse(localStorage.getItem('todo'))[i].task+'</p>'+
                    '<div id="menu'+i+'" class="menu" style = "width: 0px">'+
                     '<i onclick="edit('+i+',3)" data-toggle="modal" data-target=".edit-modal" id="iconpen" class="fa fa-pencil icon' +i+ '"aria-hidden="true"></i>'+
                     '<i onclick="delete1('+i+')" id="icon" class="fa fa-trash-o icon'+i+'"aria-hidden="true"></i></div>'+
                    '<div class="arrow-left" onclick="openmenu('+i+')" id = arrow'+i+' ></div></li>'
                }   
            
                else if(JSON.parse(localStorage.getItem('todo'))[i].done === true && JSON.parse(localStorage.getItem('todo'))[i].priority === "high") {
                    ul1.innerHTML +=  '<li style="border-right: 10px solid #d32f2f;" class = "li'+i+'"'+ ' id = ' + i  + '><span class="done1"  onclick="unstrikethrough('+i+')" '+' id = '+i+ '></span><p style="text-decoration: line-through;" onclick="openmenu('+i+')">'+JSON.parse(localStorage.getItem('todo'))[i].task+'</p>'+
                    '<div id="menu'+i+'" class="menu" style = "width: 0px;">'+
                     '<i onclick="edit('+i+',3)" data-toggle="modal" data-target=".edit-modal" id="iconpen" class="fa fa-pencil icon' +i+ '"aria-hidden="true"></i>'+
                     '<i onclick="delete1('+i+')" id="icon" class="fa fa-trash-o icon'+i+'"aria-hidden="true"></i></div>'+
                    '<div onclick="openmenu('+i+')"  class="arrow-left" id = arrow'+i+' ></div></li>'
                }
            }
}

function strikethrough(el) {
     $('.li'+el).animate ({
        opacity: '0.2',
        height: '0px'
    });

    setTimeout(function() {
        todolist[el].done = true;    
        localStorage.setItem('todo',JSON.stringify(todolist));cool();
        display1();notodo();}, 500); 
    
    }

function unstrikethrough(el) {
    $('.li'+el).animate ({
        opacity: '0.2',
        height: '0px'
    });
    
    setTimeout(function() {
         todolist[el].done = false;    
        localStorage.setItem('todo',JSON.stringify(todolist));cool();
       display1();notodo(); 
    }, 500)
    
    
}

function delete1(el) {
    $('.li'+el).animate ({
        opacity: '0.2',
        height: '0px'
    });
    
    setTimeout(function () {todolist.splice(el,1);localStorage.setItem('todo',JSON.stringify(todolist));cool();
    display1();notodo(); } , 1000 )
    
    
}

    function openmenu(el) {

        var icon = ".icon"+el;
        var menu = "#menu"+el;

        var icon = $(icon);
        var menu = $(menu);

        if(document.getElementById('menu'+el).style.width == '100px') {

            if(JSON.parse(localStorage.getItem('todo'))[el].priority === "high") {
                $(".li"+el).css ({
                    "transition": "1s",
                    "border-right": "10px solid #d32f2f"
                });
            }

            else if(JSON.parse(localStorage.getItem('todo'))[el].priority === "medium") {
                $(".li"+el).css ({
                    "transition": "1s",
                    "border-right": "10px solid #ffd54f"
                });
            }

            else if(JSON.parse(localStorage.getItem('todo'))[el].priority === "low") {
                $(".li"+el).css ({
                    "transition": "1s",
                    "border-right": "10px solid #00bf5e"
                });
            }

            icon.css({
                "display": "none",
            });

            menu.css({
                "width": "0px",
                "border-left": "0px",
                "font-size": "0px"
            });


            $('#arrow'+el).css({
                "transform": 'rotate(360deg)',
                "background": 'none'
            });

        }

       else {
           $(".li"+el).css ({
                "transition": "1s",
                "border-right": "none",
            });

            $('#arrow'+el).css({
                "transform": 'rotate(180deg)',
                "background": 'beige',
                "padding-left": '5px'
            });

            if(JSON.parse(localStorage.getItem('todo'))[el].priority === "high") {
                 menu.css ({
                    "border-left": "10px solid #d32f2f"
                 });
            }

           else if(JSON.parse(localStorage.getItem('todo'))[el].priority === "medium") {
                 menu.css ({
                    "border-left": "10px solid #ffd54f"
                 });
            }

            else if(JSON.parse(localStorage.getItem('todo'))[el].priority === "low") {
                 menu.css ({
                    "border-left": "10px solid #00bf5e"
                 });
            }

            icon.css({
                "display": "inline",
            });

            menu.css({
                "width": "100px",
                "font-size": "25px"
            });

       }

} 

function edit(el,index) {
    var editinput = document.getElementById('editinput');
    editinput.value = todolist[el].task;
    var editpriority = document.getElementById('editpriority');
    editpriority.options.selectedIndex = index;

    editbutton.onclick = function () {
        if (editinput.value === '') {
            alert('Please Edit Task Properly!');
        }

        else if (editinput.value !== todolist[el].task || editpriority.options.selectedIndex !== index) {
            todolist.splice(el, 1);
            todolist.push({
                'task': editinput.value,
                'done': false,
                'priority': editpriority.options[editpriority.options.selectedIndex].value
            });
            localStorage.setItem('todo',JSON.stringify(todolist));
            cool();
            display1();
            notodo();
        }
    };

    }

function notodo() {
    $(function() {
        if(countp === 0) {
            $('#nothing').html('<p>Nothing To Do &nbsp;<span>: )</span></p>' ) ;
        return;
    }});
}