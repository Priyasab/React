// // // // let heading=document.getElementById("formHeader")
// // // // let registerLink=document.getElementById("reg-link")
// // // // let loginLink=document.querySelector("#lgn-link")
// // // // let loginBtn=document.getElementById("log-btn")
// // // // let regBtn=document.getElementById("reg-btn")

// // // // registerLink.addEventListener("click",toRegisterForm)


// // // // function toRegisterForm(){
// // // //     heading.textContent="REGISTER FORM";
// // // //     loginBtn.style.display="none";
// // // //     regBtn.style.display="block";
// // // //     registerLink.style.display="none";
// // // //     loginLink.style.display="block";
// // // // }

// // // // let user=document.getElementById("username");
// // // // let password=document.getElementById("password");

// // // // function login(event){
// // // //     event.preventDefault()
// // // //     user.value;
// // // //     var pass=password.value;
// // // //     console.log(user.value);
// // // //     console.log(pass)
// // // // }
// // // // // loginBtn.addEventListener("click",login)
// // // // function greet(name,callback){
// // // //     console.log(`hello,${name}`)
// // // // callback()
// // // // }
// // // // function wish(){
// // // //     console.log("Hi, Nice to meet you")
// // // // }

// // // // greet("priya",wish)

// // // // // const fruits=new Map([
// // // // // ["apples",500],
// // // // // ["mangoes",300],
// // // // // ["papaya",100]

// // // // // ])
// // // // // console.log(fruits.delete("mangoes"))
// // // // // console.log(fruits)

// // // // // const value= new Set(["a","b","c","d","a","b","c"]);
// // // // // console.log(value)
// // // // const count=false
// // // // let countValue=new Promise(function(resolve,reject){
// // // // if(count){
// // // //     resolve("My promises Fulfilled")
// // // // }else{
// // // //     reject("my promises rejected")
// // // // }
// // // // })
// // // // console.log(countValue)


// // // // countValue.then((msg))
// // // // .catch(msg)


// // // // let myPromise=new Promise(function(resolve,reject){
// // // //     setTimeout(function(){
// // // //         resolve("HI am a Promise")
// // // //     },3000)
// // // // })

// // // // myPromise.then((value)=>{
// // // //     document.getElementById("demo").innerHTML=value
// // // // }).catch((error)=>{
// // // //     console.error(error.message)
// // // // })

// // // // // POST request using fetch()
// // // // fetch("https://jsonplaceholder.typicode.com/posts", {
// // // // // Adding method type
// // // // method: "POST",
// // // // // Adding body or contents to send
// // // // body: JSON.stringify({
// // // // title: "foo",
// // // // body: "bar",
// // // // userId: 1
// // // // }),
// // // // // Adding headers to the request
// // // // headers: {
// // // // "Content-type": "application/json; charset=UTF-8"
// // // // }
// // // // })
// // // // // Converting to JSON
// // // // .then(response => response.json())
// // // // // Displaying results to console
// // // // .then(json => console.log(json));


// // // // constructor(fname, year) {
// // // //     this.fname = name;
// // // //     this.year = year;
    
// // // //     age() {
// // // //     const date = new Date();
// // // //     return date.getFullYear() - this.year;
// // // //     }
// // // // }

// // // //     const myCar = new Car("Ford", 2014);
// // // //     document.getElementById("demo").innerHTML =
// // // //     "My car is " + myCar.age() + " years old.";


// // // function SimulateAsyncOperation(){
// // //     return new Promise((resolve,reject)=>{
// // //         setTimeout(() => {
// // //             resolve("Hi am an Asynchronous operation")
// // //         }, 2000);
// // //     })
// // // }
// // //  async function PerformMyTask(){
// // //     try{
// // //         console.log("starting to find async operation...")
// // //         const result=await SimulateAsyncOperation();
// // //         console.log(result)
// // //         console.log("async task is completed")
// // //     }catch(error){
// // //         console.log("Error occured")
// // //     }
// // //  }
// // //    PerformMyTask()


// // //    class Car {
// // //     constructor(name, year) {
// // //     this.name = name;
// // //     this.year = year;
// // //     }
// // //     }
// // //     let myCar= new Car("Ford",2014)
// // //     console.log(myCar)

// // //     let myCar2= new Car("innova",2011)
  
// // //     console.log(myCar)



// // class Car{
// //     constructor(brand){
// //         this.carname=brand;
// //     }
// //     present(){
// //         return "I have a  "+this.carname
// //     // }
// // }

// // class Model extends Car{
// //     constructor(brand,mod){
// //         super(brand);
// //         this.model=mod
// //     }

// // show(){
// //     return this.present()+ " , it is a "+this.model
// // }
// // }

// // let result= new Model("Ford","Mustang")

// // console.log(result)


// let postUrl="https://jsonplaceholder.typicode.com/posts";

// let init=()=>{
//     let userDetails=document.getElementById("userBody")
//     let outPut=fetch(postUrl).then(data=>{(data.json())
// let items=``;
// outPut.then(posts=>{
//     console.log(posts);
//     posts.forEach(element => {
//         items +=
        
//        
        
        
//     });
// })
//     })
//    // console.log(outPut)

//    userDetails.innerHTML=items
// }





// let postUrl="https://jsonplaceholder.typicode.com/posts";
// let init=()=>{
//     let tBody=document.getElementById("userBody")
// // let output=fetch(postUrl)
// // .then(data=>(data.json()))
// output.then(posts=>{
//     console.log(posts)
//     let item=``;
//     posts.forEach(element => {
//         item+=`
//         <tr>
//         <td>${element.userId}</td>
//         <td>${element.title}</td>
//         <td>${element.body}</td></tr>`
//     });
//     tBody.innerHTML=item
// }).catch(error=>console.log(error))
// }

// init ()

let postUrl="https://jsonplaceholder.typicode.com/posts";

let add=(event)=>{
    event.preventDefault();
    let userId=document.getElementById("userId")
    let userTitle=document.getElementById("title")
    let userBody=document.getElementById("body")

let newObj={
    userId:Number(userId),
    title:userTitle.value,
    body:userBody.value
}
let input=JSON.stringify(newObj);

let output=fetch(postUrl,{
    method:"POST",
    body:input,
    headers:{
        "content-type":"application/json"
    }

}).then(res=>{
    return res.json()
})
output.then(data=>console.log(data))


}



































