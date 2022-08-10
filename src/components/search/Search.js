import { useState } from 'react';
import PropTypes from 'prop-types';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (data) => {
    setSearch(data);
    onSearchChange(data);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
    />
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
