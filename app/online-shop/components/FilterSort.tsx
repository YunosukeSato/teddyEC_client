import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  mode: string;
  state: string;
  open: boolean;
  openHandler: () => void;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterSort: React.FC<Props> = ({ mode, state, open, openHandler, handler }) => {
  let options;
  if (mode === 'filter') {
    options = [
      {
        id: 'default filter',
        value: 'default filter',
      },
      {
        id: 'second filter',
        value: '$40 <= X',
      },
      {
        id: 'third filter',
        value: '$20 < X < $40',
      },
      {
        id: 'fourth filter',
        value: 'X <= $20',
      },
    ];
  } else if (mode === 'sort') {
    options = [
      {
        id: 'default sort',
        value: 'default sort',
      },
      {
        id: 'second sort',
        value: 'name[asc]',
      },
      {
        id: 'third sort',
        value: 'name[desc]',
      },
    ];
  }

  return (
    <div className="flex flex-col relative">
      <button
        id="dropdownRadioBgHoverButton"
        onClick={openHandler}
        data-dropdown-toggle="dropdownRadioBgHover"
        className="flex text-black hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Poppins font-semibold rounded-lg text-sm mx-5 text-center items-center"
        type="button"
      >
        {mode === 'filter' ? 'Filter by' : 'Sort by'} <FontAwesomeIcon icon={faChevronDown} className="ml-2.5" />
      </button>

      <div
        id="dropdownRadioBgHover"
        className={`${
          !open && `hidden`
        } z-10 absolute top-5 right-0 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownRadioBgHoverButton"
        >
          {options?.map((option, index) => (
            <li key={option.id}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100">
                <input
                  id={option.id}
                  checked={state === option.value}
                  type="radio"
                  value={option.value}
                  onChange={handler}
                  name={option.id}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={option.id} className="w-full ml-2 text-sm font-medium text-gray-900 rounded">
                  {option.value}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSort;
