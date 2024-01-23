var posts=[]
function getPost()
{
    console.log("Inside Get post");
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(post => {
        
         console.log(post)
         posts=post;
         console.log(posts)
         console.log(posts.length)
         DisplyPosts();

    }
    )
}

function DisplyPosts()
{
    let str = ""; 
    posts.forEach(function (posts) {
        str += `<div><br>
                    
                    <ol> ${posts.id} </ol>
                    <li>${posts.title} </li>
                    <li>${posts.author} </li> <br>
                    <button class="btn btn-success" type="button"> Post </button>
                </div>`
    });
    document.getElementById("hh").innerHTML = "Posts <br>";
    document.getElementById("ul").innerHTML = str;

    console.log("Students are fetched");
  

}
function post()
{
    console.log("Inside post function ")
    fetch("http://localhost:3000/posts",{
        method: 'POST', 
        body: JSON.stringify(
            {      "id": 10,
            "title": "json-server",
            "author": "typicode"
              }
        ),
       headers: { "Content-type": "application/json" }  
            }).then(res => res.json())
    .then(comm => {
        console.log(comm)
    })
}