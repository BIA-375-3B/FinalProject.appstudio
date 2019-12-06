function Main() {
    // Main is run first once all code is loaded into the browser
    // set up DataTableGameSchedule first    
    // then set up DataTableStatistics
    
    var query3 = "SELECT team.teamName, team.division, location, CONCAT(gameDate,' ',gameTime) as `Date and Time`, refereeName, result FROM game RIGHT JOIN team on game.gameTeamID = team.teamID RIGHT JOIN referee on game.refereeID = referee.refereeID RIGHT JOIN court on game.courtID = court.courtID WHERE result IS NULL"
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query3)
    if (req3.status == 200) { //transit worked.
      results3 = JSON.parse(req3.responseText)
      // console.log(results3)
        
      // results are an array of arrays. One array for each row.
      var data3 = results3

      // var dataJson = JSON.stringify(data3)    // put data in another format - use later

      var columns3 = [               // column headings
              {title: "Team Name"},
              {title: "Division"},
              {title: "Location"},
              {title: "Date and Time"},
              {title: "Referee"},
              {title: "Result"}
              ]
      //updateTable()
      DataTableGameSchedule.settings.columns = columns3
      DataTableGameSchedule.settings.data = data3
      DataTableGameSchedule.build()
    }  // end if
  
  
 // now set up Statistics datatable
      var query = "SELECT playerName, gameID, points, rebounds, assists, fouls, blocks, steals FROM player RIGHT JOIN gamestats ON player.netID = gamestats.netID"
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query)
      if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        // console.log(results)
        
        // an array of arrays. One array for each row.
        var data1 = results

        //var dataJson = JSON.stringify(data1)    // put data in another format - use later

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
        //updateTable(columns1,data1)
        DataTableStatistics.settings.columns = columns1
        DataTableStatistics.settings.data = data1
        DataTableStatistics.build()
      }  // end if
      
      var query2 = "SELECT teamName, COUNT(IF(result = 'W', 1, NULL)) as Wins, COUNT(IF(result = 'L', 1, NULL)) as Losses, SUM(points) as PointsScored FROM game RIGHT JOIN team ON team.teamID = game.gameTeamID GROUP BY gameTeamID ORDER BY Wins DESC"
 // alert(query)
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + query2)
      if (req2.status == 200) { //transit worked.
        results2 = JSON.parse(req2.responseText)
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
  DataTableStandings.settings.columns = columns2
  DataTableStandings.settings.data = data2
  DataTableStandings.build()
}
      
  
}

// reload/redraw a table when change entire table and want to reload it
// Don't call this function, but use the code in your own 
// function on the form using the appropriate control. 
function reloadTable() {
    var table = $("DataTableStatistics").DataTable()
    table.rows.add(DataTableStatistics.settings.data).draw()
}

function loadTable() {    // reload table when changed entire table
    var table = $("#DataTableStandings").DataTable()
    table.rows.add(DataTableStandings.settings.data).draw()
}

btnStats.onclick=function(){
  ChangeForm(Statistics)
}

btnSchedule.onclick=function(){
  ChangeForm(GameSchedule)
}

btnStandings.onclick=function(){
  ChangeForm(Standings)
}

btnTeamRosters.onclick=function(){
  ChangeForm(Rosters)
}

btnLiveStream.onclick=function(){
  ChangeForm(Livestream)
}

btnSignOut.onclick=function(){
  ChangeForm(Login)
}
