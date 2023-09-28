import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type PageProps = {
  page: number;
  pageCount: number;
  pageHandler: (direction: string) => void;
};

const Paginate: React.FC<PageProps> = ({ page, pageCount, pageHandler }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="inline-flex items-center justify-center gap-3">
        {1 < page && (
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Previous Page</span>
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => pageHandler('previous')} />
          </a>
        )}
        <p className="text-xs text-gray-900">
          {page}
          <span className="mx-0.25">/</span>
          {pageCount}
        </p>

        {page < pageCount && (
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <FontAwesomeIcon icon={faChevronRight} onClick={() => pageHandler('next')} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Paginate;
