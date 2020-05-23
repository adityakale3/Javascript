// Syntax 
// Objects starts with Capital Letter unlike functions 


class User { 
constructor(email,name){ 
// Constructor is the first method to be called once a class in intialized
    this.email = email; 
    this.name = name; 
    this.score = 0; 
} 
    // Even functions can be associated with classes
    login(){ 
        console.log(this.email, ' just logged In'); 
        return this ; //optional for chaining.  
    } 

    logout(){ 
    console.log(this.email, ' just logged Out'); 
    } 

    updateScore(){ 
    this.score++; 
    console.log(this.name,' Score is : ',this.score); 
    } 

} 

class Admin extends User {
// If a class extends another class, then no need to use constructor
// But if you have to use constructor then use keyword SUPER();
deleteUser(users){ 
    var final = user.filter((u) => {
        return u.email != users.email;
    }); 
    } 
}
var userOne = new User("adityakale3@gmail.com","Aditya"); 
var userTwo = new User("atharvakale3@gmail.com","Atharva"); 
var admin = new Admin("admin@gmail.com","Aditya Kale"); 
userOne.updateScore(); 
var user = [userOne,userTwo]; 
console.log("Before Delete " + user[1].name);
admin.deleteUser(userTwo); 
console.log("After Delete " + user[1].name);