 // API Key and URL variable

const APIkey = "2ba0a00c-8dbc-4e0f-a231-e06793c9594d";
const APIurl = "https://project-1-api.herokuapp.com/showdates?api_key=";

// Get shows function
let getShows = () => {
    axios
        .get(APIurl + APIkey)
        .then(response => {
            console.log(response)
            displayShows(response.data) 
            displayShowsLarge(response.data)         
        })
                   

};
getShows();



    // Grabbing all data from the objects for the shows tickets section
    const showsContainer = document.querySelector(".shows__main-container");

    function displayShows(listArray) {
        
        listArray.forEach(listArray => {
         
         let arrayDate = new Date(parseInt(listArray.date));
         let properDate = arrayDate
             .getUTCMonth() + 1 + "/" +
             arrayDate.getUTCDate() + "/" +
             arrayDate.getUTCFullYear();  

        const dateContainer = document.createElement("div");
        showsContainer.appendChild(dateContainer);
        dateContainer.className = "shows__date";
        
        const dateHeader = document.createElement("h5");
        dateHeader.innerText = "DATE";       
        dateContainer.appendChild(dateHeader);  
        dateContainer.className = "shows__date-header";      
        
        const dateText = document.createElement("p");            
        dateContainer.appendChild(dateText);
        dateText.innerText = properDate;
        dateText.className = "shows__date-text";

        const venueContainer = document.createElement("div");
        showsContainer.appendChild(venueContainer);
        venueContainer.className = "shows__venue";

        const venueHeader = document.createElement("h5");
        venueHeader.innerText = "VENUE";
        venueContainer.appendChild(venueHeader);
        venueHeader.className = "shows__venue-header";

        const venueText = document.createElement("p"); 
        venueText.innerText = listArray.place;           
        venueContainer.appendChild(venueText);       
        venueText.className = "shows__venue-text";

        const locationContainer = document.createElement("div");
        showsContainer.appendChild(locationContainer);
        locationContainer.className = "shows__location";

        const locationHeader = document.createElement("h5");
        locationHeader.innerText = "LOCATION";
        locationContainer.appendChild(locationHeader);
        locationHeader.className = "shows__location-header";

        const locationText = document.createElement("p");
        locationContainer.appendChild(locationText);
        locationText.innerText = listArray.location;
        locationText.className = "shows__location-text";

        let ticketButton = document.createElement("button");
        ticketButton.innerText = "BUY TICKETS";
        showsContainer.appendChild(ticketButton);
        ticketButton.className = "shows__button";

        let breakLine = document.createElement("div");
        showsContainer.appendChild(breakLine);
        breakLine.className = "shows__breakline";
        
        
        
    })

    
};



        const showsContainerLarge = document.querySelector(".shows__main-container-large");

        const headerContainer = document.createElement("div");
        showsContainerLarge.appendChild(headerContainer);
        headerContainer.className = "shows__header-container"; 
        
        const sectionContainer = document.createElement("div");
        showsContainerLarge.appendChild(sectionContainer);
        sectionContainer.className = "shows__section-container"; 

        const dateHeader = document.createElement("h5");
        dateHeader.innerText = "DATES";       
        headerContainer.appendChild(dateHeader);  
        dateHeader.className = "shows__date-header-large";  

        const venueHeader = document.createElement("h5");
        venueHeader.innerText = "VENUE";
        headerContainer.appendChild(venueHeader);
        venueHeader.className = "shows__venue-header-large";

        const locationHeader = document.createElement("h5");
        locationHeader.innerText = "LOCATION";
        headerContainer.appendChild(locationHeader);
        locationHeader.className = "shows__location-header-large";        

        function displayShowsLarge(listArray) {
        
            listArray.forEach(listArray =>  {

            const infoContainer = document.createElement("div");
            sectionContainer.appendChild(infoContainer);
            infoContainer.className = "shows__info-container";
             
            let arrayDate = new Date(parseInt(listArray.date));
            let properDate = arrayDate
             .getUTCMonth() + 1 + "/" +
             arrayDate.getUTCDate() + "/" +
             arrayDate.getUTCFullYear();   

            const dateText = document.createElement("p");            
            infoContainer.appendChild(dateText);
            dateText.innerText = properDate;
            dateText.className = "shows__date-text";

            const venueText = document.createElement("p"); 
            venueText.innerText = listArray.place;           
            infoContainer.appendChild(venueText);       
            venueText.className = "shows__venue-text";

            const locationText = document.createElement("p");
            infoContainer.appendChild(locationText);
            locationText.innerText = listArray.location;
            locationText.className = "shows__location-text";

            let ticketButton = document.createElement("button");
            ticketButton.innerText = "BUY TICKETS";
            infoContainer.appendChild(ticketButton);
            ticketButton.className = "shows__button";

            
        })

    }; 

