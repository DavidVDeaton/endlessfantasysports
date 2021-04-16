$(window).on("load", function() {

    updateWeek();

    var week = localStorage.getItem("week");
    console.log(week);

    var selection = "week" + week;
    console.log(selection);
    
    $("#weekNo").text("Week " + week);

    if (localStorage.getItem(selection) != null) {
        selectedTeams();
        console.log("load-selectedTeams");
        
    }

    else {
        queryAPI();
        console.log("load-queryAPI");

    }

});

$(".message a").click(function() {
    $("form").animate({height: "toggle", opacity: "toggle"},)
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

    localStorage.setItem("week", week);
    $("#weekNo").text("Week " + week);



    if (localStorage.getItem("week" + week) != null) {        
        selectedTeams();
        console.log("click-selectedTeams");
    }

    else {
        queryAPI();
        console.log("click-queryAPI");
    }

});

