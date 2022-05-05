function FilterMovie(props) {
  const handleChangeMovies = (ev) => {
    props.handleFilterMovies(ev.target.value);
  };

  return (
    <>
      <label htmlFor='fitermovies'>Película: </label>
      <input
        type='text'
        name='fitermovies'
        id='fitermovies'
        onChange={handleChangeMovies}
        value={props.movieSearchValue}
      />
    </>
  );
}
export default FilterMovie;
