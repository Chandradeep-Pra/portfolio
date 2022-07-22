// Function to toggle between theme starts

const theme = document.getElementById("theme");
theme.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList == "dark-theme"){
        document.body.style.backgroundImage = "url('assests/background.jpg')";
        theme.innerHTML="Light"
    }
    else{
    
    document.body.style.backgroundImage = "url('assests/lightBack.jpg')";
    }
}
//Function to toggle between theme ends.
