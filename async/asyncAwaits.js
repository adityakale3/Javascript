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



async function displayUser(){
    const loginUsers = await loginUser("Aditya@gmail.com","12345678");
    const videos = await getUserVideos(loginUsers.userEmail);
    const details = await getDetails(videos[0]);
    console.log(details);
}

// async function displayUser(){
//     try {
//         const loginUsers = await loginUser("Aditya@gmail.com","12345678");
//         const videos = await getUserVideos(loginUsers.userEmail);
//         const details = await getDetails(videos[0]);
//         console.log(details);
//     }catch(err){
//         console.log(err);
//     }
// }

displayUser();