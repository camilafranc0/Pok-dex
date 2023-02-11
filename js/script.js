
const pokemonName = document.querySelector('#pokemon_nome')
const pokemonNumber = document.querySelector('.pokemon_numero')
const pokemonImage = document.querySelector('.pokemon1')

const form = document.querySelector('.form')
const input = document.querySelector('.input_search')

const bntPrev = document.querySelector('.botao1')
const bntNext = document.querySelector('.botao2')

let searchPokemon = 1


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 200){
        const data = await APIResponse.json()   

        return data
    }
   
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'carregando...'
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon)
    
    if(data){
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }else{
        pokemonName.innerHTML = 'Não existe :/'
        pokemonNumber.innerHTML = ''
        pokemonImage.style.display = 'none'
        
    }
}


form.addEventListener('submit' , (evento) =>{
    event.preventDefault()
   
    renderPokemon(input.value.toLowerCase())
    input.value = ''
   
})


bntPrev.addEventListener('click' , () =>{
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon)
    }

})

bntNext.addEventListener('click' , () =>{
    searchPokemon += 1
    renderPokemon(searchPokemon)

})

renderPokemon(searchPokemon)


    

   

