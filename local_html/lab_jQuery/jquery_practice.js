$("document").ready(() => {
    // Your code goes here
    /**
     * Note: () => {} is just shorthand for function(){}
     */

    // Grab button 1 by id 
    $("#button1").click(() => {
        console.log("Part 1 center");
        // add the center-header class to #part1 (the h3 tag)
        $("#part1").addClass("center-header");
    });

    // Grab button 2 by id and on click and hide the image
    $("#button2").click(() => {
        $("#image").hide();
    });

    // Grab button 3 by id and on click reveal the image
    $("#button3").click(() => {
        $("#image").show();
    });

    // Grab button 4 by id and on click slide the part2 div open
    $("#button4").click(() => {
        $("#part2").slideDown();
    });

    // Grab button 5 by id and on click slide the part2 div shut
    $("#button5").click(() => {
        $("#part2").slideUp();
    });

    // Grab button 6 by id and on click slideToggle the #image
    $("#button6").click(() => {
        $("#image").slideToggle();
    });
});