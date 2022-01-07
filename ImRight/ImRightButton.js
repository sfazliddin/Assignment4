
const whoIsCorrect = document.createElement("p")
const divContainer = document.querySelector("div")
let Iam=()=>{
    whoIsCorrect.innerText="I'm right!!"
}
let nope=()=>{
    whoIsCorrect.innerText="No, I'm right!!!"
}
divContainer.append(whoIsCorrect)

