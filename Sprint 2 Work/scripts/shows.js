
// Array for shows section

let showsTable = [
    {
        date: "Mon Dec 17 2018",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: "BUY TICKETS"

    },
    {
        date: "Tue Jul 18 2019",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
  
    },
    {
        date: "Fri Jul 22 2019",
        venue: "View Loungue",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    },
    {
        date: "Sat Aug 12 2019",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    },
    {
        date: "Fri Sep 05 2019",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    },
    {
        date: "Wed Aug 11 2019",
        venue: "Pres Club",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    
    } 
];

function displayShows(listArray) {
    
    let showsContainer = document.querySelector(".shows__main-container");

    for (let i = 0; i < listArray.length; i++) {

        let dateContainer = document.createElement("div");
        showsContainer.appendChild(dateContainer);
        dateContainer.className = "shows__date";

        let dateHeader = document.createElement("h5");
        dateHeader.innerText = "Date";       
        dateContainer.appendChild(dateHeader);  
        dateContainer.className = "shows__date-header";      
        
        let dateText = document.createElement("p");            
        dateContainer.appendChild(dateText);
        dateText.innerHTML = listArray[i]["date"];
        dateText.className = "shows__date-text";

        let venueContainer = document.createElement("div");
        showsContainer.appendChild(venueContainer);
        venueContainer.className = "shows__venue";

        let venueHeader = document.createElement("h5");
        venueHeader.innerText = "Venue";
        venueContainer.appendChild(venueHeader);
        venueHeader.className = "shows__venue-header";

        

        // let buttonContainer = document.createElement("div");
        // showsContainer.appendChild(buttonContainer)
        // buttonContainer.className = "shows__button";

        // let ticketButton = document.createElement("button");
        // ticketButton.innerHTML = listArray[i]["button"];
        // buttonContainer.appendChild(ticketButton);
        
        
        
    }

    
}

displayShows(showsTable);