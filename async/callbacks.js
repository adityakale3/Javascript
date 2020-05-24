// ===========
// EXAMPLE 1
// ===========
// // Sync function
// function printStuff(){
//     console.log("Function running");
// } 
// console.log("Start");
// printStuff();
// console.log("End");

// ===========
// EXAMPLE 2
// ===========
// // Async Function
// console.log("Start");
// setTimeout(() => {
//     console.log("Function is running");
// },2000);
// console.log("End");

// ===========
// EXAMPLE 3
// ===========
// // Without callback

// function loginUser(email,password){
//     setTimeout(() => {
//         console.log("Data Avaliable");
//         return email;
//     },2000);
// }
// console.log("Start");
// const user = loginUser("aditya@gmail.com",'12345678');
// console.log(user);
// console.log("End");


// ===========
// EXAMPLE 4
// ===========
// With callback
function loginUser(email,password,callback){
    setTimeout(() => {
        console.log("Data Avaliable");
        callback({ userEmail : email});
    },2000);
}

function getUserVideos(email,callback){
    setTimeout(() => {
        callback(["video1","video2","video3"]);
    },1000);
}

function getDetails(video,callback){
    setTimeout(() => {
        callback("Title of The Vdo");
    },1000);
}


console.log("Start");
const user = loginUser("aditya@gmail.com",'12345678',(usr) => {
    console.log(usr.userEmail); 
    getUserVideos(usr.userEmail, (vdo) => {
        console.log(vdo);
        getDetails(vdo[0],(title) => {
            console.log(title);
       });
    });  
});
console.log("End");