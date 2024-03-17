function updateTime() {
    const date = new Date();
    const hours = date.getHours();  // Get hours in 24-hour format
    const isAM = hours < 12; // Check if it's AM or PM
    const displayHours = isAM ? (hours === 0 ? 12 : hours) : hours - 12; // Adjust for AM/PM display
  
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    // Month formatting
    const month = date.getMonth(); // Get month index (0-11)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[month];
  
    const year = date.getFullYear();
    const amPm = isAM ? 'AM' : 'PM';
  
    const clockTitleH1 = document.querySelector('.clock-title h1');
    clockTitleH1.textContent = `${displayHours} : `;
  
    const minutesSpan = document.createElement('span');
    minutesSpan.textContent = minutes;
    clockTitleH1.appendChild(minutesSpan);
  
    document.querySelector('.clock-title h4').textContent = `${day}-${monthName}-${year}`;
    document.querySelector('.clock-title h1').insertAdjacentHTML('beforeend', ` <span>${amPm}</span>`);
  }
  
  
  updateTime();
  setInterval(updateTime, 1000);
  