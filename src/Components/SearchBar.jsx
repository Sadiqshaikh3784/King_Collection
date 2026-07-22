import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-md">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          border
          border-gray-300
          rounded-full
          py-3
          pl-12
          pr-5
          focus:outline-none
          focus:ring-2
          focus:ring-yellow-500
        "
      />

      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

    </div>
  );
};

export default SearchBar;