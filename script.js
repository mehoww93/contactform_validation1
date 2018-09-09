function validateTextbox(){
    var box = document.getElementById("name");
    if(box.value.length < 2) {
var errorMessage = document.getElementsByClassName("errormsg");
 errorMessage[0].style.display="block";
        return false;
    }
    
    var box1 = document.getElementById("email");
    if(box1.value.length < 4){
        var errorMessage = document.getElementsByClassName("errormsg");
        errorMessage[1].style.display="block";
        return false;
    }
    var box2 = document.getElementById("subject");
    if(box2.value == ""){
        var errorMessage = document.getElementsByClassName("errormsg");
        errorMessage[2].style.display="block";
        return false;
    }
      var box3 = document.getElementById("message");
    if(box3.value == ""){
        var errorMessage = document.getElementsByClassName("errormsg");
        errorMessage[3].style.display="block";
        return false;
}
var confirm = document.getElementById("checkbox");
         if(confirm.checked==false){
         var errorMessage = document.getElementsByClassName("errormsg");
        errorMessage[4].style.display="block";
        return false;
         }
}