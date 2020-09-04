 
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
    

    // Inserting starting comments + creating function for inserting new array information

    function showComments(listArray) {
    let commentsContainer = document.querySelector(".comments__posted-list");

        for (let i = 0; i < listArray.length; i++) {
            let commentsSection = document.createElement("div");
            commentsContainer.appendChild(commentsSection);
            commentsSection.className += "comments__section";

            let textSection = document.createElement("div");
            textSection.className +="comment__text-default";
            commentsContainer.appendChild(textSection);

            let comments = document.createElement("p");            
            comments.innerText = listArray[i]["comment"];
            textSection.appendChild(comments);
            comments.className += "comment__text-comment";

        }

    }

showComments(postedList);

    