const Pagination = ({ totalPages, currentPage, onPageChange }) => (
    <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
                key={pageNumber}
                className={`page-button ${currentPage === pageNumber ? 'active' : ''}`}
                onClick={() => onPageChange(pageNumber)}
            >
                {pageNumber}
            </button>
        ))}
        <button 
            className="page-button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </button>
    </div>
);

export default Pagination