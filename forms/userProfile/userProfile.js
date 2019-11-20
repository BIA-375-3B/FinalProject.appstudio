

userProfile.onshow=function(){
  let netID = inptNetID.value
  let query = "SELECT * FROM gameStats WHERE netID = " + '"' + netID + '"'  

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)

    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)
        
    if (results.length == 0)
        NSB.MsgBox("No students with that net id.")
        
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        lblStats.value = message
      } 
    } else
      
        NSB.MsgBox("Error code: " + req1.status)

}




