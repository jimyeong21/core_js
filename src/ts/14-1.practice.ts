const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

const data = await fetchData(END_POINT);

function fetchPokemon() {
  const arr: Promise<Main>[] = [];
  Array(1000)
    .fill(null)
    .forEach((_, i) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
      arr.push(fetch(url).then((res) => res.json()));
    });
}
