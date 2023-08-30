let arete = document.getElementById('arete')
let aire = document.getElementById('aire')
let aireTotal = document.getElementById('aireTotal')
let volume = document.getElementById('volume')
let diagFace = document.getElementById('diagFace')
let diagCube = document.getElementById('diagCube')
let button = document.querySelector('button')
let btnReset = document.getElementById('reset')
let modal = document.getElementById('modal')
Numbers = {
    arete: arete.value,
    aire: aire.value,
    aireTotal: aireTotal.value,
    volume: volume.value,
    diagFace: diagFace.value,
    diagCube: diagCube.value
}


arete.onchange = function () {
    let number = Number(arete.value)

    if (number <= 0) {
        arete.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        aire.value = (number * number).toFixed(3)
        aireTotal.value = (aire.value * 6).toFixed(3)
        volume.value = (aire.value * number).toFixed(3)
        diagFace.value = (Math.sqrt(2) * number).toFixed(3)
        diagCube.value = Math.sqrt(number * number + Math.pow(diagFace.value, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}


aire.onchange = function () {
    let number = Number(aire.value)

    if (number <= 0) {
        aire.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newAire = Math.sqrt(number).toFixed(3)
        arete.value = Number(newAire).toFixed(3)
        aireTotal.value = (aire.value * 6).toFixed(3)
        volume.value = (aire.value * arete.value).toFixed(3)
        diagFace.value = (Math.sqrt(2) * arete.value).toFixed(3)
        diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}


aireTotal.onchange = function () {
    let number = Number(aireTotal.value)

    if (number <= 0) {
        aireTotal.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newAire = (number / 6).toFixed(3)
        aire.value = Number(newAire).toFixed(3)
        let newArete = Math.sqrt(newAire).toFixed(3)
        arete.value = Number(newArete).toFixed(3)
        volume.value = (aire.value * arete.value).toFixed(3)
        diagFace.value = (Math.sqrt(2) * arete.value).toFixed(3)
        diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}

volume.onchange = function () {
    let number = Number(volume.value)

    if (number <= 0) {
        volume.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newArete = Math.cbrt(number).toFixed(3)
        arete.value = Number(newArete).toFixed(3)
        aire.value = (arete.value * arete.value).toFixed(3)
        aireTotal.value = (aire.value * 6).toFixed(3)
        diagFace.value = (Math.sqrt(2) * arete.value).toFixed(3)
        diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}

diagFace.onchange = function () {
    let number = Number(diagFace.value)

    if (number <= 0) {
        diagFace.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newArete = (number / Math.sqrt(2)).toFixed(3)
        arete.value = Number(newArete).toFixed(3)
        aire.value = (arete.value * arete.value).toFixed(3)
        aireTotal.value = (aire.value * 6).toFixed(3)
        volume.value = (aire.value * arete.value).toFixed(3)
        diagCube.value = Math.sqrt(arete.value * arete.value + Math.pow(diagFace.value, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}

diagCube.onchange = function () {
    let number = Number(diagCube.value)

    if (number <= 0) {
        diagCube.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newArete = (number / Math.sqrt(3)).toFixed(3)
        arete.value = Number(newArete).toFixed(3)
        aire.value = (arete.value * arete.value).toFixed(3)
        aireTotal.value = (aire.value * 6).toFixed(3)
        volume.value = (aire.value * arete.value).toFixed(3)
        diagFace.value = (Math.sqrt(2) * arete.value).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}

btnReset.onclick = function () {
    arete.value = ""
    aire.value = ""
    aireTotal.value = ""
    volume.value = ""
    diagFace.value = ""
    diagCube.value = ""
    updateNumbers()
    dangerToLink()
}

function updateNumbers() {
    Numbers.arete = arete.value
    Numbers.aire = aire.value
    Numbers.aireTotal = aireTotal.value
    Numbers.volume = volume.value
    Numbers.diagFace = diagFace.value
    Numbers.diagCube = diagCube.value
}

function dangerToLink() {
    arete.classList.replace("is-danger", "is-link")
    aire.classList.replace("is-danger", "is-link")
    aireTotal.classList.replace("is-danger", "is-link")
    volume.classList.replace("is-danger", "is-link")
    diagFace.classList.replace("is-danger", "is-link")
    diagCube.classList.replace("is-danger", "is-link")
}