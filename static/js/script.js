// let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let maleKhanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// let femaleKhanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// let formValidation = function() {
//     hideElement();
//     let dateData = document.forms["khanEntry"]["data"].value
//     let genderData = document.forms["khanEntry"]["gender"].value

//     if (dateData == "" || genderData == "") {
//         unhideElement();
//         alert("Ensure all inputs are entered correctly to get your Khan name")
//         return false;
//     } else {

//         getUserDetails();
//     }
// }
// let getUserDetails = function() {
//     let data = document.getElementById("data").value;
//     let gender = document.getElementById("gender").value
//     let genDate = new Date(data).getDay();

//     Generate Akan Name(genDate, gender)
// }

// let display = document.getElementById("display")

// let getAkhanName = function(day, gender) {
//     if (gender === "Male") {
//         display.innerHTML = `<p>Your Akan name is <strong> ${maleKhanNames[day]}</strong>  becuase you are a ${gender} born on ${daysArray[day]}</p>`

//     } else if (gender === "Female") {
//         display.innerHTML = `<p>Your Akan name is <strong> ${femaleKhanNames[day]} </strong>  becuase you are a ${gender} born on ${daysArray[day]}</p>`
//     }
// }

// let hideElement = function() {
//     var x = document.getElementById("hiden-display");
//     x.style.display = "block";

// }

// let unhideElement = function() {
//     var x = document.getElementById("hiden-display");
//     x.style.display = "none";

// }

// let back = function() {
//     location.reload();
// }
let day = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let maleNames = ["kwasi", "kwako", "kwabena", "kwaku", "yow", "kofi", "kwame"];
let femaleNames = ["Akosua", "AdWOA", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function dayOfBirth() {
    let
}