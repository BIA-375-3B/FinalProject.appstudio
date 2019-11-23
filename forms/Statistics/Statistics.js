/*DataTableStandings.initComplete = False
  DataTableGameSchedule.initComplete = False

  var query = "SELECT playerName, gameID, points, rebounds, assists, fouls, blocks, steals FROM player RIGHT JOIN gamestats ON player.netID = gamestats.netID"
 // alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query)
    if (req1.status == 200) { //transit worked.
      results = JSON.parse(req1.responseText)
      console.log(results)
        
// an array of arrays. One array for each row.
  var data1 = results

  var dataJson = JSON.stringify(data1)    // put data in another format - use later

  var columns1 = [               // column headings
            {title: "Player Name"},
            {title: "Game Number"},
            {title: "Points"},
            {title: "Rebounds"},
            {title: "Assists"},
            {title: "Fouls"},
            {title: "Blocks"},
            {title: "Steals"}
        ]
        
  function Main() {     // use this as runs first but waits until everything is loaded
    updateTable()
}

  function updateTable() {    // re-display table
    DataTable1.settings.columns = columns1
    DataTable1.settings.data = data1
    DataTable1.build()
}

  function loadTable() {    // reload table when changed entire table
    var table = $("#DataTable1").DataTable()
  table.rows.add(DataTable1.settings.data).draw()
}

}*/

Statistics.onshow=function(){
  DataTableStatistics.initComplete = False

  DataTableGameSchedule.initComplete = False
DataTableStandings.initComplete = False

var query1 = "SELECT playerName, gameID, points, rebounds, assists, fouls, blocks, steals FROM player RIGHT JOIN gamestats ON player.netID = gamestats.netID"
 // alert(query)
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query1)
    if (req1.status == 200) { //transit worked.
      results1 = JSON.parse(req1.responseText)
      console.log(results1) }
        
// an array of arrays. One array for each row.
var data1 = results1

var columns1 = [               // column headings
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
    DataTableStatistics.settings.columns = columns1
    DataTableStatistics.settings.data = data1
    DataTableStatistics.build()
}

function loadTable() {    // reload table when changed entire table
    var table = $("#DataTableStatistics").DataTable()
    table.rows.add(DataTableStatistics.settings.data).draw()
}
}
