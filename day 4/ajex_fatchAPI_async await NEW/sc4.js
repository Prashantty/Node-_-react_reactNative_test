function fun1(){

    console.log("First statement ")
    return await("A");
    console.log("Last")
}

async function btnGet(){

    console.log("Inside async await function..")
    var response = await fetch("http://localhost:3000/comments");
    var data = await response.json();
    return data;

}

btnGet()
.then(a =>{
    console.log(a)
    console.log("inside fun1()")
    const js = JSON.stringify(a);
     console.log(js)

    const ja = JSON.parse(js);

    console.log(ja)

    var str = '';

    ja.forEach(element => {

        str += `<h3>${element.id}</h3>
                <p>${element.body}</p>
                <p>${element.postId}</p>`
        document.getElementById("inner").innerHTML= str;
        
    });



})


//console.log(fun1());
//fun1().then(res=> console.log(res))
// fun2().then(res=> console.log(res));
// console.log("B");
// console.log("c");
// console.log("d");
// console.log("e");
// console.log("f");
// console.log("g");
// console.log("h");
// console.log("i");

