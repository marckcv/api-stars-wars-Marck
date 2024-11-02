

const searchInput = document.getElementById('search')
const peopleContainer = document.getElementById('people')

 async function getPeople(name){

    const URI= `https://swapi.dev/api/people/?name=${name}`

    try{
        const response= await fetch(URI) //se hace la peticion a la base swapi 
        const data=  await response.json() //lo convierte a formato json
        console.log(data)
        peopleContainer.innerHTML= '' //limpia el buscador
        // se crea una tarjeta de presentacion para cada unos de los personajes

        const peopleCard= data.results.map(people => {
            //se utiliza tmpley strings para tener html y java script
            return `
            
                    <td>${people.name}</td>
                    <td>${people.hair_color}</td>
                    <td>${people.birth_year}</td>
                    <td>${people.gender}</td>
                    <td>${people.homeworld}</td>
                    <td>${people.starships}</td>
            
           
            `
        }).join('') // Unir todos los elementos en una sola cadena de texto
        peopleContainer.innerHTML = peopleCard // Actualizar el contenedor con las nuevas tarjetas

    }catch(error){
        console.log('Error al obtener los personajes', error)
        console.error('Error al obtener los personajes', error)
    }

}

searchInput.addEventListener('input', (event) => {
    getPeople(event.target.value) // Llamar a la función getPeople con el valor del input de búsqueda
    
})


// Cargar personajes iniciales al cargar la página
getPeople('')