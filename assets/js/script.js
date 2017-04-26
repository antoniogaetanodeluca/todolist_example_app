var toDo = function(){

  var data, year, day, month, id;
      data = new Date();
      year = data.getFullYear();
      day = data.getDay();
      month = data.getMonth();

  var toDoObject = [];

  var callJson = function(){
    $.ajax ({
      url: 'json.php',
      dataType: "json",
      contentType: "application/json",
      success: function (jsonData) {
        toDoObject = jsonData;
      },
      error: function() {
        console.log("error");
      }
    });
    return toDoObject;
  }

  var requiredField = function(field, className){
    if(field.classList.contains(className)){
      field.classList.remove(className);
    } else {
      field.classList.add(className);
    }
  }

  var showToDoList = function(){
    var ul_list = document.getElementById("todo_list");
    ul_list.innerHTML = "";
    var obj = callJson();
    obj.forEach(function (k){
      li = document.createElement("li");
      li_title = k.title;
      li_description = k.description;
      li_year = k.date[2];
      li_content = "<div class='todo_item'><span class='title'><h2>"+li_title+"</h2></span><span class='date'>"+li_year+"</span><span class='description'><p>"+li_description+"</p></span><button class='delete_todo btn btn-success'><i class='fa fa-check' aria-hidden='true'></i> done</button><button class='restore btn btn-warning hidden'>restore</button></div>";
      li.innerHTML = li_content;
      ul_list.appendChild(li);
    })
  }

  return {
    getToDoList: function(){
      return toDoObject;
    },

    addToDo: function(title_todo, description_todo){
      id = Math.floor(Math.random() * 100);
      var todo = {
        id: id,
        title: title_todo,
        description: description_todo,
        date: [day, month, year]
      }
      toDoObject.unshift(todo);
    },

    showToDoList: showToDoList,

    callJson: callJson
  }

}

document.addEventListener("DOMContentLoaded", function(e){

  var myApp = new toDo;

  myApp.showToDoList();

  var li, li_title, li_year, li_description, li_node, li_content;
  var submit_todo = document.getElementById("submit_todo");
  var delete_todo = document.getElementsByClassName("delete_todo");

  // add new todo
  submit_todo.addEventListener("click", function(e){
    e.preventDefault();
    var title_todo = document.getElementById("title_todo").value;
    var description_todo = document.getElementById("description_todo").value;
    var form_todo = document.getElementById("form_todo");

    if( (title_todo.length < 4) || (title_todo.value = "") ){
      //requiredField(title_todo, "required");
    } else if ( (description_todo.length < 4) || (description_todo.value = "") ){
      //requiredField(description_todo, "required");
    } else {
      //requiredField(title_todo, "required");
      //requiredField(description_todo, "required");
      myApp.addToDo(title_todo, description_todo);
      title_todo.value = "";
      description_todo.value = "";
    }
    myApp.showToDoList();
  });

  //mark a todo as done
  document.getElementById("todo_list").addEventListener("click", function(e){
    if(e.target.nodeName.toLowerCase() === "button"){
      var x = e.target.parentElement.nodeName;
      console.log(x);
    }
  });
  // $(".delete_todo").on("click", function(e){
  //   $(this).parents("li").toggleClass("completed");
  // })

  console.log(myApp.callJson());






});
