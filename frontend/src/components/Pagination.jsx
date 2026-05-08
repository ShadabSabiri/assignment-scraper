const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-10">

      {/* Previous Button */}
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`px-5 py-2 rounded-xl font-medium transition duration-300 shadow-md
          ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 hover:scale-105"
          }`}
      >
        ← Prev
      </button>

      {/* Page Indicator */}
      <div className="px-6 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 font-semibold">
        Page <span className="text-black">{page}</span> of{" "}
        <span className="text-black">{totalPages}</span>
      </div>

      {/* Next Button */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={`px-5 py-2 rounded-xl font-medium transition duration-300 shadow-md
          ${
            page === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 hover:scale-105"
          }`}
      >
        Next →
      </button>

    </div>
  );
};

export default Pagination;