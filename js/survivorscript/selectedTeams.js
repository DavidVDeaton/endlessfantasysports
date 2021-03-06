function selectedTeams () {

    var week = localStorage.getItem("week");
    console.log(week);
    var pickedTeam = localStorage.getItem("week" + week);
    console.log(pickedTeam);
    var checkTeam = "gm" + pickedTeam;
    console.log(checkTeam);

    var editBtn = $("<button>", {
        class: "btn btn-secondary",
        text: "Edit Pick",
        id: "edit",
        click: function () {
            localStorage.removeItem("week" + week, pickedTeam);
            $("#gm" + pickedTeam).removeClass("orange");
            $("#edit").remove();
        }
    });

    $("#weekNo").append(editBtn);

    var queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2020/" + week + "?key=3efa69063c844191a2ddeba7e1356b50"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        
    .then(function (response) {
        console.log(response.length);
        console.log(response);
    
        var i;
        for (i=0; i<response.length; i++) {
    
            var game = $("<div>");
            $(game).addClass("card col-md-3 scores");
            $(game).attr("id", "gm" + i);
            $("#weekGames").append(game);
    
            var status = $("<p>");
            $(status).attr("id", "gmStat" + i);
            var gameAway = $("<p>");
            $(gameAway).attr("id", "gm" + response[i].AwayTeam);
            var gameHome = $("<p>");
            $(gameHome).attr("id", "gm" + response[i].HomeTeam);
            var buttonRow = $("<p>");
            $(buttonRow).addClass("centerBtn");
            $(buttonRow).attr("id", "btnRow" + i);
    
            $("#gm" +i).append(status);
            $("#gm" +i).append(gameAway);
            $("#gm" +i).append(gameHome);
            $("#gm" +i).append(buttonRow);
    
            if (response[i].Status === "Final") {
                $("#gmStat" + i).text(response[i].Status);
                $("#btnRow" +i).remove();   
            }

            else if (response[i].Status === "InProgress") {
                $("#gmStat" + i).text("QTR " + response[i].Quarter + " " + response[i].TimeRemainingMinutes + ":" + response[i].TimeRemainingSeconds);
                $("#btnRow" +i).remove();
            }

            else if (response[i].Status === "Scheduled") {
                var startHour = response[i].DateTime[11] +  response[i].DateTime[12];
            
                if (startHour > 11) {
                    startHour = startHour - 12;
                }

                $("#gmStat" + i).text(response[i].Date[5] + response[i].Date[6] + "/" + response[i].Date[8] + response[i].Date[9] + " " + startHour + ":" + response[i].DateTime[14] + response[i].DateTime[15] + " PM ET");
                var line = $("<p>");
                $(line).attr("id", "gmL" + i);
                $("#gm" +i).append(line);
                $("#gmL" +i).text("Line: " + response[i].HomeTeam + " " + response[i].PointSpread);
            }

            if (response[i].AwayScore === null) {
            $("#gm" + response[i].AwayTeam).text("Away: " + response[i].AwayTeam + " 0");
            $("#gm" + response[i].HomeTeam).text("Home: " + response[i].HomeTeam + " 0");
            }

            else {
            $("#gm" + response[i].AwayTeam).text(response[i].AwayTeam + " " + response[i].AwayScore);
            $("#gm" + response[i].HomeTeam).text(response[i].HomeTeam + " " + response[i].HomeScore);
            }

            if (response[i].AwayTeam === pickedTeam) {
                $("#gm" + response[i].AwayTeam).addClass("orange");
            }

            else if (response[i].HomeTeam === pickedTeam) {
                $("#gm" + response[i].HomeTeam).addClass("orange");
            }
        } 
    });
}