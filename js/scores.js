var yesterday = moment().subtract(1, "days").format("YYYY-MMM-DD");
var today = moment().format("YYYY-MMM-DD");
var day1 = moment(). add(1, "days").format("YYYY-MMM-DD");

console.log(yesterday);
console.log(today);
console.log(day1)

var queryURL = "https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/" + today + "?key=8cfb2b8d574a4f7592379d67ca2b7b54"

$.ajax({
url: queryURL,
method: "GET"
})

.then(function (response) {
console.log(response.length);
console.log(response);
console.log(response[6].DateTime[15]);
console.log(response[6].DateTime[11]);

var i;
for (i=4; i<response.length; i++) {

var game = $("<div>");
$(game).addClass("col-md-2 scores");
$(game).attr("id", "gm" + i);
$("#todayGames").append(game);

var status = $("<p>");
$(status).attr("id", "gmStat" + i);
var gameAway = $("<p>");
$(gameAway).attr("id", "gmA" + i);
var gameHome = $("<p>");
$(gameHome).attr("id", "gmH" + i);

$("#gm" +i).append(status);
$("#gm" +i).append(gameAway);
$("#gm" +i).append(gameHome);

if (response[i].Status === "Final")
$("#gmStat" + i).text(response[i].Status);

else if (response[i].Status === "Live")
$("#gmStat" + i).text(response[i].Quarter);

else if (response[i].Status === "Scheduled") {
var startHour = response[i].DateTime[11] +  response[i].DateTime[12];

if (startHour > 11) {
  startHour = startHour - 12;
}
console.log(startHour);
$("#gmStat" + i).text(startHour + ":" + response[i].DateTime[14] + response[i].DateTime[15] + " ET");
}

if (response[i].AwayTeamScore === null) {
$("#gmA" +i).text(response[i].AwayTeam + " 0");
$("#gmH" +i).text(response[i].HomeTeam + " 0");
}

else {
$("#gmA" +i).text(response[i].AwayTeam + " " + response[i].AwayTeamScore);
$("#gmH" +i).text(response[i].HomeTeam + " " + response[i].HomeTeamScore);
}
}
});