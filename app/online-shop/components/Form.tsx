import { FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type Props = {
  state: string;
  searchHandler: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  // searchHandler: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form: React.FC<Props> = ({ state, handleInput, searchHandler }) => {
  return (
    <form onSubmit={searchHandler}>
      <div className="relative mx-10 mt-10 mb-7">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Item..."
          value={state}
          onChange={handleInput}
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black bg-[#CE8C3D] rounded-r-lg border border-black hover:bg-[#a47030] focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
