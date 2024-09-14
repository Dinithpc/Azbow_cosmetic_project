interface PaginationProps {
    totalProducts: number;
    productsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
  
  export default function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }: PaginationProps) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="flex justify-center space-x-2 mt-4">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => setCurrentPage(number)}
                className={`px-4 py-2 rounded-lg ${
                  number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  