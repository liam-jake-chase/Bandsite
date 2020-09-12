 
// API Key variable

const APIkey = "2ba0a00c-8dbc-4e0f-a231-e06793c9594d";


let getResponse = () => {
    axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=" + APIkey)
    .then( response => {
        console.log(response)
         displayComment(response.data)
    });

}
getResponse();

// Array for comments section 
    // Original comments to show

    function displayComment(listArray) {
    
        let commentsContainer = document.querySelector(".comments__posted-list");

            listArray.forEach(listArray => {
        
            let commentsSection = document.createElement("div");
            commentsContainer.appendChild(commentsSection);
            commentsSection.className = "comments__section";

            let circleSection = document.createElement("div");
            commentsSection.appendChild(circleSection);
            circleSection.className ="comments__circle-section";

            let nameSection = document.createElement("div");
            commentsSection.appendChild(nameSection);
            nameSection.className = "comments__name-section";

            let circle = document.createElement("div");
            commentsSection.appendChild(circle);
            circle.className = "comments__circle";

            let name = document.createElement("h4")
            commentsSection.appendChild(name);
            name.innerHTML = listArray.name;
            name.className = "comments__name";   
            
            let arrayDate = new Date(listArray.timestamp);
            let properDate = arrayDate
            .getUTCMonth() + 1 + "/" + 
            arrayDate.getUTCDate() + "/" + 
            arrayDate.getUTCFullYear();
                      
            let date = document.createElement("p");            
            commentsSection.appendChild(date);
            date.innerHTML = properDate;
            date.className = "comments__date";

            let textSection = document.createElement("div");
            commentsContainer.appendChild(textSection);
            textSection.className = "comments__text-wrapper";
                      
            let comments = document.createElement("p");            
            textSection.appendChild(comments);
            comments.innerHTML = listArray.comment;
            comments.className = " comments__text-comment";
        })
    }



// Inserting a new comment function

     // // Button listener

     const form = document.querySelector(".comments__form");
     
     form.addEventListener("submit", function insertComment(event) {
         event.preventDefault();
         
         let commentsContainer = document.querySelector(".comments__posted-list");

            const newComment = [];
            newComment.name = event.target.name.value;
            newComment.comment = event.target.comment.value;
              
            let commentsSection = document.createElement("div");
            commentsContainer.appendChild(commentsSection);
            commentsSection.className = "comments__section";

            let circleSection = document.createElement("div");
            commentsSection.appendChild(circleSection);
            circleSection.className ="comments__circle-section";

            let nameSection = document.createElement("div");
            commentsSection.appendChild(nameSection);
            nameSection.className = "comments__name-section";

            let circle = document.createElement("div");
            commentsSection.appendChild(circle);
            circle.className = "comments__circle";

            let name = document.createElement("h4")
            commentsSection.appendChild(name);
            name.innerHTML = newComment.name;
            name.className = "comments__name";  
            
            // Pulling todays date 
            function formatDate() {
            let d = new Date(), 
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
            if (month.length < 2) 
            month = '0' + month;
            if (day.length < 2) 
            day = '0' + day;
    
            return [month, day, year].join('/');    }

            const dateToday = formatDate(new Date());
                      
            let newDate = document.createElement("p");            
            commentsSection.appendChild(newDate);
            newDate.innerHTML = dateToday;
            newDate.className = "comments__date";

            let textSection = document.createElement("div");
            commentsContainer.appendChild(textSection);
            textSection.className = "comments__text-wrapper";
                      
            let comments = document.createElement("p");            
            textSection.appendChild(comments);
            comments.innerHTML = newComment.comment;
            comments.className = "comments__text-comment";

            document.querySelector(".comments__form").reset();
            
        });
    
            
 
   

   
   
    
    

     

    

    

       

       
