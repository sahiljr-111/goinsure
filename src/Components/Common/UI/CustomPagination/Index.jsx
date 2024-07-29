import React, { useEffect } from "react";
import { Pagination, SelectPicker } from "rsuite";
import { ArrowLeft } from "iconsax-react";
const data = [10, 20, 50].map((item) => ({ label: item, value: item }));
function CustomPrevIcon() {
  return <ArrowLeft size="23" color="#475467" />;
}

function CustomNextIcon() {
  return (
    <ArrowLeft
      size="23"
      color="#475467"
      style={{ transform: "rotateY(180deg)" }}
    />
  );
}

function CustomPagination({
  totalCount,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
}) {
  return (
    <>
      <div className="d-flex align-items-center gap-3 my-3 pagination-main">
        <SelectPicker
          data={data} // Options for items per page
          searchable={false}
          cleanable={false}
          placeholder="10"
          defaultValue={currentPage}
          onChange={(value) => {
            setLimit(value);
            setCurrentPage(1);
          }}
        />
        <Pagination
          size="lg"
          total={totalCount}
          limit={limit}
          activePage={currentPage}
          onSelect={setCurrentPage}
          prev={<CustomPrevIcon />}
          next={<CustomNextIcon />}
        />
      </div>
    </>
  );
}

export default CustomPagination;
