// Function to toggle between theme starts

const theme = document.getElementById("theme");
theme.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList == "dark-theme"){
        document.body.style.backgroundImage = "url('https://i.ibb.co/74RGfC3/background.jpg')";
        //<a href="https://ibb.co/8cdjCsy"><img src="https://i.ibb.co/74RGfC3/background.jpg" alt="background" border="0"></a>
        theme.innerHTML="Light"
    }
    else{
    
    document.body.style.backgroundImage = "url('https://i.ibb.co/hHtDx0Z/light-Back.webp')";
         theme.innerHTML="Dark"
    }
}
//Function to toggle between theme ends.
