
const user = document.getElementById("exampleInputUsername1")
//exampleInputUsername1
const submit = document.querySelector("button")

const welcome = document.createElement("h1")
const form = document.getElementsByTagName("form")
console.log(form)
welcome.innerText = "WELCOME!!!"
let dive = document.querySelector(".container")


let checkPass = () => {
   let password = document.forms["myForm"]["exampleInputPassword1"].value;
   if (password == "12345678") {
      while (dive.firstChild) {
         dive.removeChild(dive.firstChild)
      }
      dive.appendChild(welcome)
   }
   else
      alert("Incorrect Password!!")

}
