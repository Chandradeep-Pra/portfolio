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

//smooth scrolling to section
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const navbarLinks = document.querySelectorAll('nav ul li a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor link behavior
      const targetId = this.getAttribute('href'); // Get the target ID
      smoothScrollTo(targetId); // Call the smooth scrolling function
    });
  });

// Nvabr background blur
const navbar = document.querySelector('nav');
const blurThreshold = 50; // Adjust the scroll position for blur effect (in pixels)

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const blurAmount = Math.min(10, scrollPosition / 5); // Adjust formula for desired blur intensity
  const blurValue = `blur(${blurAmount}px)`; // Set blur value based on scroll

  if (scrollPosition >= blurThreshold) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // Apply a slight background color on blur
    navbar.style.backdropFilter = blurValue; // Apply blur
  } else {
    navbar.style.backgroundColor = 'transparent'; // Reset to transparent on scroll up
    navbar.style.backdropFilter = 'none'; // Remove blur
  }
});

// Send a hi button
const emailButton = document.getElementById('emailButton');
const emailAddress = 'chandradeepp611@gmail.com';
emailButton.addEventListener('click', function() {
    window.location.href = `mailto:${emailAddress}`;
  });

  
