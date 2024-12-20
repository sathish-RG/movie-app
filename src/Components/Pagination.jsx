

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white rounded px-4 py-2 mr-2 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="mx-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white rounded px-4 py-2 ml-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

