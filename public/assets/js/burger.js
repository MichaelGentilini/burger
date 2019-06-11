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


  // Put / change burger to eaten
  //  ? delete/eat burger
  $(".eat-burger").on("click", function (event) {
    // console.log(this).data('id');
    console.log($(this))

    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var newDevoured = $(this).data("newdevoured");

    var eaten = {
      devoured: newDevoured
    };
    var $button = $(this);

    console.log($button)
    console.log("devoured was set to " + devoured);
    console.log("devoured is now set to " + newDevoured);

    if ($(this).data("devoured")) {
      var $button = $(this);
      // console.log($button)

      console.log('this has been changed');

      // $(this).parent().remove();
    }
    // console.log('eating a burger with id of ' + id);
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "Put",
      data: eaten
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        // location.reload();
        $button.removeClass("btn-success").addClass('btn-danger');
      }
    );
    $button.removeClass("btn btn-sm btn-success eat-burger").addClass('btn btn-danger');

  })
});