 // API Key and URL variable

 const apiKey = "2ba0a00c-8dbc-4e0f-a231-e06793c9594d";
 const apiURL = "https://project-1-api.herokuapp.com/comments?api_key=";
 

 // Insert comment function
 const form = document.querySelector(".comments__form");

 form.addEventListener("submit", function insertComment(event) {
     event.preventDefault();

     axios
         .post(apiURL + apiKey, {
            name: event.target.name.value,
            comment: event.target.comment.value
         })
         .then(() => {
            getResponse();
         })
            form.reset();
         });

// Get comment function
 let getResponse = () => {
     axios
         .get(apiURL + apiKey)
         .then(response => {
             console.log(response)
             displayComment(response.data.sort((a, b) => {
                 return b.timestamp - a.timestamp
             })
            )
        })        

 };
 getResponse();


 
 function displayComment(listArray) {
    let commentsContainer = document.querySelector(".comments__posted-list");
    
        commentsContainer.innerHTML="";

     listArray.forEach(listArray => {

         let commentsSection = document.createElement("div");
         commentsContainer.appendChild(commentsSection);
         commentsSection.className = "comments__section";

         let circleSection = document.createElement("div");
         commentsSection.appendChild(circleSection);
         circleSection.className = "comments__circle-section";

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

         let deleteButton = document.createElement("button");
         textSection.appendChild(deleteButton);
         deleteButton.innerHTML = "REMOVE"
         deleteButton.className = " comments__delete-button";
         deleteButton.id = listArray.id;         
         deleteButton.addEventListener("click", (event) => {
            let idNumber = event.target.id;
            deleteComment(idNumber);
         });

     })
 }

 let deleteComment = (id) => {
    axios
       .delete("https://project-1-api.herokuapp.com/comments/" + id + "?api_key=" + apiKey)
       .then(() => {
           getResponse();
       })
}


