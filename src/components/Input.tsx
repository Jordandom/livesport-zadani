import { useState } from 'react';

type InputProps = {
  setFilter: React.Dispatch<React.SetStateAction<any>>;
};

const Input = ({ setFilter }: InputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => setFilter({ q: searchTerm });

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className="block w-96	p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Zadejte hledaný text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSearch}
        disabled={!searchTerm}
      >
        Hledat
      </button>
    </div>
  );
};

export default Input;
