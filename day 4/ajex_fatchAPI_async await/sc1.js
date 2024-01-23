console.log("Ajex call");

function btnGet() {

var pr = new XMLHttpRequest();
console.log(pr.readyState);
pr.open("get","http://localhost:3000/posts");

pr.onreadystatechange =  handleRequestStateChange;
pr.send(null);

function handleRequestStateChange()
{
    console.log("inside handleRequestStateChange " + pr.readyState);
    if(pr.readyState==4 && pr.status==200)
    console.log(pr.responseText);
    document.getElementById("div1").innerHTML = pr.responseText;
}
}
