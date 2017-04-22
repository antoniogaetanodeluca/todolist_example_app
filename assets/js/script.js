document.addEventListener("DOMContentLoaded", function(event) {

  var ToDoList = function(){

    var toDo = [
      {
        id:"1234",
        titolo:"first toDo",
        data: "23 December",
        urgenza: "si"
      },
      {
        id:"4567",
        titolo:"second toDo",
        data: "23 March",
        urgenza: "no"
      },

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

  var myApp = ToDoList();

  myApp.addToDo({
    id:"5656",
    titolo:"third toDo",
    data: "29 March",
    urgenza: "no"}
  );
  console.log(myApp.getToDo());


});
