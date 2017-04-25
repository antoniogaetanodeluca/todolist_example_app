var toDo = function(){

  var data, year, day, month;
      data = new Date();
      year = data.getFullYear();
      day = data.getDay();
      month = data.getMonth();

  var toDoObject = [
    {
      id: "123",
      title: "First To Do",
      description: "Lorem Ipsum dolor sit amet",
      date: [day, month, year]
    },
    {
      id: "456",
      title: "Second To Do",
      description: "Lorem Ipsum dolor sit amet 2",
      date: [day, month, year]
    }
  ]

  return {
    getToDo: function(){
      return toDoObject;
    },
    addToDo: function(todo){
      toDoObject.push(todo);
    }
  }

}

document.addEventListener("DOMContentLoaded", function(e){

  var myApp = new toDo;

  var obj = myApp.getToDo();
  var li, li_title, li_year, li_description, li_node, li_content;
  var ul_list = document.getElementById("todo_list");
  obj.forEach(function (k){
    li = document.createElement("li");
    li_title = k.title;
    li_description = k.description;
    li_year = k.date[2];
    li_content = "<div class='todo_item'><span class='date'>"+li_year+"</span><span class='title'><h2>"+li_title+"</h2></span><span class='description'><p>"+li_description+"</p></span></div>";
    li.innerHTML = li_content;
    ul_list.appendChild(li);
  });


});
