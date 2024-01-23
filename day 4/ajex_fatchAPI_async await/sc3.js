
function btnInsert(){

    alert("Recoreded inserted!!")
    fetch("http://localhost:3000/posts", 
    { method: 'POST', 
    body: JSON.stringify({ title: 'Ashvi',
    auther: 'Master in compuer application',
     userId: 10}), 
     headers: { "Content-type": "application/json" 
   } }) .
     then(response => response.json()) 
     .then(json => console.log(json)
     )
    
}


function btnGet(){

    console.log("Insert button started....")
    fetch("http://localhost:3000/posts") 
    .then(response => response.json())
    .then(json => console.log(json))
    alert("Record fatched!!!")
    console.log("Insert button ended.....")

}



function Edit(){

    fetch('https://localhost:3000/posts/11',
    { method: 'PUT', body: JSON.stringify({ id: 11, title: 'Ashvi Gupta', auther: 'MCA' }), headers: { "Content-type": "application/json; charset=UTF-8" } }) .then(response => 
   response.json()) .then(json => console.log(json))
   alert("Edited ...")
   console.log("Selected data Edited....")
}


function Delete(){
       
      fetch('http://localhost:3000/posts/10', 
  { method: 'DELETE', })
  alert("Record is deleted !!!!")
  console.log("Selected data deleted")

}



  