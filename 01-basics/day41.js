//object de-structure

const detailsOfCourse = {
    courseName : "javascript",
    courseFee :4000,
    poweredBy :"web_bocket",
    enrollmentStatus :"active"
};
console.log(detailsOfCourse);
const{enrollmentStatus : es}=detailsOfCourse;
const{CourseName  : cn}=detailsOfCourse;
console.log(es);
console.log(cn);

//function
function name () //function definition
{
    console.log("s");
    console.log("u");
    console.log("b");   //function body or scope
    console.log("r");
    console.log("a");
    console.log("t");
}
// function definition : where we define a function using function keyword and we give a name to a function.

// curly braces are called function scope where the function visiblity and life lies and we write the piece of code inside the function body.
//function call or execution : function call or execution is the most important part.Because without calling a function a function can't execute.

name();     //function call
name();
name();