 
// Array for comments section 

let postedList = [
    {
        name: "Micheal Lyons",
        date: "12/18/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    },
    {
        name: "Gary Wong",
        date: "12/12/2018",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
   },
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    }];

    // Original comments to show

    function displayComment(listArray) {
    
        let commentsContainer = document.querySelector(".comments__posted-list");

        for (let i = 0; i < listArray.length; i++) {

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
            name.innerHTML = listArray[i]["name"];
            name.className = "comments__name";            
                      
            let date = document.createElement("p");            
            commentsSection.appendChild(date);
            date.innerHTML = listArray[i]["date"];
            date.className = "comments__date";

            let textSection = document.createElement("div");
            commentsContainer.appendChild(textSection);
            textSection.className = "comments__text-wrapper";
                      
            let comments = document.createElement("p");            
            textSection.appendChild(comments);
            comments.innerHTML = listArray[i]["comment"];
            comments.className = " comments__text-comment";
        }
    }

displayComment(postedList);

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
    
            
 
   

   
   
    
    

     

    

    

       

       
    