$(window).on("load", function() {

    updateWeek();

    var week = localStorage.getItem("week");
    console.log(week);
    
    $("#weekNo").text("Week " + week);
    
    queryAPI();

});

$(".selectWeek").on("click", function() {

    $(".card").remove();

    var entry = this.id;
    console.log(entry);

    if (entry[4] === "0") {
        var week = entry[5];
    }

    else {
        var week = entry[4]+entry[5];
    }

    console.log(week);

    localStorage.setItem("week", week);
    $("#weekNo").text("Week " + week);

    queryAPI();

});

// function disableBtn() {

//     // var i;
//     // for (i=1; i<18; i++){

//         var teamSelect = localStorage.getItem("week1");
//         $("#DET").attr(disabled);
//         console.log(teamSelect);
//     //}
// }

// disableBtn();

