import FilterMovie from './FilterMovie';
function Filters(props) {
  return (
    <section>
      <form>
        <FilterMovie handleFilterMovies={props.handleFilterMovies} />
      </form>
    </section>
  );
}
export default Filters;
