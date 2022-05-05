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
        />
      </form>
    </section>
  );
}
export default Filters;
