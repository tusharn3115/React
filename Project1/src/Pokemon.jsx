import React, { useEffect, useState } from 'react'
import './index.css'
import Card from './components/Card';

const Pokemon = () => {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');



  const api = "http://pokeapi.co/api/v2/pokemon?limit=124"

  const fetchPokemon = async () => {
    try {

      // main url 
      const res = await fetch(api);
      const data = await res.json();


      // url's inside the main url, these url are the ones that contain the information of each pokemon
      const pokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      })


      // getting data from the url's
      const detailedRes = await Promise.all(pokemonData)
      setPokemon(detailedRes);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, [])



  // search functionality
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  if (error) {
    return <div>
      <h1>{error.message}</h1>
    </div>
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokèmon</h1>
        </header>
        <div className='pokemon-search'>
          <input
            type="text"
            placeholder='Search Pokèmon...'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <ul className='cards'>
            {
              searchData.map((curPokemon) => {
                return <Card key={curPokemon.id} data={curPokemon} />
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon