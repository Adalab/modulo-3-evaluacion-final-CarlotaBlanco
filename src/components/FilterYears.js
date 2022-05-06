import '../styles/FilterYears.scss';

function FilterYears(props) {
  const handleChangeYears = (ev) => {
    props.handleFilterYears(ev.target.value);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option value={year} key={index}>
          {year}
        </option>
      );
    });
  };
  return (
    <div>
      <label className='label_filters' htmlFor='fiteryears'>
        Año:
      </label>
      <select
        className='select_years'
        name='fiteryears'
        id='fiteryears'
        onChange={handleChangeYears}
        value={props.yearSearchValue}
      >
        <option value='todos'>Todos</option>
        {renderYears()}
      </select>
    </div>
  );
}
export default FilterYears;
