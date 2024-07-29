import { useTable, usePagination } from "react-table";
import CustomCell from "./CustomCell";
import Index from "../CustomPagination/Index";

const CustomTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  

  return (
    <div>
      <div className="table-responsive scrollbar">
        <table
          {...getTableProps()}
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={`${index}-tr`} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th key={`${index}-tr-${i}-th`} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={`${i}-tr-body`} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <CustomCell key={cell.column.id} cell={cell} />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="pagination d-flex align-items-center gap-4 mt-3">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <Previous size="32" color="#FF8A65" />
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <Next size="32" color="#FF8A65" />
        </button>
      </div> */}
      <Index />
    </div>
  );
};

export default CustomTable;
