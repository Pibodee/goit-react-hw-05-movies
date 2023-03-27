export const moviesMapper = array => {
  return array.map(({ poster_path: poster, vote_count: votes, title, id }) => ({
    poster,
    votes,
    title,
    id,
  }));
};
