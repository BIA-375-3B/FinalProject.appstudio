 req1 = ""

btnLogin.onclick=function(){
  req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) {
      NSB.MsgBox("Login Successful!")
      ChangeForm(HomePage)
    } else {
        NSB.MsgBox("Unable to Login.")
}
}














