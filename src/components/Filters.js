import FilterMovie from './FilterMovie';
import FilterYears from './FilterYears';
import '../styles/Filters.scss';
function Filters(props) {
  return (
    <section className='filters'>
      <form onSubmit={props.handleNoSubmit}>
        <fieldset className='filters__fieldset'>
          <FilterMovie
            handleFilterMovies={props.handleFilterMovies}
            filterMovies={props.filterMovies}
          />
          <FilterYears
            years={props.years}
            handleFilterYears={props.handleFilterYears}
            yearSearchValue={props.yearSearchValue}
          />
        </fieldset>
      </form>
    </section>
  );
}
export default Filters;
