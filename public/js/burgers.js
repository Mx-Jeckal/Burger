$(function() {

    $(".change-devoured-state").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        console.log(id, devoured);

        var newDevouredState = {
            devoured: devoured
        };

        // SEND THE PUT REQUEST
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then(
            function() {
                console.log(`CHANGED DEVOURED TO: ${newDevouredState}`);
                // RELOAD THE PAGE TO GET THE UPDATED LIST FROM DB
                location.reload();
            }
        );
    });



    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: 0
        };
        if (newBurger.burger_name === "" || newBurger.burger_name === " ") {
            $('.add-burger')[0].reset();
            return console.log(`ERROR: PLEASE ADD A VALID NAME`)
        }
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})