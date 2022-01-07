const volume = document.createElement('p')
const cont = document.querySelector(".container")
volume.textContent = "5"
console.log(volume.textContent)

let getVolume = () => {
    let radius = document.forms["findingVolume"]["radiusInput"].value
    volume.textContent = "Volume of Sphere= " + 4 * Math.PI * Math.pow(radius, 3) / 3
    console.log("radius= ", radius)
    console.log("volume=", volume)
    cont.appendChild(volume)
    return false



}
