
$(document).ready(function() {

  //on click
	$('#submit').click(function(){

		var userInput = $("#new-item").val();
	   console.log("User inputted..." , userInput);

    if (!userInput) {
       $('.error').text('Please enter a value!').show();
        }
    else  {
         $('.list-items').append("<li>" + userInput+"<i class=\"fa fa-check-square-o\"></i>" +"<i class='fa fa-trash fa-4'></i>"+"</li>");
    }

		  $('#new-item').val("");

   });
  //end on click

  //remove list item on click of trash icon
    $(".list-items").on("click", ".fa-trash", function() {
      $(this).closest("li").remove();
      console.log("Removing item", $(this).closest("li"));
    });

    $(".list-items").on("click", ".fa-check-square-o", function() {

          $(this).toggleClass("fa-check-square");
          console.log("Changing class for item ... ");
    });
  //remove error message on focusing the input
  $("#new-item").val('').focus(function() { $('.error').hide();});


});
