var cRuns = localStorage.getItem("C");
console.log(cRuns);
var firstRuns = localStorage.getItem("1B");
console.log(firstRuns);

var tmRuns = (parseInt(cRuns) + parseInt(firstRuns))/4; 
// + parseInt(firstRuns)

$("#teamRuns").text(tmRuns);