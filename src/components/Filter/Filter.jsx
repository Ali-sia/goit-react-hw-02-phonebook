import PropTypes from 'prop-types';

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

Filter.propTypes = {
  filtrValueid: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
