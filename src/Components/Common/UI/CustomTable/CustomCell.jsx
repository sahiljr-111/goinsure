import CustomRenderBlock from "./CustomRenderBlock";

const DefaultCellRenderer = ({ value }) => <div>{value}</div>;

const CustomCell = ({ cell }) => {
  const renderCellContent = cell.column.Cell || DefaultCellRenderer;
  return (
    <td {...cell.getCellProps()}>
      <CustomRenderBlock content={renderCellContent(cell)} />
    </td>
  );
};

export default CustomCell;
