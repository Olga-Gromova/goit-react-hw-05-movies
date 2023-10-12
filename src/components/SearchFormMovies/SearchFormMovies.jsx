import { StyledLabel } from './SearchFormMovies.styled';

const SearchFormMovies = ({ handleQuery, queryParam, setPage }) => {
  const onSearch = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    handleQuery(nextParams);
    setPage(1);
  };

  return (
    <StyledLabel>
      <input
        type="text"
        placeholder="Search"
        value={queryParam}
        onChange={onSearch}
      />
    </StyledLabel>
  );
};

export default SearchFormMovies;
