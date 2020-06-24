import React, { useState , useEffect} from "react";
import axios from "axios";

const PokeCard = props => {
  
  const [ pokemon, setPokemon ] = useState({})
  
  useEffect(() => {
    pegaPokemon(props.pokemon)
  }, [])
  // método que roda após a montagem do componente
  // componentDidMount() {
  //   this.pegaPokemon(props.pokemon);
  // }

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(() => {
      pegaPokemon(props.pokemon)
    }
  , [props.pokemon])

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  

    return (
      
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;
