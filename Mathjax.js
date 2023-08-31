let ajout = document.querySelector('.equation')

function areteE() {
    let ajout = document.querySelector('.equation')

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let aireTotal = document.createElement("h1")
    aireTotal.id = "aireTotal"
    aireTotal.innerHTML = `\\(A_{t} = A * 6\\)`
    ajout.appendChild(aireTotal)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = A * r\\)`
    ajout.appendChild(volume)

    let diagonaleFace = document.createElement("h1")
    diagonaleFace.id = "diagonale"
    diagonaleFace.innerHTML = `\\(D_{f} = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonaleFace)

    let diagonaleCube = document.createElement("h1")
    diagonaleCube.id = "diagonaleCube"
    diagonaleCube.innerHTML = `\\(D_{c} = \\sqrt{r * r + D_{f}²}\\)`
    ajout.appendChild(diagonaleCube)

    MathJax.typesetPromise()
}

function aireE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = \\sqrt{A}\\)`
    ajout.appendChild(arete)

    let aireTotal = document.createElement("h1")
    aireTotal.id = "aireTotal"
    aireTotal.innerHTML = `\\(A_{t} = A * 6\\)`
    ajout.appendChild(aireTotal)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = A * r\\)`
    ajout.appendChild(volume)

    let diagonaleFace = document.createElement("h1")
    diagonaleFace.id = "diagonale"
    diagonaleFace.innerHTML = `\\(D_{f} = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonaleFace)

    let diagonaleCube = document.createElement("h1")
    diagonaleCube.id = "diagonaleCube"
    diagonaleCube.innerHTML = `\\(D_{c} = \\sqrt{r * r + D_{f}²}\\)`
    ajout.appendChild(diagonaleCube)

    MathJax.typesetPromise()
}

function aireTotalE() {
    let ajout = document.querySelector('.equation')

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = A_{t} / 6\\)`
    ajout.appendChild(aire)

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = \\sqrt{r}\\)`
    ajout.appendChild(arete)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = A * a\\)`
    ajout.appendChild(volume)

    let diagonaleFace = document.createElement("h1")
    diagonaleFace.id = "diagonale"
    diagonaleFace.innerHTML = `\\(D_{f} = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonaleFace)

    let diagonaleCube = document.createElement("h1")
    diagonaleCube.id = "diagonaleCube"
    diagonaleCube.innerHTML = `\\(D_{c} = \\sqrt{r * r + D_{f}²}\\)`
    ajout.appendChild(diagonaleCube)

    MathJax.typesetPromise()
}

function volumeE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = \\sqrt[3]{r}\\)`
    ajout.appendChild(arete)

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let aireTotal = document.createElement("h1")
    aireTotal.id = "aireTotal"
    aireTotal.innerHTML = `\\(A_{t} = A * 6\\)`
    ajout.appendChild(aireTotal)

    let diagonaleFace = document.createElement("h1")
    diagonaleFace.id = "diagonale"
    diagonaleFace.innerHTML = `\\(D_{f} = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonaleFace)

    let diagonaleCube = document.createElement("h1")
    diagonaleCube.id = "diagonaleCube"
    diagonaleCube.innerHTML = `\\(D_{c} = \\sqrt{r * r + D_{f}²}\\)`
    ajout.appendChild(diagonaleCube)

    MathJax.typesetPromise()
}

function diagFaceE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = D_{f} / \\sqrt{2} \\)`
    ajout.appendChild(arete)

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let aireTotal = document.createElement("h1")
    aireTotal.id = "aireTotal"
    aireTotal.innerHTML = `\\(A_{t} = A * 6\\)`
    ajout.appendChild(aireTotal)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = A * a\\)`
    ajout.appendChild(volume)

    let diagonaleCube = document.createElement("h1")
    diagonaleCube.id = "diagonaleCube"
    diagonaleCube.innerHTML = `\\(D_{c} = \\sqrt{r * r + D_{f}²}\\)`
    ajout.appendChild(diagonaleCube)

    MathJax.typesetPromise()
}

function diagCubeE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = D_{f} / \\sqrt{3} \\)`
    ajout.appendChild(arete)

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let aireTotal = document.createElement("h1")
    aireTotal.id = "aireTotal"
    aireTotal.innerHTML = `\\(A_{t} = A * 6\\)`
    ajout.appendChild(aireTotal)

    let volume = document.createElement("h1")
    volume.id = "volume"
    volume.innerHTML = `\\(V = A * a\\)`
    ajout.appendChild(volume)

    let diagonaleFace = document.createElement("h1")
    diagonaleFace.id = "diagonale"
    diagonaleFace.innerHTML = `\\(D_{f} = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonaleFace)

    MathJax.typesetPromise()
}