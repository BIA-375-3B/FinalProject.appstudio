DataTable1.initComplete = False
DataTableStandings.initComplete = False

var query = "SELECT team.teamName, team.division, location, CONCAT(gameDate,' ',gameTime) as `Date and Time`, refereeName, result FROM game RIGHT JOIN team on game.gameTeamID = team.teamID RIGHT JOIN referee on game.refereeID = referee.refereeID RIGHT JOIN court on game.courtID = court.courtID WHERE result IS NULL;"
 // alert(query)
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query)
    if (req1.status == 200) { //transit worked.
      results = JSON.parse(req1.responseText)
      console.log(results)
        
// an array of arrays. One array for each row.
var data3 = results

var dataJson = JSON.stringify(data3)    // put data in another format - use later

var columns3 = [               // column headings
              {title: "Team Name"},
              {title: "Division"},
              {title: "Location"},
              {title: "Date and Time"},
              {title: "Referee"},
              {title: "Result"}
        ]
        
function Main() {     // use this as runs first but waits until everything is loaded
  updateTable()
}

function updateTable() {    // re-display table
    DataTableGameSchedule.settings.columns = columns3
    DataTableGameSchedule.settings.data = data3
    DataTableGameSchedule.build()
}

function loadTable() {    // reload table when changed entire table
    var table = $("#DataTableGameSchedule").DataTable()
    table.rows.add(DataTableGameSchedule.settings.data).draw()
}


DataTableGameSchedule.initComplete = False
}}