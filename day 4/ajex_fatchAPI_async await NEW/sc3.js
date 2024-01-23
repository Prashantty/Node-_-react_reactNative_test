
function btnInsert(){

    alert("Recoreded inserted!!")
    fetch("http://localhost:3000/posts", 
    { method: 'POST', 
    body: JSON.stringify({ title: 'Prabhat Kumar dubey',
    auther: 'Master in compuer application',
     userId: 10}), 
     headers: { "Content-type": "application/json" 
   } }) .
     then(response => response.json()) 
     .then(json => console.log(json)
     )
    
}

function btnGet() {
 
  console.log("Insert button started....");
  fetch("http://localhost:3000/posts") 
    .then(response => response.json())
    .then(js => {

      // converting promise into json
      // the jsonString variable contains the JSON data in string format. The JSON.parse() method is used to parse the JSON string into a JavaScript object, which is assigned to the jsonArray variable
     const jsonString = JSON.stringify(js);
     
     // converting json string into json variable
    //  The forEach() method is then called on the jsonArray variable, which is an array of JavaScript objects. The forEach() method iterates over each item in the array, and you can do whatever you want with each item in the loop body.
     const jsonArray = JSON.parse(jsonString);


      console.log("Printing as "+jsonArray)

      let str ='';
      jsonArray.forEach(element => {
        str+=`<div id="${element.id}">
        <h3> ${element.title} </h3> 
        <p> ${element.auther}</p>
         </div>`
        });
        console.log(str)
        
      document.getElementById("inner").innerHTML = str ;
      alert("Record fetched!!!");
      console.log("After the printing "+document.getElementById("inner").innerHTML);
      console.log("Insert button ended.....");
    });
}


//function print()
// {
//   var m = '';
//   m = as;
//   document.getElementById("inner").innerHTML = as;

// }



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



  