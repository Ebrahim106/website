
var a ;
function pass() {
    if(a =="password")
    {
        a="text";
        document.getElementById("password").type="password";
        document.getElementById("pass-icon").src="../Materials/bx-lock-alt.png";

    }
    else{
        a="password";
        document.getElementById("password").type="text";
        document.getElementById("pass-icon").src="../Materials/bx-unlock-alt.png";

    }

}

            var logo = document.getElementById("logo") ;

            logo.onclick = function(){
                document.body.classList.toggle("white-theme");

            }


