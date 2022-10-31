
function analizar(){
    let p = trarP()     //Parrafo a insertar
    let materias = document.getElementsByTagName('tr')  //Traigo todas las filas
    let a = 0, c = 0, ep = 0
    for(let m of materias){
        if  (!(m.classList.contains('semestre') || m.classList.contains('anio') || m.classList.contains('encabezado'))){
            let materia = m.getElementsByTagName("td")
            materia = materia[3].querySelector('select').value
            switch(materia){
                case 'Aprobado':
                    a++
                    break
                case 'Cursada':
                    c++
                    break
                default:
                    ep++
            }    
        }
    }
    p.innerHTML = `Materias con Final: ${a} <br> Materias con Cursada: ${c} <br> 
    Materias en Curso: ${ep}`
    //alert("Analizando Estado de la Carrera")
}

function trarP(){
    //Almacenar en p la etiqueta del parrafo a insertar
    let p = document.getElementsByClassName("materia")
    return p[0]
}

function detallar(){
    let p = trarP()     //Parrafo a insertar
    let m = prompt("Ingrese Materia")   //Materia a buscar
    let materia = document.getElementsByClassName(m)    //Fila de la materia
    materia = materia[0].getElementsByTagName("td")     //Columnas de la materia

    p.innerHTML = `Nombre de Materia: ${materia[0].innerHTML} <br> Codigo: ${materia[1].innerHTML} <br> 
        Estado: ${materia[3].querySelector('select').value}`
}

