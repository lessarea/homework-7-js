export function getStartAndEndPage(totalPages, currentPage) {
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages <= 7) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= 4) {
    endPage = 7;
  } else if (currentPage + 4 >= totalPages) {
    startPage = totalPages - 5;
    endPage = totalPages;
  } else {
    startPage = currentPage - 3;
    endPage = currentPage + 3;
  }
  return { startPage, endPage };
}

export function getStartAndEndPageForSmallScreen(totalPages, currentPage) {
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= 3) {
    endPage = 5;
  } else if (currentPage + 4 >= totalPages) {
    startPage = totalPages - 3;
    endPage = totalPages;
  } else {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }
  return { startPage, endPage };
}

export function getPokemonsByPage(pokemons, page, pageSize) {
  const from = pageSize * (page - 1);
  return pokemons && pokemons.slice(from, from + pageSize);
}

export function checkAndGetItem(array, item) {
  const catchedItem = array && array.find(el => el.id === item.id);
  return catchedItem ? catchedItem : item;
}
