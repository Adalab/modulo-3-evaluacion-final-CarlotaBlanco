import FilterMovie from './FilterMovie';
import FilterYears from './FilterYears';
function Filters(props) {
  return (
    <section>
      <form>
        <FilterMovie handleFilterMovies={props.handleFilterMovies} />
        <FilterYears
          years={props.years}
          handleFilterYears={props.handleFilterYears}
          movieSearchValue={props.movieSearchValue}
          yearSearchValue={props.yearSearchValue}
        />
      </form>
    </section>
  );
}
export default Filters;
