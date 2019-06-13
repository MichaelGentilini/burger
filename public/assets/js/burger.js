// ? validate and retrieve the new burger name

$(function () {
  $('#submitBurger').on('click', function (e) {
    e.preventDefault()
    var newBurger = {
      newBurger: $('#newBurger').val().trim(),
      devoured: 0
    };

    function validateForm() {
      var isValid = true;
      if ($("#newBurger").val() === "") {
        isValid = false;
        console.log('you need to enter something');
      }
      return isValid;
    }

    if (validateForm()) {
      console.log($('#newBurger').val());

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });

  function playAudio(url) {
    var a = new Audio('assets/sound/bite.mp3');
    a.play();
    setTimeout(function () {
      location.reload();
    }, 200);
  }
  // Put / change burger to eaten
  //  ? delete/eat burger
  $(".eat-burger").on("click", function (event, cb) {
    // console.log(this).data('id');
    console.log($(this))

    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var newDevoured = $(this).data("newdevoured");

    var eaten = {
      devoured: newDevoured
    };

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "Put",
      data: eaten
    }).then(
      function (cb) {

        // Reload the page to get the updated list
        playAudio();


      });

  })
});