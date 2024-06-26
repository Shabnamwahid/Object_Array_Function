/*Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)*/
// Array of students
var students = [
    {
        name: "Saima",
        seniorStatus: true,
        assignmentCompleted: true,
    },
    {
        name: "Hina",
        seniorStatus: false,
        assignmentCompleted: false
    },
    {
        name: "Rida",
        seniorStatus: false,
        assignmentCompleted: false,
    },
];
//students who are seniors and have completed their assignments.
function findSeniorsWithCompAssign(students) {
    return students.filter(function (students) { return students.seniorStatus && students.assignmentCompleted; });
}
var seniorStudentsWithCompletedAssignments = findSeniorsWithCompAssign(students);
console.log("Senior students with completed Assignments", seniorStudentsWithCompletedAssignments);
// Class list update
function updateClassList(students) {
    return students.filter(function (student) { return student.seniorStatus && student.assignmentCompleted; });
}
var updatedClassList = updateClassList;
console.log("Updated class list:", updatedClassList(students));
