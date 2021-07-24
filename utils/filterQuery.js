export const filterQuery = (query, key) => {
  const newQuery = {};
  for (let q in query) {
    if (q !== key) {
      newQuery[q] = query[q];
    }
  }
  return newQuery;
};
