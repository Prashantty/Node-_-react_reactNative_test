function fun1(){

    console.log("First statement ")
    return await("A");
    console.log("Last")
}

async function fun2(){

    console.log("Inside async await function..")
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    var data = await response.json();
    return response;


}


//console.log(fun1());
//fun1().then(res=> console.log(res))
fun2().then(res=> console.log(res));
console.log("B");
console.log("c");
console.log("d");
console.log("e");
console.log("f");
console.log("g");
console.log("h");
console.log("i");

