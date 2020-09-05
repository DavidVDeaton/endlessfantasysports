function queryAPI() {

    var week = localStorage.getItem("week");
    console.log(week);

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
    

            var awayBtn = $("<button>", {
                class: "btn btn-secondary btn-sm",
                text: response[i].AwayTeam,
                id: response[i].AwayTeam,
                click: function () {
                    var weekNum = parseInt(week);
                    console.log(weekNum);

                    var weekentry = this.id;

                    var j;
                    for (j=weekNum; j > 0; j--){

                        var prevEntry = localStorage.getItem("week" + j);
                        console.log(prevEntry);
                    
                        if (prevEntry === weekentry) {
                            $("#hidden").removeClass("hidden");
                            $("#newmessage").text("You picked " + weekentry + " in a previous week. Select a different team.");
                            return;
                        }

                        else {
                            $("#hidden").removeClass("hidden");
                            $("#newmessage").text("Are you sure you want to pick " + weekentry + "?");
                            var saveBtn = $("<button>", {
                                class: "btn btn-secondary btn-sm",
                                text: "Save",
                                id: "save",
                                click: function () {
                                    localStorage.setItem("week" + week, weekentry);
                                    $(".centerBtn").addClass("hidden");
                                    $("#gm" + weekentry).addClass("orange");
                                    $("#hidden").addClass("hidden");
                                    var editBtn = $("<button>", {
                                        class: "btn btn-secondary btn-sm",
                                        text: "Edit",
                                        id: "edit",
                                        click: function () {
                                            localStorage.removeItem("week" + week, weekentry);
                                            $(".centerBtn").removeClass("hidden");
                                            $("#gm" + weekentry).removeClass("orange");
                                            $("#edit").remove();
                                        }
                                    });
                                    $("#gm" + weekentry).append(editBtn);
                                }
                            });

                            var cancelBtn = $("<button>", {
                                class: "btn btn-secondary btn-sm",
                                text: "Cancel",
                                id: "cancel",
                                click: function () {
                                    $("#hidden").addClass("hidden");
                                }
                            });

                            $("#newmessage").append(saveBtn);
                            $("#newmessage").append(cancelBtn);
                        }
                    }  
                }
            });
    
            var homeBtn = $("<button>", {
                class: "btn btn-primary btn-sm",
                text: response[i].HomeTeam,
                id: response[i].HomeTeam,
                click: function () {
                    var weekNum = parseInt(week);
                    console.log(weekNum);

                    var weekentry = this.id;

                    var j;
                    for (j=weekNum; j > 0; j--){

                        var prevEntry = localStorage.getItem("week" + j);
                        console.log(prevEntry);
                    
                        if (prevEntry === weekentry) {
                            $("#hidden").removeClass("hidden");
                            $("#newmessage").text("You picked " + weekentry + " in a previous week. Select a different team.");
                            return;
                        }

                        else {
                            $("#hidden").removeClass("hidden");
                            $("#newmessage").text("Are you sure you want to pick " + weekentry + "?");
                            var saveBtn = $("<button>", {
                                class: "btn btn-secondary btn-sm",
                                text: "Save",
                                id: "save",
                                click: function () {
                                    localStorage.setItem("week" + week, weekentry);
                                    $(".centerBtn").addClass("hidden");
                                    $("#gm" + weekentry).addClass("orange");
                                    $("#hidden").addClass("hidden");
                                    var editBtn = $("<button>", {
                                        class: "btn btn-secondary btn-sm",
                                        text: "Edit",
                                        id: "edit",
                                        click: function () {
                                            localStorage.removeItem("week" + week, weekentry);
                                            $(".centerBtn").removeClass("hidden");
                                            $("#gm" + weekentry).removeClass("orange");
                                            $("#edit").remove();
                                        }
                                    });
                                    $("#gm" + weekentry).append(editBtn);
                                }
                            });

                            var cancelBtn = $("<button>", {
                                class: "btn btn-secondary btn-sm",
                                text: "Cancel",
                                id: "cancel",
                                click: function () {
                                    $("#hidden").addClass("hidden");
                                }
                            });

                            $("#newmessage").append(saveBtn);
                            $("#newmessage").append(cancelBtn);
                        }
                    }  
                }
            });
            
            $("#btnRow" +i).append(awayBtn);
            $("#btnRow" +i).append(homeBtn);
    
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
        }
    });
    
}