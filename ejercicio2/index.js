async function getFromAPI(search) {
    const baseURL = "https://pokeapi.co/api/v2/pokemon/"
    try {
        const respuesta = await fetch(baseURL + search);
        const datos = await respuesta.json()
        return datos
    } catch (error) {
        console.error(error)
    }
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.addEventListener("DOMContentLoaded", async function () {
    let pokemon = await getFromAPI(randomNumber(0, 150));
    let elemento = document.getElementsByClassName("random-image")[0]
    elemento.src = await pokemon.sprites.other['official-artwork'].front_default
})