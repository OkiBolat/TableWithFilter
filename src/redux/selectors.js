export const setPages = (state) => {
  const pages = []
  const akk = state.reducer.totalCount / state.reducer.pageSize
  for(let i = 1; i <= akk + 1; i++) {
    pages.push(i)
  }
  return pages
}