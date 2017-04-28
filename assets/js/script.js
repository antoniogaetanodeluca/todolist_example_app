var toDo = function(){

  var data, year, day, month, id;
  data = new Date();
  year = data.getFullYear();
  day = data.getDay();
  month = data.getMonth();

  var toDoObject = [];

  var getTodoList = function(){
    try {
      $.ajax ({
        url: 'json.php',
        method: "GET",
        async: false,
        dataType: "json",
        contentType: "application/json",
        success: function (jsonData) {
          toDoObject = jsonData;
        }
      });
      return toDoObject;
    } catch(e) {
      console.log(e);
    }
  };

  var updateToDoList = function(obj){
    try {
      $.ajax({
        method: "POST",
        data: {json:JSON.stringify(obj)},
        url: "json.php",
        success: function(jsonRes){
        },
        error: function(){
          console.log("error json call!");
        }
      });
    } catch(e) {
      console.log(e);
    }
  };

  var showToDoList = function(){
    try {
      var ul_list = document.getElementById("todo_list");
      var li, li_title, li_year, li_description, li_content;
      ul_list.innerHTML = "";
      var obj = getTodoList();
      obj.forEach(function (k){
        li = document.createElement("li");
        li.id = k.id;
        li_title = k.title;
        li_description = k.description;
        li_year = k.date[2];
        li_content = "<div class='todo_item'><span class='title'><h2>"+li_title+"</h2></span><span class='date'>"+li_year+"</span><span class='description'><p>"+li_description+"</p></span><button class='delete_todo btn btn-success'><i class='fa fa-check' aria-hidden='true'></i> done</button><button class='restore btn btn-warning hidden'>restore</button></div>";
        li.innerHTML = li_content;
        ul_list.appendChild(li);
      });
    } catch(e) {
      console.log(e);
    }
  };

  var addToDo = function(title_todo, description_todo){
    try {
      id = Math.floor(Math.random() * 100);
      var toDo = {
        id: id,
        title: title_todo,
        description: description_todo,
        date: [day, month, year],
        completed: false
      }
      toDoObject.unshift(toDo);
      updateToDoList(toDoObject);
    console.log(toDoObject);
    } catch(e) {
      console.log(e);
    }
  };

  var toDoCompleted = function(id, state){
    try {
      var obj = getTodoList();
      obj.forEach(function(k){
        if(id == k.id){
          if(state === "completed"){
            var toDoCompleted = {
              id: id,
              title: k.title,
              descriprion: k.descriprion,
              date: k.date,
              completed: true
            }
          } else {
            var toDoCompleted = {
              id: id,
              title: k.title,
              descriprion: k.descriprion,
              date: k.date,
              completed: false
            }
          }
          $.ajax({
            method: "POST",
            data: {json: JSON.stringify(toDoCompleted)},
            url: "json.php",
            success: function(jsonresponse){
              console.log(jsonresponse);
            },
            error: function(){
              console.log("error!");
            }
          });
        }
      });
    } catch(e) {
      console.log(e);
    }
  }

  return {
    addToDo: addToDo,
    showToDoList: showToDoList,
    getTodoList: getTodoList,
    toDoCompleted: toDoCompleted
  }

}

document.addEventListener("DOMContentLoaded", function(e){

  var myApp = new toDo;

  myApp.showToDoList();

  var submit_todo = document.getElementById("submit_todo");
  var delete_todo = document.getElementsByClassName("delete_todo");

  // add new todo
  submit_todo.addEventListener("click", function(e){
    e.preventDefault();
    var title_todo = document.getElementById("title_todo").value;
    var description_todo = document.getElementById("description_todo").value;
    var form_todo = document.getElementById("form_todo");

    if( (title_todo.length < 3) || (title_todo.value = "") ){
      //requiredField(title_todo, "required");
    } else if ( (description_todo.length < 4) || (description_todo.value = "") ){
      //requiredField(description_todo, "required");
    } else {
      //requiredField(title_todo, "required");
      //requiredField(description_todo, "required");
      myApp.addToDo(title_todo, description_todo);
    }
    myApp.showToDoList();
  });

  //mark a todo as done
  // document.getElementById("todo_list").addEventListener("click", function(e){
  //   if( (e.target.nodeName.toLowerCase() === "button") && (e.target.className === "delete_todo") ){
  //    console.log("test");
  //   }
  // });

  $("#todo_list").on("click", ".delete_todo", function(e){
    $(this).parents("li").toggleClass("completed");
    var toDo_id = $(this).parents("li").attr("id");
    var state = null;
    if($(this).parents("li").hasClass("completed")){
      state = "completed";
      $(this).text("modify")
    } else {
      state = "uncompleted";
      $(this).text("done");
    }
    myApp.toDoCompleted(toDo_id, state);
  });







});
