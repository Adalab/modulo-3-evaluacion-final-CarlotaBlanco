function FilterMovie(props) {
  const handleChangeMovies = (ev) => {
    props.handleFilterMovies(ev.target.value);
  };
  return <input type='text' name='' id='' onChange={handleChangeMovies} />;
}
export default FilterMovie;
