var xhr = new XMLHttpRequest();
function btnInsert()
{
    xhr.open("POST", "http://localhost:3000/posts", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    params = {
        "id": 55,
        "title": "Prashant",
        "auther": "MCA"
        };

        xhr.onload = function ()
    {
        //alert("Record Inserted!!");
        console.log(xhr.responseText);
        console.log(document.getElementById("exampleModal1").innerHTML);
        document.getElementById("exampleModal1").innerHTML;
        document.getElementById("div5").innerHTML = xhr.responseText;
    }
     
    xhr.send(JSON.stringify(params));
    

}





 function btnGet()
 {

    xhr.open("get", "http://localhost:3000/posts")
    xhr.getResponseHeader('Content-Type', 'application/json');
    xhr.send(null);

    xhr.onload = function()
    {
        console.log(xhr.responseText);
        console.log(document.getElementById("div1").innerHTML) ;
        document.getElementById("exampleModal2").innerHTML;
        document.getElementById("div5").innerHTML = xhr.responseText;
    }
    
         
 }

 function Delete(){
      console.log("Running...")
    
      xhr.open("delete","http://localhost:3000/posts/13")

      xhr.send(null);

      xhr.onload = function()
      {
        //alert("Selected Record Deleted ");
        console.log(xhr.responseText);
        
        
     }
     document.getElementById("exampleModal4").innerHTML;
        document.getElementById("div5").innerHTML = xhr.responseText;
    

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
            //alert("Record Edited !!");
            console.log(xhr.responseText);
            document.getElementById("exampleModal3").innerHTML;
            document.getElementById("div5").innerHTML = xhr.responseText;
        }

    
        xhr.send(JSON.stringify(params));

    

}
 



