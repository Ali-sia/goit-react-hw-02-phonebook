const Filter = ({ filtrValue, onChangeFilter }) => {
  return (
    <>
      <label>
        Filter:{' '}
        <input type="text" value={filtrValue} onChange={onChangeFilter} />
      </label>
    </>
  );
};

export default Filter;
