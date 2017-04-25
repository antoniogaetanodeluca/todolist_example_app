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
      console.log(toDoObject);
    },
    addToDo: function(todo){
      toDoObject.push(todo);
    }
  }

}

document.addEventListener("DOMContentLoaded", function(e){

  var myApp = new toDo;

  myApp.getToDo();
  //myApp.addToDo(todo);

});
