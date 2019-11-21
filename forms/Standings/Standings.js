Standings.onshow=function(){

  DataTable1.initComplete = False
  DataTableGameSchedule.initComplete = False

  var query2 = "SELECT teamName, COUNT(IF(result = 'W', 1, NULL)) as Wins, COUNT(IF(result = 'L', 1, NULL)) as Losses, SUM(points) as Points FROM game RIGHT JOIN team ON team.teamID = game.gameTeamID GROUP BY gameTeamID ORDER BY Wins DESC;"
 // alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query2)
      if (req1.status == 200) { //transit worked.
      results2 = JSON.parse(req1.responseText)
      console.log(results2) 
      
// an array of arrays. One array for each row.
 var data2 = results2

  var dataJson2 = JSON.stringify(data2)    // put data in another format - use later

  var columns2 = [               // column headings
            {title: "Team Name"},
            {title: "Wins"},
            {title: "Losses"},
            {title: "Points"}
        ]
        
  function Main() {     // use this as runs first but waits until everything is loaded
  updateTable()
}

  function updateTable() {    // re-display table
  DataTableStandings.settings.columns = columns2
  DataTableStandings.settings.data = data2
  DataTableStandings.build()
}

}