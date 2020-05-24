// // Basic Example of Promise
// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Got the user");
//         //resolve({user:"Aditya"});
//         reject(new Error("User got an Error"));
//     },1000);
// });


// promise.then(user => {
//     console.log(user);
// }).catch(err => console.log(err.message));


// Using Multiple functions

function loginUser(email,password){
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            console.log("Data Avaliable");
            resolve({ userEmail : email});
        },2000);

    });
}

function getUserVideos(email){
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve(["video1","video2","video3"]);
        },1000);

    });
}

function getDetails(video){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Title of The Vdo");
        },1000);
    });
}

// Calling method 1
// loginUser("Aditya@gmail.com","12345678")
// .then((user) => {
//     console.log(user.userEmail); 
//     getUserVideos(user.userEmail).then((video) =>{
//         console.log(video[0]);
//         getDetails(video[0]).then((details) => {
//             console.log(details);
//         });
//     });
// });

// Calling method 2
loginUser("Aditya@gmail.com","12345678")
.then((user) => {
    console.log(user.userEmail); 
    return getUserVideos(user.userEmail);
}).then((video) => {
    console.log(video[0]);
    return getDetails(video[0]);
}).then((detail) => {
    console.log(detail);
});

// Calling method 3
// loginUser("Aditya@gmail.com","12345678")
// .then(user => getUserVideos(user.userEmail))
// .then(videos => getDetails(videos[0]))
// .then(detail => console.log(detail));

console.log("End");