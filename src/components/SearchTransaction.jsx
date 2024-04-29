const SearchTransaction = (props) => {
  return (
    <input
      type="text"
      placeholder="Search transactions..."
      onChange={(e) => props.onSearch(e.target.value)}
    />
  );
}

export default SearchTransaction;
