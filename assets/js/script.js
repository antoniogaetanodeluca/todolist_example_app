var toDo = function(){

  var data = new Date();
  var year = data.getFullYear();
  var day = data.getDay();
  var month = data.getMonth();

  var toDoObject = {
    id: "123",
    title: "First To Do",
    description: "Lorem Ipsum dolor sit amet",
    date: [day, month, year]
  }

  return {
    getToDo: function(){
      console.log(toDoObject);
    }
  }

}

document.addEventListener("DOMContentLoaded", function(e){

  var myApp = new toDo;

  myApp.getToDo();

});
