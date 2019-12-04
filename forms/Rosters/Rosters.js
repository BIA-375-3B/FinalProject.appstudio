rdoTeamSelect.onchange=function(){
  let teamIDSearch = rdoTeamSelect.value + 1
  let queryPlayerListing = "SELECT playerName, gradYear, playerPhone, jerseyNumber FROM player RIGHT JOIN team ON team.teamID = player.teamID WHERE team.teamID =  " + '"' + teamIDSearch + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + queryPlayerListing)
  if (req1.status == 200) { 
      playerListing = JSON.parse(req1.responseText)
      console.log(playerListing)
      var message = ""
      for (i = 0; i <= playerListing.length - 1; i++)
        message = message + playerListing[i][0] + " | " + playerListing[i][1] + " | " + playerListing[i][2] + " | " + playerListing[i][3] + "\n"
      txtPlayerListing.value = message
}
}
btnHome1.onclick=function(){
  ChangeForm(HomePage)
}