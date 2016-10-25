$(document).ready(function(){
    $("#loginin").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
// Checking for blank fields.
        if (username == '' || password == '') {
            if(password == ''){
                $('input[type="password"]').css("border", "2px solid #EEEE00");
                $('input[type="password"]').css("box-shadow", "0 0 3px #EEEE00");

            }
            if(username == '') {
                $('input[type="text"]').css("border", "2px solid #EEEE00");
                $('input[type="text"]').css("box-shadow", "0 0 3px #EEEE00");
               // $("input[name='password']").val("");
            }

        alert("Please fill all fields...!!!!!!");
        }
        else {
            if(username=='admin'&& password=='123')
            {
                alert("Successfully Logged in...");
                location.href="main.html?username="+username;
            }
            else
            {
                alert("The username or password you provided was incorrect, please try again.");
                $("#password").val("");
                $("#username").val("");
                $("#username").focus();

            }
        }
    })
})

