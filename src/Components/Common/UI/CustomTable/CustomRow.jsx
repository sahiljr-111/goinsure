import CustomCell from "./CustomCell.jsx";

const CustomRow = ({ row, prepareRow }) => {
  prepareRow(row);
  return (
    <tr
      {...row.getRowProps()}
      style={{ background: row.index % 2 === 0 ? "lightgray" : "white" }}
    >
      {row.cells.map((cell) => (
        <CustomCell key={cell.column.id} cell={cell} />
      ))}
    </tr>
  );
};

export default CustomRow;
