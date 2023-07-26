let arete = document.getElementById('arete')
let aire = document.getElementById('aire')
let aireTotal = document.getElementById('aireTotal')
let volume = document.getElementById('volume')
let diagFace = document.getElementById('diagFace')
let diagCube = document.getElementById('diagCube')
let button = document.querySelector('button')


arete.onchange = function () {
    let number = Number(arete.value)

    aire.value = number * number
    aireTotal.value = aire.value * 6
    volume.value = aire.value * number
    diagFace.value = Math.sqrt(2) * number
    diagCube.value = Math.sqrt(number * number + Math.pow(diagFace.value, 2))
}


aire.onchange = function () {
    let number = Number(aire.value)

    let newAire = Math.sqrt(number)
    arete.value = newAire
    aireTotal.value = aire.value * 6;
    volume.value = aire.value * arete.value
    diagFace.value = Math.sqrt(2) * arete.value
    diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2))
}


aireTotal.onchange = function () {
    let number = Number(aireTotal.value)

    let newAire = number / 6
    aire.value = newAire
    let newArete = Math.sqrt(newAire)
    arete.value = newArete
    volume.value = aire.value * arete.value
    diagFace.value = Math.sqrt(2) * arete.value
    diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2))
}

volume.onchange = function () {
    let number = Number(volume.value)

    let newArete = Math.cbrt(number)
    arete.value = newArete
    aire.value = arete.value * arete.value
    aireTotal.value = aire.value * 6
    diagFace.value = Math.sqrt(2) * arete.value
    diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2))
}

diagFace.onchange = function () {
    let number = Number(diagFace.value)

    let newArete = number / Math.sqrt(2)
    arete.value = newArete
    aire.value = arete.value * arete.value
    aireTotal.value = aire.value * 6  
    volume.value = aire.value * arete.value
    diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2))  
}

diagCube.onchange = function () {
    let number = Number(diagCube.value)

    let newArete = number / Math.sqrt(3)
    arete.value = newArete
    aire.value = arete.value * arete.value
    aireTotal.value = aire.value * 6
    volume.value = aire.value * arete.value
    diagFace.value = Math.sqrt(2) * arete.value
}