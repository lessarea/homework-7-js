/* eslint-disable no-undef */
const pokemonsUrl = 'http://localhost:3000/pokemons';
const catchedUrl = 'http://localhost:3000/catched';

export function getAllPokemons() {
  return fetch(pokemonsUrl)
    .then(response => response.json());
}

export function getCatchedPokemons() {
  return fetch(catchedUrl)
    .then(response => response.json());
}

export function addToCatched(data) {
  return fetch(catchedUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getCatchedPokemonById(id) {
  return fetch(`${pokemonsUrl}/${id}?_embed=catched`)
    .then(response => response.json());
}
