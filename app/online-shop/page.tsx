'use client';
import { useEffect, FormEvent, useState } from 'react';

import Image from 'next/image';

import { fetchDataFromApi } from '@/utils/api';

import OnlineMerch from './components/OnlineMerch';
import Form from './components/Form';
import FilterSort from './components/FilterSort';
import { Product } from './type';
import Paginate from './components/Paginate';
import Link from 'next/link';

const defaultURL = '/api/products?populate=id,name,description,price,image,stock';

export default function Page() {
  // Setting all products fetched
  const [products, setProducts] = useState<Product[]>([]);

  // State for Filter dropdown
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('default filter');

  // State for Sort dropdown
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('default sort');

  // Search state
  const [searchText, setSearchText] = useState('');

  // Page states
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);

  // Setting loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  // Opening the filter dropdown
  const filterOpen = () => {
    setIsSortOpen(false);

    if (!isFilterOpen) {
      setSort('default sort');
    }
    setIsFilterOpen(!isFilterOpen);
  };

  // Setting the filter mode
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  // Opening the sort dropdown
  const sortOpen = () => {
    setIsFilterOpen(false);

    if (!isSortOpen) {
      setFilter('default sort');
    }
    setIsSortOpen(!isSortOpen);
  };

  // Setting the sort mode
  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSort(e.target.value);
  };

  // Setting the user input for search
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchText(e.target.value);
  };

  // Search from strapi database using user input from searchText state
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText == '') {
      await handleGetProducts('default');
    } else if (searchText) {
      const fixedSearchText = searchText.replace(/\s+/g, '+');
      const response = await fetchDataFromApi(`${defaultURL}&filters[name][$startsWithi]=${fixedSearchText}`);

      handleProducts(response?.data);
    }
  };

  // Fetching the products from strapi db depends on the order from the user
  const getProducts = async (order: string) => {
    let response;
    switch (order) {
      case 'default':
      case 'default filter':
      case 'default sort':
        response = await fetchDataFromApi(`${defaultURL}`);
        break;

      case '$40 <= X':
        response = await fetchDataFromApi(`${defaultURL}&filters[price][$gt]=40`);
        break;

      case '$20 < X < $40':
        response = await fetchDataFromApi(`${defaultURL}&filters[price][$gt]=20&filters[price][$lt]=40`);
        break;

      case 'X <= $20':
        response = await fetchDataFromApi(`${defaultURL}&filters[price][$lte]=20`);
        break;

      case 'name[asc]':
        response = await fetchDataFromApi(`${defaultURL}&sort=name:asc`);
        break;

      case 'name[desc]':
        response = await fetchDataFromApi(`${defaultURL}&sort=name:desc`);
        break;

      default:
        break;
    }

    return response;
  };

  // Handling the order form the user and pass it to the "getProducts" function above and passing the result to some functions
  const handleGetProducts = async (mode: string) => {
    const allProducts = await getProducts(mode).catch(console.error);
    const products = allProducts?.data;
    const page = allProducts?.meta?.pagination?.page;
    const pageCount = allProducts?.meta?.pagination?.pageCount;

    handlePages(page, pageCount);
    handleProducts(products);
  };

  // Setting the page and page count to states
  const handlePages = (page: number, pageCount: number) => {
    if (page && pageCount) {
      setPage(page);
      setPageCount(pageCount);
    } else {
      console.log('could not found pages');
    }
  };

  // Change the page state depends on the direction the user moved on to
  const handlePageMove = (direction: string) => {
    if (direction === 'next') {
      setPage((prevPage) => prevPage + 1);
    } else if (direction === 'previous') {
      setPage((prevPage) => prevPage - 1);
    }
  };

  // Setting the products to the products state and modify Loading and DataLoaded state
  const handleProducts = (data: Product[]) => {
    if (data) {
      setProducts(data);
      setIsLoading(false);
      setIsDataLoaded(true);
    } else if (!data) {
      console.log('could not fetch properly');
    }

    return;
  };

  // Fetching the all products data from strapi db every time filter or sort mode changed
  useEffect(() => {
    const fetchProducts = async () => {
      let mode = 'default';
      if (isFilterOpen && filter !== 'default filter') {
        await handleGetProducts(filter);
      } else if (isSortOpen && sort !== 'default sort') {
        await handleGetProducts(sort);
      } else {
        await handleGetProducts(mode);
      }
    };

    fetchProducts();
  }, [filter, sort]);

  return (
    <>
      <div className="mt-28 w-full flex flex-col items-center relative">
        <OnlineMerch />
        <div className="bg-white w-full">
          <Form state={searchText} handleInput={handleInput} searchHandler={handleSearch} />
          <div className="flex flex-row mx-10 justify-between">
            <div className="flex font-Poppins font-semibold xs:text-xs">Online Store</div>
            <div className="flex mb-3">
              <FilterSort
                mode="filter"
                state={filter}
                open={isFilterOpen}
                openHandler={filterOpen}
                handler={handleFilter}
              />
              <FilterSort mode="sort" state={sort} open={isSortOpen} openHandler={sortOpen} handler={handleSort} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 mx-10 font-Poppins border-t border-r border-l border-black">
            {isLoading ? (
              <p>Loading...</p>
            ) : isDataLoaded ? (
              products.map((product, index) => (
                <Link
                  href={`online-shop/${product.id}`}
                  className={
                    'flex flex-col items-center border-b border-black' +
                    (index % 4 !== 3 ? ' lg:border-r' : '') +
                    (index % 3 !== 2 ? ' md:only:border-r' : '')
                  }
                >
                  <>
                      <Image
                        src={product?.attributes?.image?.data?.[0]?.attributes?.url}
                        alt="product Image"
                        width={150}
                        height={50}
                        style={{ width: 'auto', height: 'auto' }}
                        className="pt-10 flex-grow"
                      />
                      <div className="w-full flex flex-col text-left pl-2 my-3 flex-grow-0">
                        <h3 className="font-semibold font-Poppins">{product.attributes.name}</h3>
                        <p className="font-semibold font-Poppins">${product.attributes.price} CAD</p>
                      </div>
                  </>
                </Link>
              ))
            ) : (
              <p>Data not found</p>
            )}
          </div>
          <Paginate page={page} pageCount={pageCount} pageHandler={handlePageMove} />
        </div>
      </div>
    </>
  );
}
