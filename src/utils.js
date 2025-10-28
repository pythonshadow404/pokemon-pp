export const filterByType = (pokemonList, type) => {
  return pokemonList.filter((pokemon) => pokemon.type === type);
};

export const getPokemonNames = (pokemonList) => {
  return pokemonList.map((pokemon) => pokemon.name);
};

export const getStrongestPokemon = (pokemonList) => {
  // 1. Sort the list by attack in descending order
  const sortedByAttack = structuredClone(pokemonList).sort(
    (a, b) => b.attack - a.attack
  );
  // 2. Get the highest attack value
  const highestAttack = sortedByAttack[0].attack;

  // 3. Filter the list to include all Pokemon with that attack value
  return sortedByAttack.filter((pokemon) => pokemon.attack === highestAttack);
};

export const sortByName = (pokemonList) => {
  // TODO: Implement this function
  pokemonList.sort((a, b) => a.name.localeCompare(b.name));
  // Hint: Use array sort method
  // Remember: Don't mutate the original array!
  return pokemonList;
};

export const calculateAverageHP = (pokemonList) => {
  if (pokemonList.length === 0) return 0;
  const totalHP = pokemonList.reduce((sum, pokemon) => sum + pokemon.hp, 0);
  return totalHP / pokemonList.length;
};
