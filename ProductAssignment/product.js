$("document").ready(() => {
  $("#peppermint").click(() => {
    let filename = "peppermint.html";
    console.log(filename);
    $("#product-container").load(filename);
  });

  $("#pumpkin-chip").click(() => {
    let filename = "pumpkin-chip.html";
    console.log(filename);
    $("#product-container").load(filename);
  });

  $("#samoa").click(() => {
    let filename = "samoa.html";
    console.log(filename);
    $("#product-container").load(filename);
  });
  
  $("#smores").click(() => {
    let filename = "smores.html";
    console.log(filename);
    $("#product-container").load(filename);
  });
  
  $("#tiramisu").click(() => {
    let filename = "tiramisu.html";
    console.log(filename);
    $("#product-container").load(filename);
  });

});
