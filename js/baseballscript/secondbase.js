var second = "dj lemahieu";

var secondURL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + second + "'"

$.ajax({
    url: secondURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var secondID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("Second", secondID);
});

var secondID = localStorage.getItem("Second");
var secondqueryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + secondID + "'"
    
$.ajax({
    url: secondqueryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var secondRuns = (tb + ibb + bb + sb)/4;
    var display2b = second + " " + secondRuns;

    var seconddetails = $("<h2>", {
        text: display2b,
    });
    $("#2b").append(seconddetails);
});