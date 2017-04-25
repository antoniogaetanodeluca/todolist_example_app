<?php

  $res = [
    [
      "id" => "123",
      "title" => "First To Do",
      "description" => "Lorem Ipsum dolor sit amet",
      "date" => [day, month, year]
    ],
    [
      "id" => "456",
      "title" => "Second To Do",
      "description" => "Lorem Ipsum dolor sit amet 2",
      "date" => [day, month, year]
    ]
  ];

  echo json_encode($res);

?>
