// ? validate and retrieve the new burger name

$(function () {
  $('#submitBurger').on('click', function (e) {
    e.preventDefault()
    var newBurger = {
      newBurger: $('#newBurger').val().trim(),
      devoured: false
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


  //  ? delete/eat burger
  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })
});