$("#get-dish").on("click", function() {
  $.get("/dish", function(dishes) {
    alert(dishes["app"]);
  });
});
