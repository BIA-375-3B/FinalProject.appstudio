rdoTeamSelect.onchange=function(){
  let teamIDSearch = rdoTeamSelect.value + 1
  let queryPlayerListing = "SELECT playerName FROM player RIGHT JOIN team ON team.teamID = player.teamID WHERE team.teamID =  " + '"' + teamIDSearch + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=375groupb3&query=" + queryPlayerListing)
  if (req1.status == 200) { 
      playerListing = JSON.parse(req1.responseText)
      console.log(playerListing)
      lblPlayerListing.value = playerListing + "\n"
}
}
btnHome1.onclick=function(){
  ChangeForm(HomePage)
}