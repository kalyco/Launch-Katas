$("#get-dish").on("click", function(event) {
  event.preventDefault();
  debugger;
  $.get("/new-recipe.json", function(dishes) {
    alert(dishes["recipe"]);
  });
});
