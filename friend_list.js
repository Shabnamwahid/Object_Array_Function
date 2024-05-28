//Assignment 1: Building Your Friend List
/*Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list.*/
//Define an object named people containing an empty array called friends
var people = {
    friends: []
};
//Create three separate objects
var friend1 = {
    firstName: "Sidra",
    lastName: "shah",
    id: 1122
};
var friend2 = {
    firstName: "Naila",
    lastName: "Raza",
    id: 3344
};
var friend3 = {
    firstName: "Rabiya",
    lastName: "Zahir",
    id: 5566
};
//add these friend objects to the friends array within the people object
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
//Output the entire people object 
console.log(people);
