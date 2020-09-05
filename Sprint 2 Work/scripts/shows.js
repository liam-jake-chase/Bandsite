
// Array for shows section

let showsTable = [
    {
        date: "Mon Dec 17 2018",
        venue: "Ronald Lane",
        location: "San Francisco, CA"

    },
    {
        date: "Tue Jul 18 2019",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
  
    },
    {
        date: "Fri Jul 22 2019",
        venue: "View Loungue",
        location: "San Francisco, CA"
    
    },
    {
        date: "Sat Aug 12 2019",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    
    },
    {
        date: "Fri Sep 05 2019",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    
    },
    {
        date: "Wed Aug 11 2019",
        venue: "Pres Club",
        location: "San Francisco, CA"
    
    } 
];

function displayShows(listArray) {
    
    let showsContainer = document.querySelector(".shows__main-container");

    for (let i = 0; i < listArray.length; i++) {

        let dateHeader = document.querySelector(".shows__date-header"); 
        dateHeader.innerText = "Date";       
        showsContainer.appendChild(dateHeader);        
        
        let dateText = document.querySelector(".shows__date-text");            
        showsContainer.appendChild(dateText);
        dateText.innerHTML = listArray[i]["date"];

        let venueHeader = document.querySelector(".shows__venue-header"); 
        venueHeader.innerText = "Venue";       
        showsContainer.appendChild(venueHeader);        
        
        let venueText = document.querySelector(".shows__venue-text");            
        showsContainer.appendChild(venueText);
        venueText.innerHTML = listArray[i]["venue"];

        let locationHeader = document.querySelector(".shows__location-header");
        locationHeader.innerText = "Location";
        showsContainer.appendChild(locationHeader);
        
        let locationText = document.querySelector(".shows__location-text");
        showsContainer.appendChild(locationText);
        locationText.innerHTML = listArray[i]["location"];
  
    }

    let buttonDiv = document.querySelector(".shows__button");
    let ticketButton = document.createElement("button");
    let buttonText = document.createTextNode("BUY TICKETS");
    ticketButton.appendChild(buttonText);
    buttonDiv.appendChild(ticketButton);
}

displayShows(showsTable);