var third = "anthony rendon";

var thirdURL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + third + "'"

$.ajax({
    url: thirdURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var thirdID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("Third", thirdID);
});

var thirdID = localStorage.getItem("Third");
var thirdqueryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + thirdID + "'"
    
$.ajax({
    url: thirdqueryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var thirdRuns = (tb + ibb + bb + sb)/4;
    var display3b = third + " " + thirdRuns;

    var thirddetails = $("<h2>", {
        text: display3b,
    });
    $("#3b").append(thirddetails);
});