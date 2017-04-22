var ToDoList = function(){

  var toDo = [
    {
      id:"1234",
      title:"first toDo",
      date: "23 December",
      priority: "si"
    },
    {
      id:"4567",
      title:"second toDo",
      date: "23 March",
      priority: "no"
    }
  ];

  return {
    getToDo: function(){
      return toDo;
    },

    addToDo: function(todo){
      toDo.push(todo);
    }
  }

};

document.addEventListener("DOMContentLoaded", function(event) {

  var myApp = ToDoList();
  var doc = document;

  var input_todo = doc.querySelector("#input_todo");
  input_todo.addEventListener("keypress", function(e){
    if(e.keyCode === 13 && e.target.value != "" && e.target.value.length >= 4){
      var objToDo_to_add = {
        id:"000",
        title: e.target.value,
        date: "23 December",
        priority: "si"
      }
      myApp.addToDo(objToDo_to_add);
    }
  });

  var ul_todolist = doc.querySelector("#todolist");
  var toDoObj = myApp.getToDo();
  // FOR METHOD to read the todo list
  // for(var i=0; i<toDoObj.length; i++){
  //   var li, li_element, li_node, todo_title, todo_date, todo_priority;
  //   todo_title = toDoObj[i].title;
  //   todo_date = toDoObj[i].date;
  //   todo_priority = toDoObj[i].priority;
  //   li = doc.createElement("li");
  //   li_element = todo_date + " - " + todo_title + " - " + todo_priority;
  //   li_node = doc.createTextNode(li_element);
  //   li.appendChild(li_node);
  //   ul_todolist.appendChild(li);
  // }

  //FOREACH METHOD to read the todo list
  toDoObj.forEach(function(todoelement){
    var li, li_element, li_node, todo_title, todo_date, todo_priority;
    todo_title = todoelement.title;
    todo_date = todoelement.date;
    todo_priority = todoelement.priority;
    li = doc.createElement("li");
    li_element = todo_date + " - " + todo_title + " - " + todo_priority;
    li_node = doc.createTextNode(li_element);
    li.appendChild(li_node);
    ul_todolist.appendChild(li);
  });

});
