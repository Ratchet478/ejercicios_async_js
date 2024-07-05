async function getFromAPI(search) {
    const baseURL = "https://thronesapi.com/api/v2/"
    try {
        const respuesta = await fetch(baseURL + search);
        const datos = await respuesta.json()
        return datos
    } catch (error) {
        console.error(error)
    }
}
function getCharacters() {
    return getFromAPI("Characters")
}
function getCharacter(id) {
    return getFromAPI("Characters/" + id)
}

async function precarga() {
    let opciones = document.getElementsByTagName("select")[0]

    try {
        let personajes = await getCharacters()

        personajes.forEach(personaje => {
            let opcion = document.createElement("option")
            opcion.value = personaje.id;
            opcion.text = personaje.fullName
            opciones.appendChild(opcion)

        })
    } catch (error) {
        console.error(error)
    }
}

document.addEventListener("DOMContentLoaded", precarga())
document.getElementById("character-list").addEventListener('change', async function () {
    let valor = this.value;
    let personaje = await getCharacter(valor)
    let elemento = document.getElementsByClassName("character-image")[0]
    elemento.src = personaje.imageUrl;

})