import '../styles/FilterMovie.scss';
function FilterMovie(props) {
  const handleChangeMovies = (ev) => {
    props.handleFilterMovies(ev.target.value);
  };

  return (
    <div>
      <label className='label_filters' htmlFor='fitermovies'>
        Película:
      </label>
      <input
        className='input_filter_movies'
        type='text'
        name='fitermovies'
        id='fitermovies'
        onChange={handleChangeMovies}
        value={props.filterMovies}
      />
    </div>
  );
}
export default FilterMovie;
