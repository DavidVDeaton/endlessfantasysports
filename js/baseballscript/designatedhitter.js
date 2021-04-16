var dh = "nelson cruz";

var dhURL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + dh + "'"

$.ajax({
    url: dhURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var dhID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("dh", dhID);
});

var dhID = localStorage.getItem("dh");
var dhqueryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + dhID + "'"
    
$.ajax({
    url: dhqueryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var dhRuns = (tb + ibb + bb + sb)/4;
    var displayDH = dh + " " + dhRuns;

    var dhdetails = $("<h2>", {
        text: displayDH,
    });
    $("#dh").append(dhdetails);
});