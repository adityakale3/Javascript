/* 
SET TIME OUT
*/
let logCall = function(){
    console.log('Calllog was Called');
};
setTimeout(logCall, 3000);

// Same with inline function
setTimeout(() => {
    console.log('New Set Time Out');
}, 2000);

let students = [
    {name: "Aditya",score:90,living:"East"},
    {name: "Atharva",score:80,living:"West"},
    {name: "Anushri",score:70,living:"North"},
    {name: "Sahil",score:60,living:"South"},
    {name: "Maithili",score:99,living:"East"},
    {name: "Ketki",score:96,living:"East"},
    {name: "Goddy",score:71,living:"East"},
    {name: "Aman",score:10,living:"West"},
    {name: "Appy",score:20,living:"North"},
    {name: "Abhi",score:30,living:"South"},
];

let filterStudents = function(data,callback){
    data.filter((da) => {
        if(da.living === "East"){
            callback(da);
        }
    });
}

filterStudents(students,function(obj){
    if(obj.score > 75){
        console.log(`${obj.name} is from ${obj.living}, has scored ${obj.score}`);
    }
});