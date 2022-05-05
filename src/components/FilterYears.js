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
    <>
      <label htmlFor='fiteryears'>Año: </label>
      <select name='fiteryears' id='fiteryears' onChange={handleChangeYears}>
        <option value='todos'>Todos</option>
        {renderYears()}
      </select>
    </>
  );
}
export default FilterYears;
