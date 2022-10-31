function analizar(){
    alert("Analizando Estado de la Carrera")
}

function trarP(){
    let p = document.getElementsByClassName("materia")
    return p[0]
}

function detallar(){
    let p = trarP()
    let m = prompt("Ingrese Materia")
    let materia = document.getElementsByClassName(m)
    materia = materia[0].getElementsByTagName("td")
    p.innerHTML = `Nombre de Materia: ${materia[0].innerHTML} <br> Codigo: ${materia[1].innerHTML} <br> 
        Estado: ${materia[3].innerHTML}`
}

