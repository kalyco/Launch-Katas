$("#get-dish").on("click", function(event) {
  event.preventDefault();
  $.get("/new-recipe.json", function(dishes) {
    alert(dishes["recipe"]);
  });
});
