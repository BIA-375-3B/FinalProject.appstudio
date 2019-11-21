Statistics.onshow=function(){

DataTableStandings.initComplete = False
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

DataTable1.onclick = function(event) {       // get cell user clicked on
// notice that added 'event' as a parameter so can use it below
  if(typeof(event.target._DT_CellIndex) != "object" ) { 
     return }
  var row,col
  row = event.target._DT_CellIndex.row
  col = event.target._DT_CellIndex.column
  playerPicker = data1[row][col]
  var playerPickerquery = "SELECT teamName, playerName, netID, gradYear, jerseyNumber FROM player RIGHT JOIN team ON player.teamID = team.teamID WHERE playerName = 'playerPicker'"
  // alert(query)
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + playerPickerquery)
  if (req3.status == 200) { //transit worked.
      results3 = JSON.parse(req3.responseText)
      console.log(results3) }
  NSB.MsgBox(results3)
  //NSB.MsgBox("Click on "  +  row  +  ", "  +  col  +  ". Value is '"  +  playerPicker  +  "'.")
  // notice got text from the dataset
}}

DataTable1.initComplete = False

}
