import {currentLanguageCode} from "../helpers/helpers";
import ReactPaginate from "react-paginate";

export default function Pagination({pages, setPage}) {
    const handlePageClick = (data) => {
        let currentPage = data?.selected + 1;
        setPage(currentPage);
    };
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={false}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pages}
                previousLabel={false}
                renderOnZeroPageCount={null}
                containerClassName={`main_pagination flex align-items-center gap-[10px] justify-between w-fit  _pagination mt-4 ${
                    currentLanguageCode === "en" ? "en" : "sds"
                }`}
                pageClassName="pagination-li"
                activeClassName="pagination-li-active"
                nextLinkClassName="pagination-li-next"
                // containerClassName="d-flex align-items-center gap-2 justify-content-end mt-4"
                previousLinkClassName="pagination-li-previous"
            />
        </div>
    );
}
