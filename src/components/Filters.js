import FilterMovie from './FilterMovie';
import FilterYears from './FilterYears';
function Filters(props) {
  return (
    <section>
      <form>
        <FilterMovie
          handleFilterMovies={props.handleFilterMovies}
          filterMovies={props.filterMovies}
        />
        <FilterYears
          years={props.years}
          handleFilterYears={props.handleFilterYears}
          yearSearchValue={props.yearSearchValue}
        />
      </form>
    </section>
  );
}
export default Filters;
