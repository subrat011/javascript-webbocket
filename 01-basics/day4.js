// object literals

const person1 ={
    name : "web_bocket",
    age :23,
    location :"bbsr"
};
console.log(person1);
console.log(person1.location);

//object constructor
const person = {};

person.name =" web_bocket";
person.age=22;
person.location="bbsr";
person.isLoggedIn=true;
person["height"]="5.6"

console.log(person);
console.log(person.name);
console.log(person.location);
console.log(person["height"]);

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(person.hasOwnProperty("isLoggedIn"));
console.log(person1.hasOwnProperty("isLoggedIn"));
console.log(Object.entries(person1));
console.log(Object.entries(person));

//Nester Objects

const userName={
    userFullName : {
        userDetails :{
            fname :"subrat",
            lname :"behera"
        }
    }
}

console.log(userName);
console.log(userName.userFullName.userDetails.fname);
console.log(userName.userFullName.userDetails.lname);

//objects in Array

const arrayObj = [
    {
        id : 121,
        location :"cuttack"
    },
    {
        id : 122,
        location :"bbsr"
    },
    {
        
        id : 123,
        location :"puri"

    },
    {
        id : 124,
        location :"angul"
    }
]
console.log(arrayObj);
console.log(arrayObj[3]);
console.log(arrayObj[2]);

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