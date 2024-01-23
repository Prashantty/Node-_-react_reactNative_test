var xhr = new XMLHttpRequest();
function btnInsert()
{
    xhr.open("POST", "http://localhost:3000/posts", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    params = {
        "title": "Prashant",
        "auther": "MCA"
        };

        xhr.onload = function ()
    {
        alert("Record Inserted!!");
        console.log(xhr.responseText);
        document.getElementById("div1").innerHTML = xhr.responseText;
    }
     
    xhr.send(JSON.stringify(params));

}


 function btnGet()
 {

    xhr.open("get", "db.json")
    xhr.send(null);

    xhr.onload = function()
    {
        console.log(xhr.responseText);
        document.getElementById("div1").innerHTML = xhr.responseText;
    }
 }

 function Delete(){
      console.log("Running...")
    
      xhr.open("delete","http://localhost:3000/posts/6")

      xhr.send(null);

      xhr.onload = function()
      {
        alert("Selected Record Deleted ");
        console.log(xhr.responseText);
        document.getElementById("div1").innerHTML = xhr.responseText;
     }

}

function Edit(){
   
    console.log("Running...")
    xhr.open("PUT" , "http://localhost:3000/posts/8")
    console.log("running after...");
    xhr.setRequestHeader('Content-Type', 'application/json');

    console.log("running after after...");
    params = {
        "id":8,
        "title": "Aman",
        "auther": "MBA"
        };

    xhr.onload = function ()
        {
            alert("Record Edited !!");
            console.log(xhr.responseText);
            document.getElementById("div1").innerHTML = xhr.responseText;
        }

    
        xhr.send(JSON.stringify(params));

    

}
 



